import { Link } from "react-router-dom"
import "./error.scss"
import img_404 from "../../assets/logos/404.svg"


function Error(){
    return(
        <div className="error_container">
            <img className="error_container_404" src={img_404} alt="erreur 404"/>
            <p className="error_container_description">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="error_container_link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error;