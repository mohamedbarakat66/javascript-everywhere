import { formatTask } from "./format.js";
import { addTasks, readTasks, removeTasks, updateTask } from "./store.js";

const [command, ...args] = process.argv.slice(2);

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

switch (command) {
  case "list": {
    const tasks = await readTasks();

    for (const task of tasks) {
      console.log(formatTask(task));
    }

    break;
  }

  case "add": {
    const title = args.join(" ");

    if (!title) {
      fail("Task title is required.");
    }

    const task = await addTasks(title);
    console.log(`Task added: ${formatTask(task)}`);
    break;
  }

  case "remove": {
    const id = parseInt(args[0]);

    if (isNaN(id)) {
      fail("Invalid task ID.");
    }

    await removeTasks(id);
    console.log(`Task removed: ${id}`);
    break;
  }

  case "update": {
    const [taskId, status] = args;
    const id = parseInt(taskId);

    if (isNaN(id)) {
      fail("Invalid task ID.");
    }

    await updateTask(id, status);
    console.log(`Task updated: ${id}`);
    break;
  }
  case "done": {
    const id = parseInt(args[0]);

    if (isNaN(id)) {
      fail("Invalid task ID.");
    }

    await updateTask(id, "done");
    console.log(`Task completed: ${id}`);
    break;
  }

  default:
    console.log("Usage: node cli.js <list|add|remove|update|done> [args]");
}
