import profile from "../../assets/img/profile.jpg";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about-component"
      className="about-me-component content-section"
    >
      <div className="about-me-wrapper">
        <div className="inner-wrapper">
          <div className="profile">
            <img src={profile} alt="profile" />
          </div>
          <div className="about-me-text-section text-section">
            <div className="text-section">
              <h1>Caroline livscoach</h1>
              <p>
                Funderar du på ditt egna värde? Har du svårt att sätta gränser?
                Har du tappat fotfästet och känner dig vilsen? Har du haft en
                utmattning, utbrändhet eller har det hänt något annat som rubbat
                livet? Har du gått länge och känner att du inte vet hur eller
                vart du ska börja. Längtar du efter att hitta glädje och
                trygghet i dig själv och till livet.
                {/* <br />
                <br /> Jag har själv gått igenom många tuffa motgångar i livet
                bl a utmattnings depression och cancerbehandling med allt vad
                det innebär. Jag är redo att möta dig som tar dig tillbaka från
                en utmattning, diagnostiserad cancer under behandling eller
                efter din behandling, även du som är anhörig till en person med
                diagnostiserad cancer. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
