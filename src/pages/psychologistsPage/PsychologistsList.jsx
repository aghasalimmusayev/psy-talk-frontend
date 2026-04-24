import '../../styles/psychologistsList.css'
import PsychologistItem from './PsychologistItem';

export default function PsychologistsList() {
    return (
        <section id='psychologistsList'>
            <div className="psy_list_inside container">
                <div className="psy_filtering"></div>
                <div className="psy_list">
                    <PsychologistItem />
                    <PsychologistItem />
                    <PsychologistItem />
                </div>
            </div>
        </section>
    )
}
