import * as ReactDOM from 'react-dom/client'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'

const dataUrlFromPathname = pathname => pathname.includes('.html') ? dataUrlFromFilename(pathname) : dataUrlFromDirname(pathname)
const dataUrlFromFilename = filename => filename.replace(/\.html.*/, '.json')
const dataUrlFromDirname = dirname => (dirname.endsWith('/') ? dirname : dirname + '/') + "index.json"

const dataUrl = dataUrlFromPathname(document.location.pathname)

ReactDOM.createRoot(
    document.getElementById('root')
).render(<App url={dataUrl}/>)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
