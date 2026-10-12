import { request, type Result } from "./http";

export type Task = {
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

function isTaskList(obj: unknown): obj is Task[] {
    return Array.isArray(obj) && obj.every(isTask);
}

const API_BASE = "http://localhost:3000/tasks";

export async function listTasks(
    signal?: AbortSignal
): Promise<Result<Task[]>> {
    return request<Task[]>(API_BASE, { signal }, isTaskList);
}

export async function getTask(
    id: number,
    signal?: AbortSignal
): Promise<Result<Task>> {
    return request<Task>(`${API_BASE}/${id}`, { signal }, isTask);
}

export async function createTask(
    title: string,
    signal?: AbortSignal
): Promise<Result<Task>> {
    return request<Task>(
        API_BASE,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title }),
            signal
        },
        isTask
    );
}

export async function updateTask(
    id: number,
    updates: Partial<Omit<Task, "id">>,
    signal?: AbortSignal
): Promise<Result<Task>> {
    return request<Task>(
        `${API_BASE}/${id}`,
        {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updates),
            signal
        },
        isTask
    );
}

export async function deleteTask(
    id: number,
    signal?: AbortSignal
): Promise<Result<void>> {
    return request<void>(
        `${API_BASE}/${id}`,
        {
            method: "DELETE",
            signal
        }
    );
}
