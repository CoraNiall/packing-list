import { useState } from 'react';
import './index.css';
import Form from './components/Form';
import PackingList from './components/Packing-list';
import Stats from './components/Stats';

function App() {
  const [packingList, setPackingList] = useState([]);
  const [isPacked, setIsPacked] = useState(false);

  const onAddItem = (item, num) => {
    setPackingList([...packingList, { item, num, isPacked: false }]);
  };

  const onDeleteItem = (e, item) => {
    e.preventDefault();
    setPackingList(
      packingList.filter(packingListItem => packingListItem.item !== item)
    );
  };

  const onUpdateItemStatus = (e, item) => {
    const newPackingList = packingList.map(packingListItem => {
      if (packingListItem.item === item) {
        return {
          ...packingListItem,
          isPacked: !packingListItem.isPacked,
        };
      } else {
        return packingListItem;
      }
    });
    setPackingList(newPackingList);
  };

  return (
    <div className="app">
      <h1>🏝️ Packing List 🧳</h1>
      <Form onAddItem={onAddItem} />
      <PackingList
        packingList={packingList}
        onDeleteItem={onDeleteItem}
        isPacked={isPacked}
        onUpdateItemStatus={onUpdateItemStatus}
      />
      <Stats packingList={packingList} />
    </div>
  );
}

export default App;
