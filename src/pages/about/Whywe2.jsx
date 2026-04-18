import '../../styles/whywe2.css'
import whywe2Img from '../../assets/img/whywe2Img.png'

export default function Whywe2() {
    return (
        <section id='whywe2'>
            <div className='whywe2_content container'>
                <div className="whywe2_img">
                    <img src={whywe2Img} alt="" />
                </div>
                <div className="whywe2_cards">
                    <div className="whywe2_card">
                        <h4 className='whywe2_card_heading'>Empathi</h4>
                        <p className='whywe2_card_text'>Biz sizə sakit və dəstəkləyici bir mühit təqdim edərək,
                            duyğularınızı daha yaxşı anlamağa və ifadə etməyə kömək edirik.</p>
                    </div>
                    <div className="whywe2_card">
                        <h4 className='whywe2_card_heading'>Məxfilik</h4>
                        <p className='whywe2_card_text'>Sizin şəxsi məlumatlarınız bizim üçün önəmlidir – onları
                            tam məxfilik və təhlükəsizlik şəraitində qoruyuruq.</p>
                    </div>
                    <div className="whywe2_card">
                        <h4 className='whywe2_card_heading'>Təhlükəsizlik</h4>
                        <p className='whywe2_card_text'>Biz məlumatlarınızı müasir şifrələmə metodları ilə qoruyur
                            və icazəsiz girişlərin qarşısını alırıq.</p>
                    </div>
                    <div className="whywe2_card">
                        <h4 className='whywe2_card_heading'>İnkişaf</h4>
                        <p className='whywe2_card_text'>Biz sizə emosional və şəxsi inkişaf yolunda dəstək oluruq,
                            özünüzü daha yaxşı anlamağa və böyüməyə kömək edirik.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
