import React, { useEffect, useState } from 'react';
import axios from "axios";
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
        axios
            .get(url)
            .then(result => {
                setTitle(result.data.title);
                setBooks(result.data.books);
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
