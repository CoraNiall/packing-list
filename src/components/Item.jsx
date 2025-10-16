import React from 'react';

export default function Item({ name }) {
  return (
    <>
      <li>
        <input type="checkbox" id="update" name="update" />
        {name}
        <button id="del-btn" onClick="">
          ❌
        </button>
      </li>
    </>
  );
}
