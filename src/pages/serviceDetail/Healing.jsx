import '../../styles/healing.css'
import { Link } from 'react-router-dom'
import serviceImg2 from '../../assets/img/service_depresiya.jpg'

export default function Healing() {
    return (
        <section id='healing'>
            <div className="healing_content container">
                <div className="healing_img"><img src={serviceImg2} alt="healing" /></div>
                <div className="healing_content_inside">
                    <h4 className='healing_heading'>Depressiya müalicəsi</h4>
                    <p className='healing_text'>Depressiyanın müalicəsi mümkündür və düzgün yanaşma ilə insan yenidən özünü yaxşı hiss etməyə
                        başlaya bilər. Müalicə prosesində əsasən psixoterapiya (danışıq terapiyası) istifadə olunur. Psixoloq sizin düşüncə
                        və davranışlarınızı anlamağa kömək edir, mənfi düşüncə modellərini dəyişdirməyə və daha sağlam yanaşmalar
                        qurmağa dəstək olur.</p>
                    <ul className='healing_types'>
                        <li>Yeniyetmələr üçün emosional dəstək</li>
                        <li>Stress və narahatlığın idarə olunması</li>
                        <li>Akademik və məktəblə bağlı məsləhət xidməti</li>
                    </ul>
                    <div className='other_healing_types'><Link to={'/'}>Digər xidmətlər</Link></div>
                </div>
            </div>
        </section>
    )
}
