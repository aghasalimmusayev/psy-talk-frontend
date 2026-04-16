import { Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav.jsx'
import Footer from '../components/footer/Footer.jsx'

export default function Layout() {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
