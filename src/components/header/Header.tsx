import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { scrollToId } from "../../domain/core/animations";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = (id: string): void => {
    toggleMenu();
    scrollToId(id);
  };
  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      !isVisible && // to limit setting state only the first time
        setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <header className="header-component">
      <div>
        {isVisible && (
          <div className="">
            <div className="navbar-btn" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </div>
          </div>
        )}
      </div>
      {menuOpen && (
        <nav className="nav-menu">
          <div className="nav-wrapper">
            <ul className="menu-list dance-script-headline">
              <li onClick={() => navigate("about-component")}>Om mig</li>
              <li onClick={() => navigate("coach-component")}>Livscoach</li>
              <li onClick={() => navigate("session-details-component")}>
                Sessioner
              </li>
              <li onClick={() => navigate("seven-keys-component")}>
                7 nycklar
              </li>
              <li onClick={() => navigate("contact")}>Kontakta mig</li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
