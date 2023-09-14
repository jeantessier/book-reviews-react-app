import React, { useState } from 'react';
import './BookHistory.css';

export default function BookHistory({ history }) {
    const [showHistory, setShowHistory] = useState(false)

    function toggleShowHistory() {
        setShowHistory(prev => !prev)
    }

    return (
        <div className="history">
            <span onClick={toggleShowHistory}>{showHistory ? '\u2749' : '\u2744'}</span>
            {showHistory &&
                <table>
                    <caption>History</caption>
                    {showHistory &&
                        <tbody>
                        {history.map(entry => (
                            <tr>
                                <td className="time" dangerouslySetInnerHTML={{__html: entry.date }}/>
                                <td>{entry.message}</td>
                            </tr>
                        ))}
                        </tbody>
                    }
                </table>
            }
        </div>
    )
}
