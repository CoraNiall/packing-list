import React from 'react';

import Item from './Item';

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        <Item name="passport" />
        <Item name="toothbrush" />
        <Item name="flight ticket" />
      </ul>
    </div>
  );
}
