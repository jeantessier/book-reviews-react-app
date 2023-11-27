import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const dataUrlFromPathname = pathname => pathname.includes('.html') ? dataUrlFromFilename(pathname) : dataUrlFromDirname(pathname)
const dataUrlFromFilename = filename => filename.split('.html', 1)[0] + ".json"
const dataUrlFromDirname = dirname => (dirname.endsWith('/') ? dirname : dirname + '/') + "index.json"

const dataUrl = dataUrlFromPathname(document.location.pathname)

ReactDOM.render(
    <App url={dataUrl}/>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
