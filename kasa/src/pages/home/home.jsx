import React, { useState, useEffect } from 'react';

import Banner from "../../components/banner/banner"
import HomeImg from "../../assets/images/home.png"
import Galery from "../../components/homeGallery/gallery"

import "./home.scss"

function Home(){
    
    return (
        <div className="home_page_container">
            <Banner image={HomeImg} text="Chez vous, partout et ailleurs" alt="Banniere accueil" />
            <Galery />
        </div>
    );
};

export default Home;