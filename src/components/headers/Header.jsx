import { FiSearch } from "react-icons/fi";
import '../../styles/header.css'

export default function Header({ heading, text }) {
    return (
        <div className='header_bg'>
            <div className='header_content container'>
                <h1 className='content_heading'>{heading}</h1>
                <p className='content_text'>{text}</p>
                <div className='content_search_box'>
                    <input type="text" placeholder="Psixoloq adı, ixtisas və problem" />
                    <div className='search_icon'>
                        <FiSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}
