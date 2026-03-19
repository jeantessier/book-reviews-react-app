import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import gfm from 'remark-gfm'
import BookFooter from './BookFooter'
import BookHeader from './BookHeader'
import ReadingTime from './ReadingTime'
import Titles from './Titles'
import './Book.css'

const Book = ({ name, titles, authors, publisher, years, body, start, stop, history }) => (
    <article id={name}>
        <Titles titles={titles}/>

        <BookHeader authors={authors} publisher={publisher} years={years}/>

        <ReadingTime text={body}/>

        <section><ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} children={body}/></section>

        <BookFooter start={start} stop={stop} history={history}/>
    </article>
)

export default Book
