import React from 'react';
import Title from './Title';

export default function Titles(props) {
    const {titles} = props;

    return(
        <h2>
            {titles.map(title => (
                <Title link={title.link} title={title.title}/>
            ))}
        </h2>
    )
}
