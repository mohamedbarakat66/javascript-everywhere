import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

function Section({ title, action, children }: SectionProps) {
  return (
    <section>
      <div className="section-header">
        <h2>{title}</h2>
        {action && <div>{action}</div>}
      </div>

      <div>
        {children}
      </div>
    </section>
  );
}

export default Section;

