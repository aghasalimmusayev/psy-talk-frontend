import '../../styles/nav.css'
import Logo from '../common/Logo'
import Switch from './MenuSwitch'
import { useState, useEffect } from 'react'

export default function Nav() {

    const [links, setLinks] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className='nav_content container'>
                <Logo />
                <ul className={`links ${links ? 'open' : ''}`}>
                    <li><a href="">Ana səhifə</a></li>
                    <li><a href="">Haqqımızda</a></li>
                    <li><a href="">Xidmətlərimiz</a></li>
                    <li><a href="">Psixoloqlar</a></li>
                    <li><a href="">Əlaqə</a></li>
                    <li className='mob_reserve_button'><button>Görüş təyin et</button></li>
                </ul>
                <div className='desk_reserve_button'><button>Görüş təyin et</button></div>
                <div className='menu_bar'><Switch onChange={setLinks} /></div>
            </div>
        </nav>
    )
}
