import React from "react";
import { scrollToId } from "../../domain/core/animations";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [scroll, setScroll] = React.useState<number>(0);
  const [isMobile, setIsMobile] = React.useState<boolean>(isMobileInitial());

  React.useEffect(() => {}, [scroll]);

  React.useEffect(() => {
    //*EventListener for scroll
    const listenToScroll = () => {
      let heightToHideFrom = 100;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      setScroll(winScroll);
      if (winScroll > heightToHideFrom) {
        !isVisible && // to limit setting state only the first time
          setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  React.useEffect(() => {
    //*Eventlistener for size of screen
    const listenToResize = () => {
      if (window.innerWidth <= 760) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", listenToResize);
    return () => window.removeEventListener("resize", listenToResize);
  }, []);

  //*To open and close menu phone
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //*To navigate from menu
  const navigate = (id: string): void => {
    if(isMobile) {
      toggleMenu();
    } 
    scrollToId(id);
  };

  function isMobileInitial(): boolean {
    if (window.innerWidth <= 760) {
      return true;
    }
    return false;
  }

  return (
    <React.Fragment>
      {isMobile ? (
        <MobileHeader scroll={0} toggleMenu={toggleMenu} />
      ) : (
        <DesktopHeader scroll={scroll} navigate={navigate} />
      )}

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
    </React.Fragment>
  );
};

export default Header;
