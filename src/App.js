import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import './tufte.css'
import Contents from './Contents'
import Books from './Books'

export default function App({ url }) {
    const [title, setTitle] = useState("Readings")
    useEffect(() => { document.title = title }, [title])

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("/google_analytics.json")
            const data = await result.json()
            ReactGA.initialize(data.trackingId)
            ReactGA.pageview(window.location.pathname)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url)
            const data = await result.json()
            setTitle(data.title)
            setBooks(data.books)
        }
        fetchData()
    }, [url])

    return (
        <div className="App">
            <h1>{title}</h1>
            <Contents books={books} isLoading={books.length === 0}/>
            <Books books={books}/>
        </div>
    )
}
