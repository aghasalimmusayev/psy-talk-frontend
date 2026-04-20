import { Link } from 'react-router-dom'
import '../../styles/overLook.css'

export default function OverLook() {
    return (
        <section id='overLook'>
            <div className="over_look_content container">
                <h3 className='over_look_heading'>📌 Ümumi Baxış</h3>
                <p className='over_look_text'>Yeniyetməlik dövrü insan həyatının ən həssas və eyni zamanda ən formalaşdırıcı
                    mərhələlərindən biridir. Bu dövrdə gənclər həm fiziki, həm emosional, həm də sosial baxımdan sürətli
                    dəyişikliklər yaşayırlar. Kimlik axtarışı, özünü qəbul etmə, dostluq münasibətləri, ailə ilə ünsiyyət
                    və gələcəklə bağlı narahatlıqlar onların gündəlik həyatının ayrılmaz hissəsinə çevrilir. Bəzən isə bu
                    dəyişikliklər stress, narahatlıq, özünə inamsızlıq və daxili qarışıqlıq kimi çətinliklərə səbəb ola bilər.
                    <br />
                    Yeniyetmələr üçün məsləhət xidməti məhz bu mürəkkəb dövrdə onlara təhlükəsiz, anlayışlı və dəstəkləyici
                    bir mühit təqdim edir. Burada hər bir yeniyetmə öz fikirlərini sərbəst şəkildə ifadə edə, hisslərini bölüşə
                    və mühakimə olunmadan dinlənildiyini hiss edə bilər. Empatiya və peşəkar yanaşma əsasında qurulan bu proses
                    onların özlərini daha yaxşı tanımalarına, emosiyalarını idarə etmələrinə və qarşılaşdıqları problemlərə
                    daha sağlam baxış formalaşdırmalarına kömək edir.
                    <br />
                    Seanslar zamanı yeniyetmələr stress və təzyiqi necə idarə etməyi, münasibətlərdə daha sağlam sərhədlər qurmağı,
                    özünə inamı artırmağı və gündəlik həyatın çətinlikləri ilə effektiv şəkildə mübarizə aparmağı öyrənirlər.
                    Eyni zamanda onların ünsiyyət bacarıqları inkişaf edir, öz dəyərlərini anlama qabiliyyəti güclənir və daha
                    balanslı psixoloji vəziyyətə doğru addım atırlar.
                    <br />
                    Bu xidmətin əsas məqsədi yalnız mövcud problemləri aradan qaldırmaq deyil, həm də yeniyetmələrin gələcək
                    həyatlarında qarşılaşacaqları çətinliklərə daha hazırlıqlı, güclü və özünə güvənən fərdlər kimi yetişmələrinə
                    dəstək olmaqdır. Çünki hər bir yeniyetmə dinlənilməyə, anlaşılmağa və doğru istiqamətləndirilməyə layiqdir.</p>
            </div>
            <div className="have_a_question container">
                <h4 className='have_a_question_heading'>Sualın var?</h4>
                <Link to={'/'}>Bizimlə əlaqə</Link>
            </div>
        </section>
    )
}
