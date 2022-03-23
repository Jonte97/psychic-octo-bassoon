import React from "react";

const WelcomePage: React.FC = () => {
  React.useEffect(() => {
    const text = document.querySelector(".welcome-text");
    const strText = text?.textContent;
    const splittedText = strText!.split("");
    if (text !== undefined) {
      text!.textContent = ""; 
      for (let i = 0; i < splittedText!.length; i++) {
        text!.innerHTML += "<span>" + splittedText[i] + "</span>";
      }
    }
      
      let char = 0;
      let timer = setInterval(onTick, 25);

    function onTick() {
      const span = text!.querySelectorAll("span")[char] as HTMLSpanElement;
      span.classList.add('fade');
      char++;
      if (char === splittedText.length) {
        complete();
      }
    }
    function complete() {
      clearInterval(timer)
    }
  }, []);

  return (
    <div className="welcome-page-component">
      <div id="welcome-page-image" className="bg-img">
        <div className="welcome-page-container">
          <h1 className="dance-script">Caroline Norberg</h1>
          <p className="welcome-text">
            Vill du ha hjälp med att göra en förändring i ditt liv <br></br>Jag
            erbjuder samtal i livscoachning läs mer nedan!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
