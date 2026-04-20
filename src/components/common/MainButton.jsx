import { Link } from 'react-router-dom'
import '../../styles/button.css'

export default function MainButton({ text }) {
    return (
        <div className="main_button">
            <Link to={"/"}>{text}</Link>
        </div>
    )
}
