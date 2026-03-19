import BookHistory from './BookHistory'
import './BookFooter.css'

const BookFooter = ({ start, stop, history }) => (
    <footer>
        {start &&
            <table className="reading-metadata">
                <tbody>
                <tr>
                    <td>Started reading:</td>
                    {start ? <td className="time">{start}</td> : <td className="no_time">not started</td>}
                </tr>
                <tr>
                    <td>Finished reading:</td>
                    {stop ? <td className="time">{stop}</td> : <td className="no_time">in progress</td>}
                </tr>
                </tbody>
            </table>
        }

        {history?.length > 0 && <BookHistory history={history}/>}
    </footer>
)

export default BookFooter
