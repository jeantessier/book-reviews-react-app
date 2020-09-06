import React from 'react';

export default function BookHeader(props) {
    const {authors, publisher, years} = props;

    return(
        <header>
            <table className="book-metadata">
                <tbody>
                    <tr>
                        <td className="author">
                            {authors.map((author, index) => <div key={index} dangerouslySetInnerHTML={{__html: author }}/>)}
                        </td>
                        <td className="publisher" dangerouslySetInnerHTML={{__html: publisher }}/>
                        <td className="published-year">
                            {years.map((year, index) => <div key={index} dangerouslySetInnerHTML={{__html: year }}/>)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </header>
    )
}
