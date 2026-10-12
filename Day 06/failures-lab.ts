async function attempt(label: string, fn: () => Promise<void>) {
    console.log(`\n========== [ ${label} ] ==========`);

    try {
        await fn();
    } catch (err: any) {
        console.log(`Caught Error: ${err.message || err}`);

        if (err.name) console.log(`err.name: ${err.name}`);
        if (err.cause?.code) console.log(`err.cause.code: ${err.cause.code}`);
    }
}
export {};

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

function isTask(obj: unknown): obj is Task {
    if (typeof obj !== "object" || obj === null) {
        return false;
    }

    const task = obj as Record<string, unknown>;

    return (
        typeof task.id === "number" &&
        typeof task.title === "string" &&
        typeof task.completed === "boolean"
    );
}

async function main() {
    await attempt("Network Failure", async () => {
        try {
            await fetch("http://localhost:9999/tasks");
        } catch (err: any) {
            console.log(`err.name: ${err.name}`);
            console.log(`err.cause.code: ${err.cause?.code || err.code}`);
            throw err;
        }
    });

    await attempt("HTTP 4xx Error", async () => {
        const res = await fetch("http://localhost:3000/tasks/9999");

        if (!res.ok) {
            const data = await res.json();
            console.log(`Status: ${res.status}`, data);
        }
    });

    await attempt("HTTP 5xx Error", async () => {
        const res = await fetch("http://localhost:3000/tasks", {
            headers: { "x-fail": "true" }
        });

        if (!res.ok) {
            console.log(`HTTP Status: ${res.status}`);
        }
    });

    await attempt("Parse Error", async () => {
        const res = await fetch("http://localhost:3000/");
        await res.json();
    });

    await attempt("Shape Failure", async () => {
        const fakeData = { id: "not-a-number", title: 123 };

        if (!isTask(fakeData)) {
            console.log("Invalid task data");
        }
    });

    await attempt("Timeout", async () => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 100);

        try {
            await fetch("http://localhost:3000/tasks", {
                signal: controller.signal
            });
        } finally {
            clearTimeout(timeoutId);
        }
    });

    await attempt("Abort Request", async () => {
        const controller = new AbortController();
        controller.abort();

        await fetch("http://localhost:3000/tasks", {
            signal: controller.signal
        });
    });

    await attempt("Stale Handled", async () => {
        const controller = new AbortController();

        const req1 = fetch("http://localhost:3000/tasks", {
            signal: controller.signal
        }).catch(() => {
            console.log("First request cancelled");
        });

        controller.abort();

        const req2 = await fetch("http://localhost:3000/tasks");
        await req2.json();

        await req1;
        console.log("Second request result used successfully");
    });
}

main();
