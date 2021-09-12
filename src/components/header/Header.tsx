import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { scrollToId } from "../../domain/core/animations";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const navigate = (id: string): void => {
        toggleMenu();
        scrollToId(id);
    };
    return (
        <header className="header-component">
            <div>
                <div className="">
                    <div className="navbar-btn" onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </div>
                </div>
            </div>
            {menuOpen && (
                <nav className="nav-menu">
                    <div className="nav-wrapper">
                        <ul className="menu-list dance-script-headline">
                            <li onClick={() => navigate("about-component")}>Om mig</li>
                            <li onClick={() => navigate("coach-component")}>
                                Livscoach
                            </li>
                            <li onClick={() => navigate("session-details-component")}>Sessioner</li>
                            <li onClick={() => navigate("seven-keys-component")}>7 nycklar</li>
                            <li onClick={() => navigate("contact")}>Kontakta mig</li>
                        </ul>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
