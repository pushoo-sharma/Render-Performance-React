import React, { useState, useCallback } from 'react';
import './App.css';
import Item from './components/Item';

function App() {
  const [itemValues, setItemValues] = useState([
    { value: '', id: '1' },
    { value: '', id: '2' },
    { value: '', id: '3' },
  ]);

  const changeValue = useCallback((id, value) => {
    setItemValues(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          return { ...item, value };
        }
        return item;
      })
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Optimize Render Performance ~ Pushoo Sharma</h1> 
        <h5>Parent holds the state and passes it to items.</h5>
        <p className="App-header-output">{JSON.stringify(itemValues)}</p>
      </header>
      <div className="items-container">
        {itemValues.map(item => (
          <Item key={item.id} id={item.id} value={item.value} onChange={changeValue} />
        ))}
      </div>
    </div>
  );
}

export default App;
