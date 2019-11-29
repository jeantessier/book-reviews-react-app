import React from 'react';

export default function Title(props) {
    const {link, title} = props;

    return(
        <div>
            {link ? <a href={link} dangerouslySetInnerHTML={{__html: title }}/> : <span dangerouslySetInnerHTML={{__html: title }}/>}
        </div>
    )
}
