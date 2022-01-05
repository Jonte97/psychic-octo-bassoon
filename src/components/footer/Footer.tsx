import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Footer: React.FC = () => {
    return (
        <footer className="footer-component">
            
            <ul className="social-media-list">
                <li>
                    <a href="" className="facebook-link icon">
                        <IoLogoFacebook />
                    </a>
                </li>
                <li>
                    <a href="" className="instagram-link icon">
                        <IoLogoInstagram />
                    </a>
                </li>
                <li>
                    <a href="" className="twitter-link icon">
                        <IoLogoTwitter />
                    </a>
                </li>
                <li>
                    <a href="" className="linkedin-link icon">
                        <IoLogoLinkedin />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
