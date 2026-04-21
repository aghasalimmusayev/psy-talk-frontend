import Logo from '../common/Logo'
import Switch from './MenuSwitch'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import '../../styles/nav.css'

export default function Nav() {

    const [links, setLinks] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = links ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [links])

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className='nav_content container'>
                <Logo />
                <ul className={`links ${links ? 'open' : ''}`}>
                    <div className='links_close_btn'>
                        <IoIosArrowRoundBack
                            style={{ fontSize: "28px", display: "block" }}
                            onClick={() => setLinks(false)} />
                    </div>
                    <li><NavLink onClick={() => setLinks(false)} to={'/'}>Ana səhifə</NavLink></li>
                    <li><NavLink onClick={() => setLinks(false)} to={'/about'}>Haqqımızda</NavLink></li>
                    <li><NavLink onClick={() => setLinks(false)} to={'/services'}>Xidmətlərimiz</NavLink></li>
                    <li><NavLink onClick={() => setLinks(false)} to={'/psychologists'}>Psixoloqlar</NavLink></li>
                    <li><NavLink onClick={() => setLinks(false)} to={'/contact'}>Əlaqə</NavLink></li>
                    <li className='mob_reserve_button'><Link to={'/'}>Görüş təyin et</Link></li>
                </ul>
                <div className='desk_reserve_button'><Link to={'/'}>Görüş təyin et</Link></div>
                <div className='menu_bar'><Switch onChange={setLinks} checked={links} /></div>
            </div>
        </nav>
    )
}
