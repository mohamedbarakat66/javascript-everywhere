### 1. Component Ownership & Structure
- `ShoppingList` owns and manages the `items` state.
- Child components receive callback functions instead of `setItems` directly.
- The component tree includes `AddItemForm`, `ItemList`, `ItemRow`, and `Summary`.

### 2. Case-Insensitive Item Merging
- Trim whitespace before adding an item.
- Compare item names without considering uppercase or lowercase letters.
- If an item already exists, increase its quantity.
- Otherwise, add it with a unique ID and an initial quantity of `1`.

### 3. State Immutability
- Update items without modifying the original state.
- Use `map` to update quantities and `filter` to remove items.

### 4. Derived Summary Values
- Calculate the total number of unique items using `items.length`.
- Calculate the total quantity using `reduce`.
- Update summary values automatically whenever the items change.