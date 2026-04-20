import '../../styles/letsDoIt.css'
import { Link } from 'react-router-dom'
import letsDoItImg1 from '../../assets/img/letsDoItImg1.png'
import letsDoItImg2 from '../../assets/img/letsDoItImg2.jpg'

export default function LetsDoIt() {
    return (
        <section id='letsDoIt'>
            <div className="lets_do_it_box container">
                <div className="lets_do_it_imgs">
                    <img src={letsDoItImg1} alt="lets_do_it_img1" />
                    <img src={letsDoItImg2} alt="lets_do_it_img2" />
                </div>
                <div className="lets_do_it_content">
                    <h2 className='lets_do_it_heading'>Gəlin sessiyaya <br /><span style={{ color: "#3B53D7" }}>başlayaq</span></h2>
                    <div className="lets_do_it_content_inside">
                        <p className='lets_do_it_text'>Zehni sağlamlıq bir məqsəd deyil, bir prosesdir.
                            Əsas məsələ hara getdiyin deyil, necə irəlilədiyindir.
                            Mən sizə düzgün irəliləməyinizi başa düşməyə kömək edəcək bir neçə xidmətlə gəlmişəm.</p>
                        <div className="lets_do_it_btns">
                            <Link to={'/'}>Görüş təyin et</Link>
                            <Link to={'/'}>Biz kimik</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
