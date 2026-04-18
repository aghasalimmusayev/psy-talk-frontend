import Header from '../../components/headers/Header'
import '../../styles/about.css'
import AboutTherapy from './AboutTherapy'
import Whywe from './Whywe'

export default function About() {
    return (
        <main id='about'>
            <Header
                heading={"Hər zaman yanınızdayıq"}
                text={`Həyat bəzən çətin anlarla dolu ola bilər və dəstəyə ehtiyac duyduğunuzda,
                     biz sizin üçün buradayıq. Komandamız sizə uyğun psixoloqu tapmaqda kömək edir`}
            />
            <Whywe />
            <AboutTherapy />
        </main>
    )
}
