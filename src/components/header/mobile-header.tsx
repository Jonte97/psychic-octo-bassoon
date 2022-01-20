import React from 'react';

interface MobileHeaderProps {
    scroll:number;
}

const MobileHeader:React.FC<MobileHeaderProps> = (props:MobileHeaderProps) => {
    console.log(props.scroll);
    return null;
     {/* <header className="header-component">
        <div>
          {!isVisible && (
            <div className="header-title">
              <h1 className="dance-script">Livscoach</h1>
            </div>
          )}
          {isVisible && isMobile && (
            <div className="">
              <div className="navbar-btn" onClick={toggleMenu}>
                <GiHamburgerMenu />
              </div>
            </div>
          )}
        </div>
      </header> */}
}

export default MobileHeader;