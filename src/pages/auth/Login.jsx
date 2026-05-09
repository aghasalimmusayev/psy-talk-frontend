import Header from '../../components/headers/Header'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

export default function Login() {
    return (
        <main id='loginPage'>
            <Header
                heading={"Welcome Back 👋"}
                text={"Today is a new day. It's your day. You shape it. Sign in to start managing your projects."} />
            <section className='login_content container'>
                <form className='login_form'>
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" placeholder='Example@email.com' />
                    <label htmlFor="password">Password</label>
                    <input name='password' type="password" placeholder='at least 8 characters' />
                    <div className='password_reset_link'>
                        <Link to={'/resetPassword'}>Şifrəni unutdun?</Link>
                    </div>
                    <button className='blue_button'>Daxil ol</button>
                </form>
                <div className='or_box'>
                    <div className='or_text'>
                        <hr />
                        <span>və ya</span>
                        <hr />
                    </div>
                    <div className='or_route'>
                        <span>Qeydiyyatınız yoxdur?</span>
                        <Link to={'/register'}>Qeydiyyatdan keçin</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
