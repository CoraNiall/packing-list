import React, { useState } from 'react';
import '../index.css';

export default function Item({ num, item, onDeleteItem }) {
  const [isPacked, setIsPacked] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    onDeleteItem(e, item);
  };

  const handleChange = e => {
    setIsPacked(!isPacked);
  };

  return (
    <>
      <li>
        <input
          type="checkbox"
          id="packedStatus"
          name="packed"
          value={isPacked}
          onChange={e => handleChange(e.target.value)}
        />
        <span>
          {num} x {item}
        </span>
        <button id="del-btn" onClick={e => handleClick(e)}>
          ❌
        </button>
      </li>
    </>
  );
}
