export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function withTimeout(promise, ms) {
    let timeoutId;

    const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
            reject(new Error("Operation timed out"));
        }, ms);
    });

    try {
        const result = await Promise.race([promise, timeoutPromise]);
        return result;
    } finally {
        clearTimeout(timeoutId);
    }
}

export async function retry(fn, retries = 3, delayMs = 500) {
    try {
        return await fn();
    } catch (error) {
        if (retries <= 0) throw error;

        await delay(delayMs);
        return retry(fn, retries - 1, delayMs * 2);
    }
}