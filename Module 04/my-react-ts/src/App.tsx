import TaskFilters, { type SortOption } from "./TaskFilters";
import { useState } from "react";
import TaskCard from "./TaskCard";
import { nextStatus } from "./nextStatus";
import type { Task } from "./types";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React", status: "To Do" },
    { id: 2, title: "Learn TypeScript", status: "In Progress" },
    { id: 3, title: "Build Project", status: "Done" },
  ]);

  const [lastDeletedTask, setLastDeletedTask] = useState<Task | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const doneCount = tasks.filter((task) => task.status === "Done").length;

  const percentage =
    tasks.length === 0 ? 0 : Math.round((doneCount / tasks.length) * 100);

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    }

    if (sortOption === "dueDate") {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;

      return a.dueDate.localeCompare(b.dueDate);
    }

    return 0;
  });

  function handleNextStatus(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: nextStatus(task.status) } : task,
      ),
    );
  }

  function handleDelete(id: number) {
    const deletedTask = tasks.find((task) => task.id === id);

    if (!deletedTask) return;

    setLastDeletedTask(deletedTask);

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

    if (selectedTaskId === id) {
      setSelectedTaskId(null);
    }
  }

  function handleUndo() {
    if (!lastDeletedTask) return;

    setTasks((prevTasks) => [...prevTasks, lastDeletedTask]);

    setLastDeletedTask(null);
  }

  function handleSelectNext() {
    if (sortedTasks.length === 0) return;

    const currentIndex = sortedTasks.findIndex(
      (task) => task.id === selectedTaskId,
    );

    const nextIndex = (currentIndex + 1) % sortedTasks.length;

    setSelectedTaskId(sortedTasks[nextIndex].id);
  }

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task title.");
      return;
    }

    if (dueDate && dueDate < new Date().toLocaleDateString("en-CA")) {
      setError("Due date cannot be in the past.");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      status: "To Do",
      description,
      dueDate,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setTitle("");
    setDescription("");
    setDueDate("");
    setError("");
  }

  return (
    <div className="app">
      <h1>My Tasks</h1>

      <p>
        {doneCount} of {tasks.length} done ({percentage}%)
      </p>

      <form onSubmit={handleAddTask} className="task-form">
        <h2>Add New Task</h2>

        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          maxLength={200}
          onChange={(e) => setDescription(e.target.value)}
        />

        <p
          className={
            description.length > 180 ? "counter counter-danger" : "counter"
          }
        >
          {description.length} / 200
        </p>

        <input
          type="date"
          value={dueDate}
          min={new Date().toLocaleDateString("en-CA")}
          onChange={(e) => setDueDate(e.target.value)}
        />

        {error && (
          <p role="alert" className="error">
            {error}
          </p>
        )}

        <button type="submit">Add Task</button>
      </form>

      {lastDeletedTask && <button onClick={handleUndo}>Undo Delete</button>}

      <button onClick={handleSelectNext}>Select next</button>

      <TaskFilters sortOption={sortOption} onSortChange={setSortOption} />
      {sortedTasks.map((task) => (
        <div
          key={task.id}
          style={{
            border:
              selectedTaskId === task.id
                ? "2px solid blue"
                : "2px solid transparent",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          <TaskCard
            task={task}
            onNextStatus={() => handleNextStatus(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
