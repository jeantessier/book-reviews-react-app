import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import './tufte.css';
import Contents from './Contents';
import Books from './Books';

function App(props) {
    const {url} = props;

    const [data, setData] = useState({title: "Readings", books: []});

    useEffect(() => {
        axios
            .get(url)
            .then(result => {
                document.title = result.data.title;
                setData(result.data);
            });
    }, []);

    return (
    <div className="App">
      <h1>{data.title}</h1>
      <Contents books={data.books} isLoading={data.books.length === 0}/>
      <Books books={data.books}/>
    </div>
  );
}

export default App;
