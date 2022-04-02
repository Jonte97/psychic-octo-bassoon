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

  useEffect(() => {
    refs.current[0].current?.classList.add("active");
  }, []);

  const changeKey = (id: number): void => {
    refs.current[activeKey.key].current?.classList.remove("active");
    refs.current[id].current?.classList.add("active");
    setActiveKey(keys[id]);
  };

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
        <div className="key-list">
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
      <div className="read-more-wrapper ">
        <div className="read-more-container hexagon" onClick={() => readMore()}>
          <a>Läs mer</a>
        </div>
      </div>
    </section>
  );
};

export default Keys;
