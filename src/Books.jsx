import Book from './Book'
import './Books.css'

const Books = ({ books }) => (
    books.map((book, index) => (
        <div>
            {index !== 0 && <div className="separator"></div>}
            <Book key={book.name} {...book} />
        </div>
    ))
)

export default Books
