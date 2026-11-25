import type { Task } from '../types';
import TaskCard from './TaskCard';

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  const handleDelete = (id: number) => {
    console.log('Delete task:', id);
  };

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;