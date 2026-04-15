import Logo from '../smallComponents/Logo'
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='send_mail'>
                    <div className="footer_logo">
                        <Logo />
                    </div>
                    <input type="text" />

                </div>
                <div className='footer_content'></div>
                <div className='contact_info'></div>
            </div>
        </footer>
    )
}
