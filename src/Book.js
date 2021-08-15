import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
import Titles from './Titles';
import BookHeader from './BookHeader';
import BookFooter from './BookFooter';

export default function Book({ name, titles, authors, publisher, years, body, start, stop }) {
    return (
        <article id={name}>
            <Titles titles={titles}/>

            <BookHeader authors={authors} publisher={publisher} years={years}/>

            <section><Markdown rehypePlugins={[rehypeRaw]} plugins={[gfm]} children={body}/></section>

            <BookFooter start={start} stop={stop}/>
        </article>
    )
}
