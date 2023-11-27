import React from 'react'
import './Titles.css'
import Title from './Title'

export default function Titles({ titles }) {
    return (
        <h2 className="titles">
            {titles.map((title, index) => (
                <Title key={index} link={title.link} title={title.title}/>
            ))}
        </h2>
    )
}
