import '../../styles/main.css'
import FirstStep from './FirstStep'
import Psychologists from './Psychologists'
import SuppotInfo from './SupportInfo'
import Faq from './Faq'
import MainHeader from '../../components/headers/MainHeader'

export default function Main() {
    return (
        <main>
            <MainHeader />
            <SuppotInfo />
            <Psychologists />
            <FirstStep />
            <Faq />
        </main>
    )
}
