import React from 'react';

export default function BookFooter(props) {
    const {start, stop} = props;

    return(
        <footer>
            <table className="reading-metadata">
                <tbody>
                <tr>
                    <td className="time">Started reading:</td>
                    {start ? <td className="time"><code>{start}</code></td> : <td className="no_time">not started</td>}
                </tr>
                {props.start ?
                    <tr>
                        <td className="time">Finished reading:</td>
                        {stop ? <td className="time"><code>{stop}</code></td> : <td className="no_time">in progress</td>}
                    </tr>
                    : null
                }
                </tbody>
            </table>
        </footer>
    )
}
