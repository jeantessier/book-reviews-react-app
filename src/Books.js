import React from 'react'
import './Books.css'
import Book from './Book'

export default function Books({ books }) {
    return (
        books.map((book, index) => (
            <div>
                {index !== 0 && <div className="separator"></div>}
                <Book key={book.name} {...book} />
            </div>
        ))
    )
}
