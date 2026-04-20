import '../../styles/ourServices.css'
import Header from '../../components/headers/Header'
import Whatwedo from './Whatwedo'
import Services from './Services'
import CallToAction from './CallToAction'

export default function OurServices() {
    return (
        <main id='ourServices'>
            <Header
                heading={"Psixoloji rifahınızı gücləndirmək üçün sizə fərdi və peşəkar dəstək təqdim edirik."}
                text={"Təcrübəli mütəxəssislərimiz narahatlıq, depressiya, stress və münasibət problemləri kimi sahələrdə sizə kömək edir."} />
            <Whatwedo />
            <Services />
            <CallToAction />
        </main>
    )
}
