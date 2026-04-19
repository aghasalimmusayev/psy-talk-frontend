import Header from '../../components/headers/Header'
import '../../styles/ourServices.css'
import Whatwedo from './Whatwedo'

export default function OurServices() {
    return (
        <main id='services'>
            <Header
                heading={"Psixoloji rifahınızı gücləndirmək üçün sizə fərdi və peşəkar dəstək təqdim edirik."}
                text={"Təcrübəli mütəxəssislərimiz narahatlıq, depressiya, stress və münasibət problemləri kimi sahələrdə sizə kömək edir."} />
            <Whatwedo />
        </main>
    )
}
