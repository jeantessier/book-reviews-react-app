import './Title.css'

export default function Title({ link, title }) {
    return (
        <div className="title">
            {link ? <a href={link} dangerouslySetInnerHTML={{__html: title }}/> : <span dangerouslySetInnerHTML={{__html: title }}/>}
        </div>
    )
}
