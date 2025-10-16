import React from 'react';

export default function Form() {
  return (
    <form className="add-form">
      <label for="quantity">How many items?</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="0"
        max="100"
        value="1"
      />
      <label for="item">Item name:</label>
      <input type="text" id="item" name="item" placeholder="Enter item..." />
      <button id="add-btn" onClick="">
        Add item
      </button>
    </form>
  );
}
