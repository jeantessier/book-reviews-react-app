import './Title.css'

const Title = ({ link, title }) => (
    <div className="title">
        {link ? <a href={link} dangerouslySetInnerHTML={{__html: title }}/> : <span dangerouslySetInnerHTML={{__html: title }}/>}
    </div>
)

export default Title
