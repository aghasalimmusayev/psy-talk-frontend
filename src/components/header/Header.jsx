import './header.css'
import Nav from '../nav/Nav'
import HeaderContent from './HeaderContent'


export default function Header() {
    return (
        <div className='header_bg'>
            <Nav />
            <HeaderContent />
        </div>
    )
}
