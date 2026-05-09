import Header from '../../components/headers/Header'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

export default function ResetPassword() {
    return (
        <main id='resetPassword'>
            <Header
                heading={"Welcome Back 👋"}
                text={"Today is a new day. It's your day. You shape it. Sign in to start managing your projects."} />
            <section className='reset_password_content container'>
                <form className='reset_password_form'>
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" placeholder='Example@email.com' />
                    <button type='submit' className='blue_button'>Göndər</button>
                </form>
                <div className='or_route'>
                    <span>Yenidən </span>
                    <Link to={'/login'}>daxil ol</Link>
                </div>
            </section>
        </main>
    )
}
