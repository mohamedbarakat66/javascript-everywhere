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

  const doneCount = tasks.filter(
  (task) => task.status === "Done"
).length;

const percentage =
  tasks.length === 0
    ? 0
    : Math.round((doneCount / tasks.length) * 100);

  function handleNextStatus(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: nextStatus(task.status) }
          : task
      )
    );
  }

return (
  <div className="app">
    <h1>My Tasks</h1>

    <p>
      {doneCount} of {tasks.length} done ({percentage}%)
    </p>

    {tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onNextStatus={() => handleNextStatus(task.id)}
      />
    ))}
  </div>
);
}

export default App;