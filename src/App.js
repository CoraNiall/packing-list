import { useState } from 'react';
import './index.css';
import Form from './components/Form';
import PackingList from './components/Packing-list';
import Stats from './components/Stats';

function App() {
  const [packingList, setPackingList] = useState([]);

  const onAddItem = (item, num) => {
    setPackingList([...packingList, { item, num }]);
  };

  const onDeleteItem = (e, item) => {
    e.preventDefault();
    setPackingList(
      packingList.filter(packingListItem => packingListItem.item !== item)
    );
  };

  console.log(`packingList: ${JSON.stringify(packingList)}`);
  return (
    <div className="app">
      <h1>🏝️ Packing List 🧳</h1>
      <Form onAddItem={onAddItem} />
      <PackingList packingList={packingList} onDeleteItem={onDeleteItem} />
      <Stats />
    </div>
  );
}

export default App;
