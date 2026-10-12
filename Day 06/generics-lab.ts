function first<T>(arr: T[]): T {
    return arr[0];
}

const f1 = first(["a", "b"]);
const f2 = first([1, 2, 3]);
const f3 = first([true, false]);

function last<T>(arr: T[]): T {
    return arr[arr.length - 1];
}

const l1 = last(["a", "b"]);
const l2 = last([1, 2, 3]);
const l3 = last([true, false]);


function findById<T extends { id: number }>(
    items: T[],
    id: number
): T | undefined {
    return items.find(item => item.id === id);
}

function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map(item => item[key]);
}

function groupBy<T, K extends string>(
    items: T[],
    getKey: (item: T) => K
): Record<K, T[]> {
    return items.reduce((acc, item) => {
        const key = getKey(item);
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {} as Record<K, T[]>);
}

function unique<T>(items: T[]): T[] {
    return [...new Set(items)];
}


type Result<T> =
    | { ok: true; value: T }
    | { ok: false; error: string };

function safeParse<T>(
    json: string,
    check: (val: unknown) => val is T
): Result<T> {
    try {
        const parsed: unknown = JSON.parse(json);

        return check(parsed)
            ? { ok: true, value: parsed }
            : { ok: false, error: "Invalid shape" };
    } catch {
        return { ok: false, error: "Malformed JSON" };
    }
}


interface Store<T extends { id: number }> {
    add(item: T): void;
    get(id: number): T | undefined;
    all(): T[];
    remove(id: number): boolean;
}

function createStore<T extends { id: number }>(): Store<T> {
    const map = new Map<number, T>();

    return {
        add(item) { map.set(item.id, item); },
        get(id) { return map.get(id); },
        all() { return [...map.values()]; },
        remove(id) { return map.delete(id); }
    };
}


async function withTimeout<T>(
    promise: Promise<T>,
    ms: number
): Promise<T> {
    const timeout = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), ms)
    );

    return Promise.race([promise, timeout]);
}

async function retry<T>(
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

async function mapAsync<T, U>(
    items: T[],
    fn: (item: T) => Promise<U>
): Promise<U[]> {
    return Promise.all(items.map(fn));
}


async function main() {
    console.log("Generics lab running successfully!");
}

main();