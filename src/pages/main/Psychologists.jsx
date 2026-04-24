import '../../styles/psychologists.css'
import { Link } from 'react-router-dom';
import Psychologist from "./Psychologist"
import { GoArrowRight } from "react-icons/go";

export default function Psychologists() {
    return (
        <section id="psychologists" className='container'>
            <div className='psy_head'>
                <h2 className="psy_section_heading">Psixoloqlar</h2>
                <Link to={'/psychologists'} className='all_psy_button'>
                    <span>Bütün Psixoloqlar</span>
                    <GoArrowRight style={{ fontSize: "24px" }} />
                </Link>
            </div>
            <div className="psychologists">
                <Psychologist />
                <Psychologist />
                <Psychologist />
                <Psychologist />
                <Psychologist />
            </div>
        </section >
    )
}
