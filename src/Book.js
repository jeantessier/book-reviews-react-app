import React from 'react';
import Titles from './Titles';
import BookHeader from './BookHeader';
import BookFooter from './BookFooter';

export default function Book(props) {
    const {name, titles, authors, publisher, years, body, start, stop} = props;

    return(
        <article id={name}>
            <Titles titles={titles}/>

            <BookHeader authors={authors} publisher={publisher} years={years}/>

            <section dangerouslySetInnerHTML={{__html: body }}/>

            <BookFooter start={start} stop={stop}/>
        </article>
    )
}
