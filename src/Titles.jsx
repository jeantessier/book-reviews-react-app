import Title from './Title'
import './Titles.css'

const Titles = ({ titles }) => (
    <h2 className="titles">
        {titles.map((title, index) => (
            <Title key={index} link={title.link} title={title.title}/>
        ))}
    </h2>
)

export default Titles
