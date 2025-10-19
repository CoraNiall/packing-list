import React, { useState } from 'react';

export default function Form({ onAddItem }) {
  const [item, setItem] = useState('');
  const [num, setNum] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddItem(item, num);
    setItem('');
    setNum('');
  };

  return (
    <form action="submit" className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="quantity">How many items?</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="0"
        max="100"
        value={num}
        onChange={e => setNum(e.target.value)}
      />
      <label htmlFor="item">Item name:</label>
      <input
        type="text"
        id="item"
        name="item"
        placeholder="Item..."
        value={item}
        onChange={e => setItem(e.target.value)}
      />
      <button id="add-btn" type="submit">
        Add item
      </button>
    </form>
  );
}
