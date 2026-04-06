import logo from '../../assets/img/logo.svg'
import './logo.css'

export default function Logo({}) {
    return (
        <div className="logo">
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
        </div>
    )
}
