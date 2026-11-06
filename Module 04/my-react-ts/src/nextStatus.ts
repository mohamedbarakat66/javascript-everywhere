import type { TaskStatus } from "./types";

export function nextStatus(status: TaskStatus): TaskStatus {
  if (status === "To Do") {
    return "In Progress";
  }

  if (status === "In Progress") {
    return "Done";
  }

  return "To Do";
}