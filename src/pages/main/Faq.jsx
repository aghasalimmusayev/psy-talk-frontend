import '../../styles/faq.css'
import fag_img from '../../assets/img/faq.jpg'
import Question from './Question'

export default function Faq() {
    return (
        <div className='faq_section container'>
            <h2 className='faq_heading'>Tez-tez soruşulan suallar</h2>
            <p className='faq_text'>Terapiya emosional rifahınızı yaxşılaşdırmaq üçün lisenziyalı bir mütəxəssislə
                dəstəkləyici və konstruktiv söhbətdir.</p>
            <div className='faq_content'>
                <div className='faq_questions'>
                    <Question 
                        question={"Psixoloqla görüş necə keçir?"}
                        answer={`Seans zamanı psixoloq sizi diqqətlə dinləyir, hiss və düşüncələrinizi anlamağa çalışır. 
                            Məqsəd sizin özünüzü daha yaxşı tanımağınıza və problemlərin həllinə kömək etməkdir.`} />
                    <Question
                        question={"Seanslar neçə dəqiqə davam edir?"}
                        answer={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque alias deserunt 
                        exercitationem excepturi obcaecati maxime cum?`} />
                    <Question
                        question={"Seansa necə yazıla bilərəm?"}
                        answer={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque alias deserunt 
                        exercitationem excepturi obcaecati maxime cum?`} />
                    <Question
                        question={"Məlumatlarım gizli saxlanılır?"}
                        answer={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque alias deserunt 
                        exercitationem excepturi obcaecati maxime cum?`} />
                </div>
                <div className='faq_img'>
                    <img src={fag_img} alt="fag_img" />
                    <div className='faq_img_shadow'></div>
                </div>
            </div>
        </div>
    )
}
