import React from 'react';
import './App.css';
import './tufte.css';
import Contents from './Contents';
import Books from './Books';

function App(props) {
  const {title, books} = props;

  return (
    <div className="App">
      <h1>{title}</h1>
      <Contents books={books}/>
      <Books books={books}/>
    </div>
  );
}

export default App;
