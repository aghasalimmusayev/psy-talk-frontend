import './main.css'
import FirstStep from './FirstStep'
import Psychologists from './Psychologists'
import SuppotInfo from './SupportInfo'
import Faq from './Faq'

export default function Main() {
    return (
        <main className='container'>
            <SuppotInfo />
            <Psychologists />
            <FirstStep />
            <Faq />
        </main>
    )
}
