import React from 'react';
import './BookHistory.css';

export default function BookHistory({ history }) {
    return (
        <table className="history">
            <caption>History</caption>
            <tbody>
                {history.map(entry => (
                    <tr>
                        <td className="time" dangerouslySetInnerHTML={{__html: entry.date }}/>
                        <td>{entry.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
