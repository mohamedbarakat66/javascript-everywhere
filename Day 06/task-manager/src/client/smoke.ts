import {
    listTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} from "./api";

async function runSmokeTest() {
    console.log("=== Starting Smoke Test ===");

    console.log("Creating task...");
    const createRes = await createTask("Smoke Test Task");

    if (!createRes.ok) {
        console.error("Create failed:", createRes.error);
        return;
    }

    const task = createRes.value;
    console.log("Created successfully:", task);

    console.log("Getting task...");
    const getRes = await getTask(task.id);

    if (getRes.ok) {
        console.log("Fetched task:", getRes.value);
    } else {
        console.error("Get failed:", getRes.error);
    }

    console.log("Listing tasks...");
    const listRes = await listTasks();

    if (listRes.ok) {
        console.log(`Total tasks: ${listRes.value.length}`);
    } else {
        console.error("List failed:", listRes.error);
    }

    console.log("Updating task...");
    const updateRes = await updateTask(task.id, { completed: true });

    if (updateRes.ok) {
        console.log("Updated task:", updateRes.value);
    } else {
        console.error("Update failed:", updateRes.error);
    }

    console.log("Deleting task...");
    const deleteRes = await deleteTask(task.id);

    if (deleteRes.ok) {
        console.log("Deleted task successfully");
    } else {
        console.error("Delete failed:", deleteRes.error);
    }

    console.log("=== Smoke Test Completed ===");
}

runSmokeTest();
