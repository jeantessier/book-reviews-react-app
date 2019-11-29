import React from 'react';
import Titles from './Titles';

export default function BookHeader(props) {
    const {authors, publisher, years} = props;

    return(
        <header>
            <table className="book-metadata">
                <tbody>
                <td className="author">
                    {authors.map(author => <div dangerouslySetInnerHTML={{__html: author }}/>)}
                </td>
                <td className="publisher" dangerouslySetInnerHTML={{__html: publisher }}/>
                <td className="published-year">
                    {years.map(year => <div dangerouslySetInnerHTML={{__html: year }}/>)}
                </td>
                </tbody>
            </table>
        </header>
    )
}
