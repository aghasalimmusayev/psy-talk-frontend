import { Link } from 'react-router-dom'
import '../../styles/button.css'

export default function MainButton({ text, to }) {
    return (
        <div className="main_button">
            <Link to={to}>{text}</Link>
        </div>
    )
}
