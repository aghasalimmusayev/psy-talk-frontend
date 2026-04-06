import './nav.css'
import Logo from '../smallComponents/Logo'
import Switch from '../smallComponents/MenuSwitch'
import { useState } from 'react'

export default function Nav() {

    const [links, setLinks] = useState(false)

    return (
        <div className='nav container'>
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
    )
}
