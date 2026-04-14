import './supportInfo.css'
import psyImg from '../../assets/img/pyschologic_support.png'
import star from '../../assets/img/star.png'
import MainButton from '../smallComponents/MainButton'

export default function Main() {
    return (
        <div className='psychologic_support'>
            <div className='star'>
                <img src={star} alt="star" />
            </div>
            <div className="psy_left">
                <div className='psy_support_img'>
                    <img src={psyImg} alt="pyschologic_support" />
                </div>
                <div className='shadow_img'></div>
            </div>
            <div className="psy_right">
                <h3 className='psy_heading'>Etibar edə biləcəyiniz peşəkar psixoloji dəstək</h3>
                <p className='psy_text'>Psytalk olaraq məqsədimiz insanlara peşəkar psixoloji dəstəyi daha əlçatan və rahat formada təqdim
                    etməkdir. Platformamız vasitəsilə istifadəçilər fərqli sahələr üzrə ixtisaslaşmış psixoloqlarla əlaqə
                    yarada, onların profillərini incələyə və ehtiyaclarına uyğun mütəxəssisi seçə bilirlər.
                </p>
                <MainButton text={"Ətraflı bax"} />
            </div>
        </div>
    )
}
