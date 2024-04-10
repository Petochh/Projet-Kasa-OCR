import Banner from "../../components/banner/banner"
import HomeImg from "../../assets/images/home.png"
import Galery from "../../components/gallery/gallery"

function Home(){
    return (
    <div>
        <Banner image={HomeImg} text="Chez vous, partout et ailleurs" alt="Banniere accueil"/>
        <Galery />
    </div>
    );
};

export default Home;