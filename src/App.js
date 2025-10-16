import './index.css';
import Form from './components/Form';
import PackingList from './components/Packing-list';
import Stats from './components/Stats';

function App() {
  return (
    <div className="app">
      <h1>🏝️ Packing List 🧳</h1>
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
