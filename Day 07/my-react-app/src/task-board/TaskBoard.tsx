import  { useState } from "react";

export interface Task {
  id: string;
  title: string;
  priority: "High" | "Medium" | "Low";
  addedAt: number;
}

export type SortOption = "Added" | "Priority" | "A -> Z";

const priorityOrder: Record<Task["priority"], number> = {
  High: 1,
  Medium: 2,
  Low: 3,
};

export function sortTasks(tasks: Task[], sortBy: SortOption): Task[] {
  const tasksCopy = [...tasks];

  if (sortBy === "Priority") {
    return tasksCopy.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  }

  if (sortBy === "A -> Z") {
    return tasksCopy.sort((a, b) =>
      a.title.localeCompare(b.title, undefined, {
        sensitivity: "base",
      })
    );
  }

  return tasksCopy.sort((a, b) => a.addedAt - b.addedAt);
}

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "apply to 3 jobs", priority: "High", addedAt: 1 },
    { id: "2", title: "Build Portfolio", priority: "Medium", addedAt: 2 },
    { id: "3", title: "Clean Code Practice", priority: "Low", addedAt: 3 },
  ]);

  const [sortBy, setSortBy] = useState<SortOption>("Added");
  const [editingTaskId, setEditingTaskId] = useState<string | null>("1");
  const [editTitle, setEditTitle] = useState("apply to 3 jobs");

  const sortedTasks = sortTasks(tasks, sortBy);

  const handleSaveTitle = (id: string) => {
    const trimmedTitle = editTitle.trim();

    if (!trimmedTitle) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: trimmedTitle } : task
      )
    );

    setEditingTaskId(null);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Task Board</h2>

      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <label>Sort By: </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          style={{ padding: "6px" }}
        >
          <option value="Added">Added</option>
          <option value="Priority">Priority</option>
          <option value="A -> Z">A -&gt; Z</option>
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedTasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #444",
              alignItems: "center",
            }}
          >
            {editingTaskId === task.id ? (
              <div style={{ display: "flex", gap: "8px", flex: 1 }}>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={{ flex: 1, padding: "4px" }}
                />

                <button onClick={() => handleSaveTitle(task.id)}>
                  Save
                </button>
              </div>
            ) : (
              <div style={{ flex: 1 }}>
                <span>{task.title}</span> -{" "}
                <strong>[{task.priority}]</strong>
              </div>
            )}

            {editingTaskId !== task.id && (
              <button
                onClick={() => {
                  setEditingTaskId(task.id);
                  setEditTitle(task.title);
                }}
                style={{ marginLeft: "10px" }}
              >
                Edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
