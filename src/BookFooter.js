import React from 'react';

export default function BookFooter(props) {
    const {start, stop} = props;

    return(
        <footer>
            {start &&
                <table className="reading-metadata">
                    <tbody>
                    <tr>
                        <td className="time">Started reading:</td>
                        {start ? <td className="time"><code>{start}</code></td> : <td className="no_time">not started</td>}
                    </tr>
                    <tr>
                        <td className="time">Finished reading:</td>
                        {stop ? <td className="time"><code>{stop}</code></td> : <td className="no_time">in progress</td>}
                    </tr>
                    </tbody>
                </table>
            }
        </footer>
    )
}
