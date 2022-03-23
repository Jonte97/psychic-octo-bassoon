import React from "react";
import about from "../../assets/img/about/about.jpg";
import ImgText from "../img-text/img-text";
import profile_1 from "../../assets/img/about/profile_1.jpg";

const About: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(isMobileInitial());

  function isMobileInitial(): boolean {
    if (window.innerWidth <= 1200) {
      return true;
    }
    return false;
  }

  const text =
    "Min stora förändring började för ca 13 år sedan då jag fick en utmattningsdepression. Jag var väldigt illa däran och fick bra hjälp från sjukvården men kände att den inte räckte hela vägen. Jag hade möjligheten att göra en storstädning som hölls av dåvarande Icoach. Genom det fick jag upptäcka vem jag faktiskt var och varför jag var den jag var. Vi gjorde en djupdykning bland dåliga minnen och rensa bort det jag bärt med mig som en jättestor ryggsäck under åren. Saker som inte jag behövde bära på, saker jag kunde lägga där de hörde hemma";

  return (
    <section id="about-component" className="about-component content-section">
      <div className="right-section">
        <article className="about-article">
          <div className="slide-in">
            <div className="theme-section">
              <h3 className="dance-script-headline title">Bakgrund</h3>
            </div>
            <div className="about-wrapper">
              <ImgText
                text={text}
                headline="Om mig"
                img={profile_1}
                imgRight={true}
              />
              <ImgText
                text={text}
                headline="Om mig"
                img={about}
                imgRight={isMobile ? true : false}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
