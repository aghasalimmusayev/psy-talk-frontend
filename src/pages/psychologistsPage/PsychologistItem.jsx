import MainButton from '../../components/common/MainButton'
import psyImg from '../../assets/img/Psychologists.jpg'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function PsychologistItem() {
    return (
        <div className="psy_list_item">
            <div className="psy_list_top">
                <div className="psy_list_top_content">
                    <Link to={'/aboutPsychologist'} className='psy_name'>Dr.Sarah Johnson</Link>
                    <p className='psy_experience'>
                        <span className='psy_profession_label'>Klinik Psixoloq</span>
                        <span className='psy_exp_num'>5 il</span>
                    </p>
                    <div className='psy_professions'>
                        <span>Uşaq psixologiyası</span>
                        <span>Valideyn</span>
                        <span>Depressiya</span>
                    </div>
                </div>
                <div className="psy_list_img"><img src={psyImg} alt="psy_image" /></div>
            </div>
            <hr className='psy_list_line' />
            <div className="psy_list_bottom">
                <div className="psy_list_bottom_content">
                    <div className="seans_price">
                        <p className='seans_price_label'>Seans qiyməti:</p>
                        <p className='seans_price_num'>45 AZN / <span>50 dəq</span></p>
                    </div>
                    <div className='psy_rating_result'>
                        <p className="psy_rating_result_num">5.0</p>
                        <div className="rating_result_stars">
                            <FaStar style={{ color: '#F1B819' }} />
                            <FaStar style={{ color: '#F1B819' }} />
                            <FaStar style={{ color: '#F1B819' }} />
                            <FaStar style={{ color: '#F1B819' }} />
                            <FaRegStar style={{ color: '#F1B819' }} />
                        </div>
                    </div>
                </div>
                <div className="psy_list_btn">
                    <MainButton text={"Qəbula Yazılmaq"} to={'/'} />
                </div>
            </div>
        </div>
    )
}
