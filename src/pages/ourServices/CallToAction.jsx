import '../../styles/callToAction.css'
import callToActionImg from '../../assets/img/callToAction_img.jpg'
import { Link } from 'react-router-dom'

export default function CallToAction() {
    return (
        <section id='callToAction'>
            <div className="callToAction_content container">
                <div className="call_to_action_img"><img src={callToActionImg} alt="callToAction" /></div>
                <div className="call_to_action_inside">
                    <h3 className='call_to_action_heading'>Fikirləriniz və hisslərinizi anlamağa yönəlmiş fərdi seanslar.</h3>
                    <p className='call_to_action_text'>Emosional sağlamlıq yolunda ilk addımı atın. Bu gün seans üçün
                        qeydiyyatdan keçin və özünüzün daha sağlam və xoşbəxt versiyasını yaratmağa başlayın.</p>
                    <Link className='blue_button' to={'/'}>Görüş təyin et</Link>
                </div>
            </div>
        </section>
    )
}
