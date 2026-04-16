import { useState, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Question({ question, answer }) {

    const [faqOpen, setFaqOpen] = useState(false)
    const bodyRef = useRef(null)

    return (
        <div className='question'>
            <div className='question_heading' onClick={() => setFaqOpen(!faqOpen)}>
                <h4 className={`question_text ${faqOpen ? "open" : ""}`}>{question}</h4>
                <span className={`toggle_arrow ${faqOpen ? "open" : ""}`}>
                    <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
                </span>
            </div>
            <div
                ref={bodyRef}
                className='faq_body'
                style={{ maxHeight: faqOpen ? bodyRef.current?.scrollHeight + "px" : "0px" }}>
                <hr className="faq_hr" />
                <p className='faq_answer'>{answer}</p>
            </div>
        </div>
    )
}
