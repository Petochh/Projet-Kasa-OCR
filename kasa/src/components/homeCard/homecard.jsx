import { Link } from "react-router-dom"

import "./homecard.scss"

function HomeCard({id, title, cover}){
    return(
    <div className="card_container">
        <Link className="card_container_link" key={id} to={`/house/${id}`}>
            <img className="card_container_link_image" src={cover} alt="cover" />
            <span className="card_container_link_title">{title}</span>
        </Link>
    </div>
    )
}

export default HomeCard;