import '../../styles/footer.css'
import Logo from '../common/Logo'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

export default function Footer() {

    const date = new Date().getFullYear()

    return (
        <footer>
            <div className='container'>
                <div className='footer_content'>
                    <div className='send_mail'>
                        <div className="footer_logo">
                            <Logo />
                        </div>
                        <input type="text" placeholder='Emailinizi yazın' />
                        <button className='blue_button'>Göndər</button>
                    </div>
                    <div className="f_rest">
                        <div className="footer_links">
                            <div className="f_content">
                                <h4 className='f_content_heading'>Sürətli keçidlər</h4>
                                <div className='f_content_links'>
                                    <Link to={'/'}>Ana səhifə</Link>
                                    <Link to={'/services'}>Xidmətlərimiz</Link>
                                    <Link to={'/contact'}>Əlaqə</Link>
                                    <Link to={'/psychologists'}>Psixoloqlar</Link>
                                    <Link to={'/about'}>Haqqımızda</Link>
                                </div>
                            </div>
                            <div className="f_content">
                                <h4 className='f_content_heading'>Xidmətlərimiz</h4>
                                <div className='f_content_links'>
                                    <Link to={'/'}>Fərdi Məşğələlər</Link>
                                    <Link to={'/'}>Online Məsləhət</Link>
                                    <Link to={'/'}>Ailə Məsləhəti</Link>
                                    <Link to={'/'}>Stress İdarəsi</Link>
                                    <Link to={'/'}>Qrup Terapiyası</Link>
                                </div>
                            </div>
                            <div className="f_content">
                                <h4 className='f_content_heading'>Social Media</h4>
                                <div className='f_content_links'>
                                    <Link to={'/'}>İnstagram</Link>
                                    <Link to={'/'}>Linkedin</Link>
                                    <Link to={'/'}>Facebook</Link>
                                    <Link to={'/'}>Whattsapp</Link>
                                </div>
                            </div>
                        </div>
                        <div className='contact_info'>
                            <h4 className='f_content_heading'>Əlaqə məlumatları</h4>
                            <div className='f_content_links'>
                                <Link to={'/'}>
                                    <span className="f_contact_icon"><IoLocationOutline style={{ fontSize: "22px" }} /></span>
                                    <span className='f_contact_route_text'>Bakı şəhəri, Nəsimi rayonu, <br /> 28 May küçəsi 12, AZ1014</span>
                                </Link>
                                <a href="mailto:info@psytalk.az">
                                    <span className="f_contact_icon"><IoMailOutline style={{ fontSize: "22px" }} /></span>
                                    <span className='f_contact_route_text'>info@psytalk.az</span>
                                </a>
                                {/* <a href="tel:+994105872455"> */}
                                <a href="https://wa.me/994105872455" target="_blank" rel="noreferrer">
                                    <span className="f_contact_icon"><FiPhone style={{ fontSize: "20px" }} /></span>
                                    <span className='f_contact_route_text'>+994 10 587 24 55</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='copyRight container'>© {date} Psytalk. Bütün hüquqlar qorunur.</p>
        </footer>
    )
}
