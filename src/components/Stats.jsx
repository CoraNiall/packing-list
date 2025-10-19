import React from 'react';

export default function Stats({ packingList }) {
  const numItems = packingList.length;

  const numPacked = packingList.filter(item => item.isPacked).length;

  const percentPacked =
    numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);

  return (
    <div className="stats">
      <h3>
        You have {numItems} items on your list, and you already packed{' '}
        {numPacked} ({percentPacked}%)
      </h3>
    </div>
  );
}
