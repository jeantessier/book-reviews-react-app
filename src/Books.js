import React from 'react';
import Book from './Book';

export default function Books(props) {
    const {books} = props;

    return(
        books.map(book => (
            <Book
                name={book.name}
                titles={book.titles}
                authors={book.authors}
                publisher={book.publisher}
                years={book.years}
                body={book.body}
                start={book.start}
                stop={book.stop}
            />
        ))
    )
}
