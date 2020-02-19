import React from 'react';
import List from './List'

const list = require('../src/items.json');

function App() {
  return (
    <div className="App">
        <List products={list}/>
    </div>
  );
}

export default App;
