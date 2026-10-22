import React, { useState } from "react";

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
}

export default function ShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [inputName, setInputName] = useState("");

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = inputName.trim();

    if (!trimmed) return;

    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.name.toLowerCase() === trimmed.toLowerCase()
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevItems,
        {
          id: Date.now().toString() + Math.random(),
          name: trimmed,
          quantity: 1,
        },
      ];
    });

    setInputName("");
  };

  const handleIncrease = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id: string) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalUniqueItems = items.length;

  const totalQuantity = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Shopping List</h2>

      <form
        onSubmit={handleAddItem}
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <input
          type="text"
          placeholder="Add new item..."
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />

        <button type="submit" style={{ padding: "8px 16px" }}>
          Add
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span>
              {item.name} (x{item.quantity})
            </span>

            <div style={{ display: "flex", gap: "6px" }}>
              <button onClick={() => handleIncrease(item.id)}>+</button>
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <button onClick={() => handleRemove(item.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "20px",
          padding: "12px",
          background: "#222",
          color: "white",
          borderRadius: "6px",
        }}
      >
        <h4>Summary</h4>
        <p>
          Total Unique Items: <strong>{totalUniqueItems}</strong>
        </p>
        <p>
          Total Quantity: <strong>{totalQuantity}</strong>
        </p>
      </div>
    </div>
  );
}
