import React from 'react';
import Book from './Book';

export default function Books({ books }) {
    return (
        books.map(book => (
            <Book key={book.name} {...book} />
        ))
    )
}
