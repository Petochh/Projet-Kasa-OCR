import { useState } from "react"

import arrowDown from "../../assets/icons/arrowDown.png"
import "./collapse.scss"

function Collapse({title, content}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="collapse">
            <div className="collapse_head">
                <h2 className="collapse_head_title">{title}</h2>
                <img className={isOpen ? "collapse_head_arrow active" : "collapse_head_arrow inactive"} src={arrowDown} alt="img" onClick={toggleCollapse}/>
            </div>
            <div className={isOpen ? "collapse_body open" : "collapse_body close"}>
                <div className="collapse_body_content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Collapse;