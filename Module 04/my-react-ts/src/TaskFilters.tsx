
type SortOption = "default" | "title" | "dueDate";
type StatusFilter = "all" | "To Do" | "In Progress" | "Done";

type TaskFiltersProps = {
  sortOption: SortOption;
  onSortChange: (value: SortOption) => void;
  searchText: string;
  onSearchChange: (value: string) => void;
  statusFilter: StatusFilter;
  onStatusChange: (value: StatusFilter) => void;
};

function TaskFilters({
  sortOption,
  onSortChange,
  searchText,
  onSearchChange,
  statusFilter,
  onStatusChange,
}: TaskFiltersProps) {
  return (
    <div className="task-filters">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(e) =>
          onStatusChange(e.target.value as StatusFilter)
        }
      >
        <option value="all">All Status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <select
        value={sortOption}
        onChange={(e) =>
          onSortChange(e.target.value as SortOption)
        }
      >
        <option value="default">Default</option>
        <option value="title">Title A–Z</option>
        <option value="dueDate">Due date</option>
      </select>
    </div>
  );
}

export default TaskFilters;
export type { SortOption, StatusFilter };
