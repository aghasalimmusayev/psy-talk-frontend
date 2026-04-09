import './psychologists.css'
import MainButton from '../smallComponents/MainButton'
import psychologists_img from '../../assets/img/Psychologists.jpg'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function Psychologist() {
    return (
        <div className='psychologist'>
            <img src={psychologists_img} alt="psychologists" />
            <h4 className='psychologist_name'>Dr.Sarah Johnson</h4>
            <h5 className='psychologist_profession'>Klinik Psixoloq</h5>
            <div className='raiting'>
                <div className='raiting_stars'>
                    <FaStar style={{color:'#F1B819'}}/>
                    <FaStar style={{color:'#F1B819'}}/>
                    <FaStar style={{color:'#F1B819'}}/>
                    <FaStar style={{color:'#F1B819'}}/>
                    <FaRegStar style={{color:'#F1B819'}} />
                </div>
                <div className='raiting_num'> (120 şərh) </div>
            </div>
            <hr className='psychologist_hr' />
            <p className='psychologist_text'>Peşəkar və qayğıkeş psixoloq sizin yanınızda</p>
            <MainButton text={"Qəbula yazılmaq"} />
        </div>
    )
}
