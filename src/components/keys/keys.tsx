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
  const keyRef = React.useRef<HTMLDivElement>(null);
  const readMoreRef = React.useRef<HTMLDivElement>(null);

  const [activeKey, setActiveKey] = useState<KeyValuePair>(keys[0]);

  useEffect(() => {
    refs.current[0].current?.classList.add("active");
  }, []);

  const changeKey = (id: number): void => {
    refs.current[activeKey.key].current?.classList.remove("active");
    refs.current[id].current?.classList.add("active");
    setActiveKey(keys[id]);
  };

  const [slideUp, setSlideUp] = React.useState<boolean>(false);

  useEffect(() => {
    refs.current[0].current?.classList.add("active");
  }, []);

  useEffect(() => {
    slideUp === true ? toggleElements(true) : toggleElements(false);
  }, [slideUp]);

  function toggleElements(show: boolean) {
    if (show === true) {
      keyRef.current?.classList.replace("fade-in", "fade-out");
      readMoreRef.current?.classList.replace("fade-in", "fade-out");
    } else {
      keyRef.current?.classList.replace("fade-out", "fade-in");
      readMoreRef.current?.classList.replace("fade-out", "fade-in");
    }
  }

  const readMore = () => {
    setSlideUp(!slideUp);
  };

  return (
    <section id="seven-keys-component" className="keys-component">
      <div className={`${slideUp ? "slide-up" : "slide-down"} image-wrapper`}>
        <div className={`image-container `}>
          <div className="dummy-left"></div>
          <KeyImage slideUp={slideUp} imagePath={activeKey.value.image} />
          <div className="dummy-right"></div>
        </div>
        {/* Text */}
        <article className="key-description">
          <div className="text-section">
            <h1>{activeKey.value.title}</h1>
            <p className="paragraph">{activeKey.value.description}</p>
          </div>
        </article>
        {/* Close button */}
        <div
          onClick={() => readMore()}
          className={`${slideUp ? "fade-in" : "fade-out"} btn-close`}
        >
          <div className="cross">
            <div className="cross-sticks"></div>
          </div>
        </div>
        {/* Bullet list */}
        <div ref={keyRef} className="key-list fade-in">
          <ul>
            {keys.map((value, index) => (
              <li key={index}>
                <span
                  ref={refs.current[index]}
                  id={`key${index}`}
                  onClick={() => changeKey(index)}
                  className="dot"
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Read more btn */}
      <div ref={readMoreRef} className="read-more-wrapper fade-in">
        <div className="read-more-container hexagon" onClick={() => readMore()}>
          <a>Läs mer</a>
        </div>
      </div>
    </section>
  );
};

export default Keys;
