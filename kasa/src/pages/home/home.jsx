import React, { useState, useEffect } from 'react';

import Banner from "../../components/banner/banner"
import HomeImg from "../../assets/images/home.png"
import Galery from "../../components/homeGallery/gallery"

import "./home.scss"

function Home(){
    const [text, setText] = useState("Chez vous, partout et ailleurs");

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 768) {
            setText(<p>Chez vous,<br/> partout et ailleurs</p>);
        } else {
            setText(<p>Chez vous, partout et ailleurs</p>);
        }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Déclenche l'effet uniquement lors du montage initial

    return (
        <div className="home_page_container">
            <Banner image={HomeImg} text={text} alt="Banniere accueil" />
            <Galery />
        </div>
    );
};

export default Home;