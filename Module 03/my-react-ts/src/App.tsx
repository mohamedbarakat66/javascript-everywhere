import { useState } from "react";
import TaskCard from "./TaskCard";
import { nextStatus } from "./nextStatus";
import type { Task } from "./types";
import "./App.css";

type SortMode = "default" | "title";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React", status: "To Do" },
    { id: 2, title: "Learn TypeScript", status: "In Progress" },
    { id: 3, title: "Build Project", status: "Done" },
  ]);

  const [lastDeletedTask, setLastDeletedTask] = useState<Task | null>(null);
  const [sortMode, setSortMode] = useState<SortMode>("default");
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const doneCount = tasks.filter(
    (task) => task.status === "Done"
  ).length;

  const percentage =
    tasks.length === 0
      ? 0
      : Math.round((doneCount / tasks.length) * 100);

  const sortedTasks =
    sortMode === "title"
      ? [...tasks].sort((a, b) => a.title.localeCompare(b.title))
      : tasks;

  function handleNextStatus(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: nextStatus(task.status) }
          : task
      )
    );
  }

  function handleDelete(id: number) {
    const deletedTask = tasks.find((task) => task.id === id);

    if (!deletedTask) return;

    setLastDeletedTask(deletedTask);

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );

    if (selectedTaskId === id) {
      setSelectedTaskId(null);
    }
  }

  function handleUndo() {
    if (!lastDeletedTask) return;

    setTasks((prevTasks) => [
      ...prevTasks,
      lastDeletedTask,
    ]);

    setLastDeletedTask(null);
  }

  function handleSelectNext() {
    if (sortedTasks.length === 0) return;

    const currentIndex = sortedTasks.findIndex(
      (task) => task.id === selectedTaskId
    );

    const nextIndex = (currentIndex + 1) % sortedTasks.length;

    setSelectedTaskId(sortedTasks[nextIndex].id);
  }

  return (
    <div className="app">
      <h1>My Tasks</h1>

      <p>
        {doneCount} of {tasks.length} done ({percentage}%)
      </p>

      {lastDeletedTask && (
        <button onClick={handleUndo}>
          Undo Delete
        </button>
      )}

      <button onClick={handleSelectNext}>
        Select next
      </button>

      <button
        onClick={() =>
          setSortMode((prev) =>
            prev === "default" ? "title" : "default"
          )
        }
      >
        Sort: {sortMode}
      </button>

      {sortedTasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: selectedTaskId === task.id
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