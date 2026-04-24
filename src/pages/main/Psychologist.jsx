import MainButton from '../../components/common/MainButton'
import psychologists_img from '../../assets/img/Psychologists.jpg'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllUsers } from '../../redux/slices/userSlice';
import { Link } from 'react-router-dom';

export default function Psychologist() {

    // const users = useSelector((state) => state.users.users)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getAllUsers())
    // }, [])
    // console.log(users)

    return (
        <div className='psychologist'>
            <img src={psychologists_img} alt="psychologists" />
            <Link to={'/aboutPsychologist'} className='psychologist_name'>Dr.Sarah Johnson</Link>
            <h5 className='psychologist_profession'>Klinik Psixoloq</h5>
            <div className='raiting'>
                <div className='raiting_stars'>
                    <FaStar style={{ color: '#F1B819' }} />
                    <FaStar style={{ color: '#F1B819' }} />
                    <FaStar style={{ color: '#F1B819' }} />
                    <FaStar style={{ color: '#F1B819' }} />
                    <FaRegStar style={{ color: '#F1B819' }} />
                </div>
                <div className='raiting_num'> (120 şərh) </div>
            </div>
            <hr className='psychologist_hr' />
            <p className='psychologist_text'>Peşəkar və qayğıkeş psixoloq sizin yanınızda</p>
            <MainButton text={"Qəbula yazılmaq"} to={'/'} />
        </div>
    )
}
