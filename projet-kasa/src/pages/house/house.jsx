import { useParams } from "react-router-dom";
import {datas} from "../../data/house.js"

import HouseBanner from "../../components/houseBanner/houseBanner";
import HouseHost from "../../components/houseHost/houseHost";
import Collapse from "../../components/collapse/collapse"

function House() {
    const { id } = useParams();
    const house = datas.find((house) => house.id === id)
    return (
        <div>
            <HouseBanner data={house.pictures} />
            <HouseHost id={id} title={house.title} location={house.location} tags={house.tags} />
            <Collapse title="Description" content={house.description} />
            <Collapse title="Equipements" content={<ul> {house.equipments.map((equipments, index) => ( <li key={index}>{equipments}</li> ))}
            </ul>} />
        </div>
    );
}

export default House;
