import {datas} from "../../data/house"
import HomeCard from "../homecard/homecard"
import "./gallery.scss"

function Galery(){
    return(
        <div className="gallery">
            {datas.map((data) => {
                return (
                    <HomeCard key={data.id}  id={data.id} title={data.title} cover={data.cover} />
                );
            })}
        </div>
    );
};

export default Galery;