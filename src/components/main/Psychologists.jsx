import '../smallComponents/button.css'
import Psychologist from "./Psychologist"
import { GoArrowRight } from "react-icons/go";

export default function Psychologists() {
    return (
        <section id="psychologists">
            <div className='psy_head'>
                <h2 className="psy_section_heading">Psixoloqlar</h2>
                <div className="main_button">
                    <button className='all_psy_button'>
                        <span>Bütün Psixoloqlar</span>
                        <GoArrowRight style={{ fontSize: "16px" }} />
                    </button>
                </div>
            </div>
            <div className="psychologists">
                <Psychologist />
                <Psychologist />
                <Psychologist />
            </div>
        </section >
    )
}
