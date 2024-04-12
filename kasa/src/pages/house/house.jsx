import { useParams } from "react-router-dom";
import {datas} from "../../data/house.js"

import Banner from "../../components/banner/banner";
import HouseLocation from "../../components/houseLocation/houseLocation";
import HouseHost from "../../components/houseHost/houseHost"
import Collapse from "../../components/collapse/collapse"
import Error from "../error/error"

import "./house.scss"

function House() {
    const { id } = useParams();
    const house = datas.find((house) => house.id === id)
    if(!house){
        return <Error />
    }
    return (
        <div className="house_page_container">
            <Banner image={house.pictures} title={house.title}/>
            <div className="house_page_container_info">
                <HouseLocation id={id} title={house.title} location={house.location} tags={house.tags} />
                <HouseHost name={house.host.name} picture={house.host.picture} rate={house.rating}/>
            </div>
            <div className="house_page_container_collapse">
                <Collapse title="Description" content={house.description} />
                <Collapse title="Equipements" content={<ul> {house.equipments.map((equipments, index) => ( <li key={index}>{equipments}</li> ))}</ul>} />
            </div>
        </div>
    );
}

export default House;