import React from 'react'

// Based on Medium's read time calculation
// https://blog.medium.com/read-time-and-you-bc2048ab620c
// but without the additional time for images.

const DEFAULT_WPM= 275

const computeReadingTime = (body, wpm) => Math.ceil(body.split(/\s+/).length / wpm)

export default function ReadingTime({body, wpm = DEFAULT_WPM}) {
    return (
        <section>
            {computeReadingTime(body, wpm)} min read
        </section>
    )
}
