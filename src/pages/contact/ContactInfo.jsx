import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

export default function ContactInfo() {
    return (
        <section id='contactInfo'>
            <div className="contact_content">
                <div className="contact_info">
                    <h2 className='contact_heading'>ƏLAQƏ SAXLAYIN</h2>
                    <h3 className='contact_heading2'>Komandamızla əlaqə qurun və terapiyaya başlayın</h3>
                    <p className='contact_text'>Həyatınızda dəyişiklik etmək və özünüzü daha yaxşı hiss etmək üçün ilk addımı atın.
                        Təcrübəli və lisenziyalı psixoloqlarımız sizin ehtiyaclarınıza uyğun dəstək göstərməyə hazırdır.Sualınız varsa,
                        görüş təyin etmək istəyirsinizsə və ya sadəcə danışmağa ehtiyac duyursunuzsa — bizimlə əlaqə saxlayın.
                        Biz sizi dinləmək və doğru istiqamətdə yönləndirmək üçün buradayıq.</p>
                    <hr className='contact_line' />
                    <div className="contact_routes">
                        <Link to={'/'}>
                            <span className="contact_icon"><IoLocationOutline style={{ fontSize: "22px" }} /></span>
                            <span className='contact_routes_text'>Bakı şəhəri, Nəsimi rayonu, 28 May küçəsi 12, AZ1014</span>
                        </Link>
                        <a href="mailto:info@psytalk.az">
                            <span className="contact_icon"><IoMailOutline style={{ fontSize: "22px" }} /></span>
                            <span className='contact_routes_text'>info@psytalk.az</span>
                        </a>
                        {/* <a href="tel:+994105872455"> */}
                        <a href="https://wa.me/994105872455" target="_blank" rel="noreferrer">
                            <span className="contact_icon"><FiPhone style={{ fontSize: "22px" }} /></span>
                            <span className='contact_routes_text'>+994 10 587 24 55</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
