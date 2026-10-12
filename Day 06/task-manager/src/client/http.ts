export type ApiError =
    | { kind: "NetworkError"; message: string; cause?: unknown }
    | { kind: "HttpError"; status: number; message: string }
    | { kind: "ParseError"; message: string; cause?: unknown }
    | { kind: "ShapeError"; message: string }
    | { kind: "TimeoutError"; message: string }
    | { kind: "AbortError"; message: string };

export type Result<T> =
    | { ok: true; value: T }
    | { ok: false; error: ApiError };

export async function request<T>(
    url: string,
    options: RequestInit & { timeoutMs?: number } = {},
    validator?: (data: unknown) => data is T
): Promise<Result<T>> {
    const { timeoutMs = 5000, ...fetchOptions } = options;
    const controller = new AbortController();

    let timedOut = false;

    const timeoutId = setTimeout(() => {
        timedOut = true;
        controller.abort();
    }, timeoutMs);

    const externalSignal = fetchOptions.signal;

    const abortRequest = () => controller.abort();

    if (externalSignal) {
        if (externalSignal.aborted) {
            clearTimeout(timeoutId);
            return {
                ok: false,
                error: { kind: "AbortError", message: "Request was aborted" }
            };
        }

        externalSignal.addEventListener("abort", abortRequest, { once: true });
    }

    try {
        const response = await fetch(url, {
            ...fetchOptions,
            signal: controller.signal
        });

        if (!response.ok) {
            let message = `HTTP Error ${response.status}`;

            try {
                const data: unknown = await response.json();

                if (
                    typeof data === "object" &&
                    data !== null &&
                    "error" in data &&
                    typeof data.error === "string"
                ) {
                    message = data.error;
                }
            } catch {
                // Ignore non-JSON error responses
            }

            return {
                ok: false,
                error: {
                    kind: "HttpError",
                    status: response.status,
                    message
                }
            };
        }

        if (response.status === 204) {
            return { ok: true, value: undefined as T };
        }

        let data: unknown;

        try {
            data = await response.json();
        } catch (err) {
            return {
                ok: false,
                error: {
                    kind: "ParseError",
                    message: "Failed to parse JSON response",
                    cause: err
                }
            };
        }

        if (validator && !validator(data)) {
            return {
                ok: false,
                error: {
                    kind: "ShapeError",
                    message: "Response data failed validation"
                }
            };
        }

        return { ok: true, value: data as T };
    } catch (err: unknown) {
        if (timedOut) {
            return {
                ok: false,
                error: {
                    kind: "TimeoutError",
                    message: "Request timed out"
                }
            };
        }

        if (controller.signal.aborted) {
            return {
                ok: false,
                error: {
                    kind: "AbortError",
                    message: "Request was aborted"
                }
            };
        }

        const message = err instanceof Error
            ? err.message
            : "Network error occurred";

        return {
            ok: false,
            error: {
                kind: "NetworkError",
                message,
                cause: err
            }
        };
    } finally {
        clearTimeout(timeoutId);
        externalSignal?.removeEventListener("abort", abortRequest);
    }
}