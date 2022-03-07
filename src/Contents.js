import React from 'react';

export default function Contents({ books, isLoading }) {
    return (
        <div>
            <p>{isLoading ? "Loading..." : "Contents"}</p>
            <div className="table-of-contents">
                {books.map(book => (
                    <div key={book.name}>
                        <span
                            className="marker"
                            dangerouslySetInnerHTML={{__html: (book.start ? book.start : book.acquired).substring(0, 4)}}
                        />
                        &nbsp;
                        <a
                            href={'#' + book.name}
                            dangerouslySetInnerHTML={{__html: book.titles[0].title.split(':', 1)[0] }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
