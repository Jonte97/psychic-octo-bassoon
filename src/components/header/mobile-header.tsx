import React from "react";

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
            <div className="burger">
              <div className="burger-stick"></div>
              <div className="burger-stick"></div>
              <div className="burger-stick"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
