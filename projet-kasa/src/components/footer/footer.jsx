import logo from "../../assets/logos/logoWhite.svg";
import "./footer.scss";


function Footer(){
    return (
    <footer className="footer">
            <img src={logo} alt="logo" className="footer_image" />
            <p className="footer_text">
            © 2020 Kasa. All rights reserved
            </p>
    </footer>
    );
};

export default Footer