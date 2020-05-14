import React, { useEffect, useState } from 'react';
import './App.css';
import './tufte.css';
import Contents from './Contents';
import Books from './Books';

function App(props) {
    const {url} = props;

    const [title, setTitle] = useState("Readings");
    useEffect(() => { document.title = title }, [title]);

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(data => {
                setTitle(data.title);
                setBooks(data.books);
            });
    }, [url]);

    return (
    <div className="App">
      <h1>{title}</h1>
      <Contents books={books} isLoading={books.length === 0}/>
      <Books books={books}/>
    </div>
  );
}

export default App;
