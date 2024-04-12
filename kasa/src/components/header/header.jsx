import React from "react";
import { NavLink } from 'react-router-dom'

import logo from "../../assets/logos/logo.svg";
import "./header.scss";

function Header(){
    return(
        <header className="header">
            <img src={logo} alt="logo" className="header_image" />
            <nav className="header_links">
                <NavLink className="header_links_link" exact="true" to="/" activeClassName="active">Accueil</NavLink>
                <NavLink className="header_links_link" exact="true" to="/about/" activeClassName="active">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;