import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Badge from './components/Badge';
import TaskList from './components/TaskList';
import type { Task } from './types';

function App() {
  const projects = [
    'Portfolio',
    'Task Manager',
    'Weather App'
  ];

  const tasks: Task[] = [
    {
      id: 1,
      title: 'Learn React',
      completed: false,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Practice TypeScript',
      completed: false,
      priority: 'low'
    },
    {
      id: 3,
      title: 'Build a Project',
      completed: false
    }
  ];

  return (
    <div>
      <Sidebar
        title="My Projects"
        projects={projects}
      />

      <Section
        title="My Tasks"
        action={<Badge>{tasks.length}</Badge>}
      >
        <TaskList tasks={tasks} />
      </Section>
    </div>
  );
}

export default App;