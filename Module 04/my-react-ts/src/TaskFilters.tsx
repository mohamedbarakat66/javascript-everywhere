
type SortOption = "default" | "title" | "dueDate";

type TaskFiltersProps = {
  sortOption: SortOption;
  onSortChange: (value: SortOption) => void;
};

function TaskFilters({
  sortOption,
  onSortChange,
}: TaskFiltersProps) {
  return (
    <div className="task-filters">
      <label htmlFor="sort">Sort by:</label>

      <select
        id="sort"
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
export type { SortOption };
