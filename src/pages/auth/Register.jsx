import Header from '../../components/headers/Header'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

export default function Register() {
    return (
        <main id='registerPage'>
            <Header
                heading={"Welcome Back 👋"}
                text={"Today is a new day. It's your day. You shape it. Sign in to start managing your projects."} />
            <section className='register_content container'>
                <form className='register_form'>
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" placeholder='Example@email.com' />
                    <label htmlFor="password">Şifrə</label>
                    <input name='password' type="password" placeholder='at least 8 characters' />
                    <label htmlFor="password">Təkrar şifrə</label>
                    <input name='password' type="password" placeholder='same password' />
                    <div className='cins_type'>
                        <div className='male'>
                            <label htmlFor="male">Kişi</label>
                            <input name='gender' id='male' type="radio" value={"male"} />
                        </div>
                        <div className='female'>
                            <label htmlFor="female">Qadın</label>
                            <input name='gender' id='female' type="radio" value={"female"} />
                        </div>
                    </div>
                    <button type='submit' className='blue_button'>Qeydiyyatdan keç</button>
                </form>
                <div className='or_box'>
                    <div className='or_text'>
                        <hr />
                        <span>və ya</span>
                        <hr />
                    </div>
                    <div className='or_route'>
                        <span>Artıq hesabınız var?</span>
                        <Link to={'/login'}>Daxil ol</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
