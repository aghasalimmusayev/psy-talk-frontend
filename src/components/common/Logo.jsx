import '../../styles/logo.css'
import logo from '../../assets/img/logo.svg'

export default function Logo({}) {
    return (
        <div className="logo">
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
        </div>
    )
}
