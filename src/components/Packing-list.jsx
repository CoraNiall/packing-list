import React from 'react';

import Item from './Item';

export default function PackingList({
  packingList,
  onDeleteItem,
  isPacked,
  onUpdateItemStatus,
}) {
  if (packingList.length === 0)
    return <div className="list">Your packing list is empty</div>;

  return (
    <div className="list">
      <ul>
        {packingList.map(({ item, num }, index) => (
          <Item
            key={index}
            item={item}
            num={num}
            onDeleteItem={onDeleteItem}
            isPacked={isPacked}
            onUpdateItemStatus={onUpdateItemStatus}
          />
        ))}
      </ul>
    </div>
  );
}
