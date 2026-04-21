import '../../styles/contact.css'
import Header from '../../components/headers/Header'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <main id='contactPage'>
            <Header
                heading={"Sualınız var və ya dəstəyə ehtiyac duyursunuz?"}
                text={" Biz buradayıq. Sizin üçün uyğun psixoloqu tapmaq və ya xidmətlərimiz haqqında daha ətraflı məlumat almaq üçün bizimlə əlaqə saxlayın."} />
            <div className='contactPage_inside container'>
                <ContactInfo />
                <ContactForm />
            </div>
        </main>
    )
}
