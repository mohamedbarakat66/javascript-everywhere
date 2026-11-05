import { nextStatus } from "./nextStatus";
import type { Task } from "./types";

type TaskCardProps = {
  task: Task;
  onNextStatus: () => void;
};

function TaskCard({ task, onNextStatus }: TaskCardProps) {
  return (
    <div>
      <h3>{task.title}</h3>

      <p>Status: {task.status}</p>

      <button onClick={onNextStatus}>
        {nextStatus(task.status)}
      </button>
    </div>
  );
}

export default TaskCard;