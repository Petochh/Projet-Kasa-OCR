import star from "../../assets/icons/star.png"
import starRed from "../../assets/icons/starRed.png"

import "./houseHost.scss";

function HouseHost({ name, picture, rate }) {
    const renderStars = () => {
        const stars = [];

        // Boucle pour créer les étoiles en fonction de la note
        for (let i = 1; i <= 5; i++) {
            // Déterminer la couleur de l'étoile en fonction de la note
            const starColor = i <= rate ? starRed : star;
            
            stars.push(
                <img className="host_container_rate_star" src={starColor} alt="star"/>
            );
        }

        return stars;
    };

    return (
        <div className="host_container">
            <div className="host_container_id">
                <p className="host_container_id_name">{name}</p>
                <img className="host_container_id_img" src={picture} alt="host" />
            </div>
            <div className="host_container_rate">
                {renderStars()}
            </div>
        </div>
    );
}

export default HouseHost;
