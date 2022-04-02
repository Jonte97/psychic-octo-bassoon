import React, { useEffect, useRef, useState } from "react";
import { keys } from "../../assets/content/keys";

import { KeyValuePair } from "../../domain/model/KeyValuePair.model";
import KeyImage from "./key-image";

const Keys: React.FC = () => {
  const refs = useRef([
    React.createRef<HTMLSpanElement>(),
    React.createRef<HTMLSpanElement>(),
    React.createRef<HTMLSpanElement>(),
    React.createRef<HTMLSpanElement>(),
    React.createRef<HTMLSpanElement>(),
    React.createRef<HTMLSpanElement>(),
  ]);

  const [activeKey, setActiveKey] = useState<KeyValuePair>(keys[0]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("image-animation");
  //       }
  //     });
  //   });
  //   const imageElement = document.querySelector(".image-container");
  //   if (imageElement) {
  //     observer.observe(imageElement);
  //   }
  // }, []);
  // useEffect(() => {
  //   // document
  //   //   .querySelector(".image-container")
  //   //   ?.classList.add("image-animation");
  // }, [activeKey]);

  // const changeKey = (id: number): void => {
  //   document
  //     .querySelector(".image-container")
  //     ?.classList.remove("image-animation");
  //   refs.current[activeKey.key].current?.classList.remove("active");
  //   refs.current[id].current?.classList.add("active");
  //   setActiveKey(keys[id]);
  // };

  const [slideUp, setSlideUp] = React.useState<boolean>(false);

  const readMore = () => {
    setSlideUp(!slideUp);
  };

  return (
    <section id="seven-keys-component" className="keys-component">
      <div className={`${slideUp ? "slide-up" : "slide-down"} image-wrapper`}>
        <div className={`image-container `}>
          <KeyImage slideUp={slideUp} imagePath={activeKey.value.image} />
        </div>
      </div>
      <div className="read-more-wrapper ">
        <div className="read-more-container hexagon" onClick={() => readMore()}>
          <a>Läs mer</a>
        </div>
      </div>
    </section>
  );
};

export default Keys;
