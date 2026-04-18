import a_th_cont1 from '../../assets/img/a_th_cont1.png'
import a_th_cont2 from '../../assets/img/a_th_cont2.jpg'
import a_th_cont3 from '../../assets/img/a_th_cont3.jpg'
import '../../styles/aboutTherapy.css'

export default function AboutTherapy() {
    return (
        <section id='about_therapy'>
            <h2 className='about_therapy_content_heading'>Peşəkar terapiya vasitəsilə emosional sağlamlığın gücləndirilməsi</h2>
            <div className='about_therapy_content container'>
                <div className='a_th_cont cont1'>
                    <h4 className='a_th_cont_heading'>Hekayəmiz</h4>
                    <p className='a_th_cont_text'>Terapiyanı və emosional rifahı normallaşdırmaq vizyonu ilə qurulan platformamız
                        fərdlər, cütlüklər və ailələr üçün etibarlı bir məkana çevrilmişdir.</p>
                    <img src={a_th_cont1} alt="about_therapy_img" />
                </div>
                <div className='a_th_cont cont2'>
                    <h4 className='a_th_cont_heading'>Missiyamız</h4>
                    <p className='a_th_cont_text'>Missiyamız insanlara daha dərin özünüdərk, emosional dayanıqlıq və
                        daxili rahatlıq hissinə çatmaqda kömək etməkdir.</p>
                    <img src={a_th_cont2} alt="about_therapy_img" />
                </div>
                <div className='a_th_cont cont3'>
                    <h4 className='a_th_cont_heading'>Yanaşmamız</h4>
                    <p className='a_th_cont_text'>Müştərilərin özlərini daha yaxşı anlaması və emosional olaraq güclənməsi üçün
                        mindfulness məşqləri, psixodinamik terapiya və fərdi yanaşma üsullarından istifadə edirik.</p>
                    <img src={a_th_cont3} alt="about_therapy_img" />
                </div>
            </div>
        </section>
    )
}
