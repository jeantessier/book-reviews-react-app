import React from 'react';
import ReactMarkdown from 'react-markdown';
import Titles from './Titles';
import BookHeader from './BookHeader';
import BookFooter from './BookFooter';

export default function Book(props) {
    const {name, titles, authors, publisher, years, body, start, stop} = props;

    return(
        <article id={name}>
            <Titles titles={titles}/>

            <BookHeader authors={authors} publisher={publisher} years={years}/>

            <section><ReactMarkdown source={body} escapeHtml={false} /></section>

            <BookFooter start={start} stop={stop}/>
        </article>
    )
}
