import '../../styles/services.css'
import { Link } from 'react-router-dom'
import serviceImg1 from '../../assets/img/service_stres.jpg'
import serviceImg2 from '../../assets/img/service_depresiya.jpg'
import serviceImg3 from '../../assets/img/service_aile.jpg'
import serviceImg4 from '../../assets/img/service_ferdi.jpg'
import serviceImg5 from '../../assets/img/service_travma.jpg'
import serviceImg6 from '../../assets/img/service_yeniyetme.jpg'

export default function Services() {
    return (
        <section id='services'>
            <div className="service_content container">
                <Link to={'/'} className="service">
                    <div className="service_img"><img src={serviceImg1} alt="service_img" /></div>
                    <h4 className='service_heading'>Stress idarəetməsi</h4>
                    <p className='service_text'>Stressin həyatınıza təsirini azaltmaq və emosional balansınızı qorumaq üçün fərdi yanaşma ilə sizə dəstək veririk.</p>
                </Link>
                <Link to={'/'} className="service">
                    <div className="service_img"><img src={serviceImg2} alt="service_img" /></div>
                    <h4 className='service_heading'>Depressiya müalicəsi</h4>
                    <p className='service_text'>Depressiya müalicəsi xidmətimiz təhlükəsiz və dəstəkləyici bir mühit təmin edir.</p>
                </Link>
                <Link to={'/'} className="service">
                    <div className="service_img"><img src={serviceImg3} alt="service_img" /></div>
                    <h4 className='service_heading'>Ailə terapiyası</h4>
                    <p className='service_text'>Ailə terapiyası ailəni bir bütöv kimi nəzərdən keçirir və üzvlərə bir-birlərini daha yaxşı anlamağa kömək edir.</p>
                </Link>
                <Link to={'/'} className="service">
                    <div className="service_img"><img src={serviceImg4} alt="service_img" /></div>
                    <h4 className='service_heading'>Fərdi psixoloji məsləhət</h4>
                    <p className='service_text'>Fərdi ehtiyaclara uyğun psixi sağlamlıq terapiyası üçün fərdiləşdirilmiş dəstək.</p>
                </Link>
                <Link to={'/'} className="service">
                    <div className="service_img"><img src={serviceImg5} alt="service_img" /></div>
                    <h4 className='service_heading'>Travma terapiyası</h4>
                    <p className='service_text'>Travma məsləhəti fərdlərə narahatedici və çətin təcrübələrin öhdəsindən gəlməyə kömək edir.</p>
                </Link>
                <Link to={'/'} className="service">
                    <div className="service_img"><img src={serviceImg6} alt="service_img" /></div>
                    <h4 className='service_heading'>Yeniyetmə məsləhəti</h4>
                    <p className='service_text'>Yeniyetmələr üçün emosiyaları idarə etməyə və özünə inamı inkişaf etdirməyə kömək edən dəstəkləyici məsləhət xidməti.</p>
                </Link>
            </div>
        </section>
    )
}
