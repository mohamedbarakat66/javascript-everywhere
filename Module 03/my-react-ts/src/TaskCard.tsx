import { nextStatus } from "./nextStatus";
import type { Task } from "./types";

type TaskCardProps = {
  task: Task;
  onNextStatus: () => void;
  onDelete: () => void;
};

function TaskCard({ task, onNextStatus, onDelete }: TaskCardProps) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>Status: {task.status}</p>

      <button onClick={onNextStatus}>
        {nextStatus(task.status)}
      </button>

      <button onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;