import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import gfm from 'remark-gfm'
import './Book.css'
import Titles from './Titles'
import BookHeader from './BookHeader'
import BookFooter from './BookFooter'

export default function Book({ name, titles, authors, publisher, years, body, start, stop, history }) {
    return (
        <article id={name}>
            <Titles titles={titles}/>

            <BookHeader authors={authors} publisher={publisher} years={years}/>

            <section><ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} children={body}/></section>

            <BookFooter start={start} stop={stop} history={history}/>
        </article>
    )
}
