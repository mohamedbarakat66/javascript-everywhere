interface Task {
    id: number;
    title: string;
    completed: boolean;
}

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

async function runCrudLab() {
    const API_URL = "http://localhost:3000/tasks";

    try {
        const createRes = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: "Test CRUD Lab Task" })
        });

        if (!createRes.ok) {
            throw new Error("Create failed");
        }

        const newTask: unknown = await createRes.json();

        if (isTask(newTask)) {
            console.log("Created Task:", newTask);

            const taskId = newTask.id;

            const getRes = await fetch(`${API_URL}/${taskId}`);

            if (!getRes.ok) {
                throw new Error("Failed to fetch task");
            }

            const taskData = await getRes.json();
            console.log("Fetched Task:", taskData);

            const updateRes = await fetch(`${API_URL}/${taskId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ completed: true })
            });

            if (!updateRes.ok) {
                throw new Error("Failed to update task");
            }

            const updatedData = await updateRes.json();
            console.log("Updated Task:", updatedData);

            const deleteRes = await fetch(`${API_URL}/${taskId}`, {
                method: "DELETE"
            });

            if (deleteRes.status === 204) {
                console.log("Task deleted successfully");
            } else {
                throw new Error("Failed to delete task");
            }
        } else {
            console.error("Invalid task data");
        }
    } catch (error) {
        console.error("CRUD Error:", error);
    }
}

runCrudLab();
