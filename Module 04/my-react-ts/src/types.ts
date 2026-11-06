export type TaskStatus = "To Do" | "In Progress" | "Done";

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  description?: string;
  dueDate?: string;
};