interface SidebarProps {
  title: string;
  projects: string[];
}

function Sidebar({ title, projects }: SidebarProps) {
  return (
    <aside>
      <h2>{title}</h2>

      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;