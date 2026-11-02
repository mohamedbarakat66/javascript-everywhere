import type { Task } from '../types';
import Badge from './Badge';

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
}

function TaskCard({ task, onDelete }: TaskCardProps) {
  const priority = task.priority ?? 'medium';

  const tone =
    priority === 'high'
      ? 'danger'
      : priority === 'medium'
        ? 'warning'
        : 'neutral';

  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <Badge tone={tone}>
        {priority}
      </Badge>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;