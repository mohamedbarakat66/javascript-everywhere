export async function withTimeout<T>(
    promise: Promise<T>,
    ms: number
): Promise<T> {
    const timeout = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), ms)
    );

    return Promise.race([promise, timeout]);
}

export async function retry<T>(
    fn: () => Promise<T>,
    retries: number
): Promise<T> {
    try {
        return await fn();
    } catch (err: unknown) {
        if (retries <= 0) throw err;
        return retry(fn, retries - 1);
    }
}

export function errorMessage(err: unknown): string {
    return err instanceof Error ? err.message : String(err);
}
