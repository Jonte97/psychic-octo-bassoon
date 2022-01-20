import React from "react";

interface DesktopHeaderProps {
  scroll: number;
  navigate: (id: string) => void;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = (
  props: DesktopHeaderProps
) => {
  const [welcomePageHeight, setWelcomePageHeight] = React.useState(0);

  React.useEffect(() => {
    const welcomePageImage = document.getElementById(
      "welcome-page-image"
    ) as HTMLDivElement;
    if (welcomePageImage != null) {
      setWelcomePageHeight(welcomePageImage.offsetHeight);
    }
  }, [props.scroll]);

  //* Checks if scrolled past welcomePage
  const headerBackgroundThreshhold = (): boolean => {
    if (props.scroll <= welcomePageHeight - 100) {
      return false;
    }
    return true;
  };

  return (
    <header
      className={`header-component-desktop ${
        headerBackgroundThreshhold() ? "header-background" : ""
      }`}
    >
      <div className={`header-inner ${headerBackgroundThreshhold() ? "header-background" : ""}`}>
        <div className="header-title">
          <h1 className="dance-script">Livscoach</h1>
        </div>
        <ul className="menu-list-desktop ">
          <li onClick={() => props.navigate("about-component")}>Om mig</li>
          <li onClick={() => props.navigate("coach-component")}>Livscoach</li>
          <li onClick={() => props.navigate("session-details-component")}>
            Sessioner
          </li>
          <li onClick={() => props.navigate("seven-keys-component")}>
            7 nycklar
          </li>
          <li onClick={() => props.navigate("contact")}>Kontakta mig</li>
        </ul>
      </div>
    </header>
  );
};

export default DesktopHeader;
