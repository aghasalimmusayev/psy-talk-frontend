import '../../styles/firststep.css'
import firststep_img from '../../assets/img/firststep.png'
import { Link } from 'react-router-dom'

export default function FirstStep() {
    return (
        <div className='firststep container'>
            <div className='firststep_img'>
                <img src={firststep_img} alt="firstStep" />
            </div>
            <div className='firststep_text'>
                <h4 className='firststep_heading'>Daha sağlam bir zehin üçün ilk addımınızı atın</h4>
                <p className='firststep_offer_text'>Dəstək və anlayış dolu mühitdə hisslərinizi paylaşın,
                    özünüzü daha yaxşı tanıyın və daha balanslı həyat qurmağa başlayın.</p>
                <div className='firststep_button'>
                    <Link to={'/'}>Qəbula yazılmaq</Link>
                </div>
            </div>
        </div>
    )
}
