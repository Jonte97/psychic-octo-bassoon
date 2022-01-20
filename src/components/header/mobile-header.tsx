import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface MobileHeaderProps {
  scroll: number;
  toggleMenu: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = (
  props: MobileHeaderProps
) => {
  return (
    <header className="header-component">
      <div>
        <div className="">
          <div className="navbar-btn" onClick={props.toggleMenu}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
