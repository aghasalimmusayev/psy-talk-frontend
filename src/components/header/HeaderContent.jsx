import { FiSearch } from "react-icons/fi";

export default function HeaderContent() {
    return (
        <div className='header_content container'>
            <p className='welcome_text'>Welcome to PSYTALK</p>
            <h1 className='content_heading'>Find your peace & understand yourself.</h1>
            <p className='content_text'>Your mental well-being journey starts here — discover clarity, balance, and inner strength.</p>
            <div className='content_search_box'>
                <input type="text" placeholder="Psixoloq adı,ixtisas və problem"/>
                <div className='search_icon'>
                    <FiSearch />
                </div>
            </div>
        </div>
    )
}
