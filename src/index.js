import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App
        title="Recent Readings"
        books={
        [
            {
                name: "The_Hobbit",
                titles: [
                    {link: "https://en.wikipedia.org/wiki/The_Hobbit", title: "The Hobbit"},
                    {title: "Bilbo, le hobbit"}
                ],
                authors: ["J.R.R. Tolkien"],
                publisher: "Allen & Unwin",
                years: ["1937"],
                body: "<p>Awesome!!!</p>",
                start: "2019-11-11",
                stop: "2019-11-20"
            },
            {
                name: "The_Lord_of_the_Rings",
                titles: [
                    {link: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings", title: "The Lord of the <b>Rings</b>: All-in-One Edition"},
                    {title: "Le seigneur des anneaux"}
                ],
                authors: ["J.R.R. Tolkien"],
                publisher: "Allen & Unwin",
                years: ["1954", "1955"],
                body: "<p>Awesome!!!</p>",
                start: "2019-11-21"
            },
            {
                name: "The_Silmarillion",
                titles: [
                    {link: "https://en.wikipedia.org/wiki/The_Silmarillion", title: "The Silmarillion"},
                    {title: "Le silmarillion"}
                ],
                authors: ["J.R.R. Tolkien", "Christopher Tolkien"],
                publisher: "Allen & Unwin",
                years: ["1977"],
                body: "<p>Curious?!?</p>"
            }
        ]
    }/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
