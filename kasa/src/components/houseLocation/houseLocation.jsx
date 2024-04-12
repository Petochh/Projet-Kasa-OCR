import './houseLocation.scss'

//Création du composant qui gère le titre, le lieux et les tags
//Page "housing"
const HouseLocation = ({id, title, location, tags}) => {
    return (
        <div className="house_location">
            <div className="house_location_title">
                <h1 className="house_location_title_h1">{title}</h1>
                <p className="house_location_title_city">{location}</p>
            </div>
            <ul className="house_location_tags">
                {tags.map((e, index) => (
                <p
                    className="house_location_tags_list"
                    key={`${id}-${index}`}
                >
                    {e}
                </p>
                ))}
            </ul>
        </div>
    )
}
export default HouseLocation;