import Banner from "../../components/banner/banner";
import AboutImg from "../../assets/images/about.png";
import Collapse from "../../components/collapse/collapse";
import { textCollapse } from "../../data/aboutCollapseContent";
import "./about.scss"


function About(){
    return (
        <div className="about">
            <Banner image={AboutImg} alt="Banniere a propos"/>
            {textCollapse.map((data) => {
                return(
                    <Collapse title={data.label} content={data.content} />
                );
            })}
        </div>
    );
};

export default About;