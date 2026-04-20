import '../../styles/serviceDetail.css'
import Header from '../../components/headers/Header'
import Healing from './Healing'

export default function ServiceDetail() {
    return (
        <main id='ServiceDetail'>
            <div className='service_detail_content'>
                <Header
                    heading={"Psixoloji rifahınızı gücləndirmək üçün sizə fərdi və peşəkar dəstək təqdim edirik."}
                    text={"Təcrübəli mütəxəssislərimiz narahatlıq, depressiya, stress və münasibət problemləri kimi sahələrdə sizə kömək edir."} />
                <Healing />
            </div>
        </main>
    )
}
