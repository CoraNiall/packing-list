import React from 'react';
import '../index.css';

export default function Item({
  num,
  item,
  onDeleteItem,
  isPacked,
  setIsPacked,
  onUpdateItem,
}) {
  const handleClick = e => {
    e.preventDefault();
    onDeleteItem(e, item);
  };

  const handleChange = e => {
    setIsPacked(!isPacked);
    onUpdateItem(e, item);
  };

  return (
    <>
      <li>
        <input
          type="checkbox"
          id="packedStatus"
          name="packed"
          value={isPacked}
          onChange={e => handleChange(e.target.value, item)}
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
