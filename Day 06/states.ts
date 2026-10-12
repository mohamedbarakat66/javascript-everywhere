type LoadState =
    | { status: "idle" }
    | { status: "loading"; progress: number }
    | { status: "success"; data: string }
    | { status: "error"; error: Error };

function describeState(state: LoadState): string {
    switch (state.status) {
        case "idle":
            return "State is idle.";
        case "loading":
            return `Loading... ${state.progress}%`;
        case "success":
            return `Success! ${state.data}`;
        case "error":
            return `Error: ${state.error.message}`;
        default:
            const exhaustiveCheck: never = state;
            return exhaustiveCheck;
    }
}


type NetworkResponse =
    | { state: "offline" }
    | { state: "connecting"; retryCount: number }
    | { state: "connected"; socketId: string };

function handleNetwork(response: NetworkResponse): string {
    switch (response.state) {
        case "offline":
            return "No connection";
        case "connecting":
            return `Retrying: ${response.retryCount}`;
        case "connected":
            return `Connected: ${response.socketId}`;
    }
}


async function processBatch() {
    const promises = [
        Promise.resolve("A"),
        Promise.reject(new Error("B"))
    ];

    const results: PromiseSettledResult<string>[] =
        await Promise.allSettled(promises);

    results.forEach(res => {
        if (res.status === "fulfilled") {
            console.log("Fulfilled:", res.value);
        } else {
            console.log("Rejected:", res.reason);
        }
    });
}

processBatch();
