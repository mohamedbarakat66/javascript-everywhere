import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  tone?: 'neutral' | 'warning' | 'danger';
};

function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return (
    <span className={`badge badge-${tone}`}>
      {children}
    </span>
  );
}

export default Badge;