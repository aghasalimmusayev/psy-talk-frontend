import { NavLink } from 'react-router-dom'
import Logo from '../common/Logo'
import Switch from './MenuSwitch'
import { useState, useEffect } from 'react'
import '../../styles/nav.css'

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
                    <li><NavLink onClick={() => setLinks(false)} to={'/'}>Ana səhifə</NavLink></li>
                    <li><NavLink onClick={() => setLinks(false)} to={'/about'}>Haqqımızda</NavLink></li>
                    <li><NavLink onClick={() => setLinks(false)} to={'/survices'}>Xidmətlərimiz</NavLink></li>
                    <li><NavLink onClick={() => setLinks(false)} to={'/psychologists'}>Psixoloqlar</NavLink></li>
                    <li><NavLink onClick={() => setLinks(false)} to={'/contact'}>Əlaqə</NavLink></li>
                    <li className='mob_reserve_button'><button>Görüş təyin et</button></li>
                </ul>
                <div className='desk_reserve_button'><button>Görüş təyin et</button></div>
                <div className='menu_bar'><Switch onChange={setLinks} checked={links} /></div>
            </div>
        </nav>
    )
}
