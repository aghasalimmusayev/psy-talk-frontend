import './header.css'
import { FiSearch } from "react-icons/fi";

export default function Header() {
    return (
        <div className='header_bg'>
            <div className='header_content container'>
                <p className='welcome_text'>Welcome to PSYTALK</p>
                <h1 className='content_heading'>Find your peace & understand yourself.</h1>
                <p className='content_text'>Your mental well-being journey starts here — discover clarity, balance, and inner strength.</p>
                <div className='content_search_box'>
                    <input type="text" placeholder="Psixoloq adı, ixtisas və problem" />
                    <div className='search_icon'>
                        <FiSearch />
                    </div>
                </div>
                <div className="statics">
                    <div className="static_results sertificate_result">
                        <div className="static_numbers">120+</div>
                        <p className="static_name">Sertifikatlaşdırılmış</p>
                    </div>
                    <div className="line"></div>
                    <div className="static_results seans_result">
                        <div className="static_numbers">4300+</div>
                        <p className="static_name">Uğurlu seans</p>
                    </div>
                    <div className="line"></div>
                    <div className="static_results client_result">
                        <div className="static_numbers">96%</div>
                        <p className="static_name">Müştəri məmnuniyyəti</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
