import './houseHost.scss'

//Création du composant qui gère le titre, le lieux et les tags
//Page "housing"
const HousingHost = ({id, title, location, tags}) => {
    return (
        <div className="housing__locationTags">
        <div className="housing__locationTags__title">
            <h1 className="housing__locationTags__title__h1">{title}</h1>
            <p className="housing__locationTags__title__city">{location}</p>
        </div>
        <ul className="housing__locationTags__tags">
            {tags.map((e, index) => (
            <p
                className="housing__locationTags__tags__list"
                key={`${id}-${index}`}
            >
                {e}
            </p>
            ))}
        </ul>
        </div>
    )
}
export default HousingHost