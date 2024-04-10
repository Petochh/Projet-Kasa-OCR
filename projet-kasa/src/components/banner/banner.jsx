
import "./banner.scss"

function Banner({image, title, text}){

    return (
        <div className="banner">
            <div className="banner_container">
                <img className="banner_container_image" src={image} alt={title} />
            </div>
            <span className="banner_text">{text}</span>
        </div>
    );
};

export default Banner;