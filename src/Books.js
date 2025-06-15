import Book from './Book'
import './Books.css'

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
