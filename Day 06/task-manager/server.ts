import express from "express";

const app = express();
app.use(express.json());

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Task[] = [
    { id: 1, title: "Learn TypeScript", completed: false },
    { id: 2, title: "Build Task API", completed: false }
];

// GET all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// GET one task
app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
});

// POST a new task
app.post("/tasks", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }

    const newTask: Task = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PATCH a task
app.patch("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    const { title, completed } = req.body;

    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;

    res.json(task);
});

// DELETE a task
app.delete("/tasks/:id", (req, res) => {
    const index = tasks.findIndex(t => t.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);
    res.status(204).send();
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});