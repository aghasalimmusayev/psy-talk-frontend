import { IoIosArrowRoundForward } from "react-icons/io";
import '../../styles/contact.css'

export default function ContactForm() {
    return (
        <section id='contactForm'>
            <div className="contact_form_box">
                <form className="contact_form">
                    <div className="input_field">
                        <input type="text" name="name" id="" placeholder="Adınız" required />
                        <input type="text" name="surname" id="" placeholder="Soyadınız" required />
                        <input type="email" name="email" id="" placeholder="Email Adres" />
                        <input type="phone" name="phone" id="" placeholder="Telefon nömrəniz" />
                    </div>
                    <textarea name="text" id="" placeholder='Mövzu'></textarea>
                    <button type='submit' className="contact_form_btn">
                        <span>Göndər</span>
                        <IoIosArrowRoundForward style={{ fontSize: "32px" }} />
                    </button>
                </form>
            </div>
        </section>
    )
}
