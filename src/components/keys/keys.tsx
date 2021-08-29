import React, { useEffect, useRef, useState } from "react";
import { keys } from "../../assets/content/keys";
import { MdClose } from "react-icons/md";

import { KeyValuePair } from "../../domain/model/KeyValuePair.model";

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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("image-animation");
                }
            });
        });
        const imageElement = document.querySelector(".image-container");
        if (imageElement) {
            observer.observe(imageElement);
        }
    }, []);
    useEffect(() => {
        document
            .querySelector(".image-container")
            ?.classList.add("image-animation");
    }, [activeKey]);

    const changeKey = (id: number): void => {
        document
            .querySelector(".image-container")
            ?.classList.remove("image-animation");
        refs.current[activeKey.key].current?.classList.remove("active");
        refs.current[id].current?.classList.add("active");
        setActiveKey(keys[id]);
    };

    const [slideUp, setSlideUp] = React.useState<boolean>(false);

    const readMore = () => {
        setSlideUp(!slideUp);
    };

    return (
        <section className="keys-component">
            <div className="key">
                <div className={`key-section`}>
                    <div
                        className={`${
                            slideUp ? "slide-up" : "slide-down"
                        } key-wrapper`}
                    >
                        <div
                            onClick={() => readMore()}
                            className={`${
                                slideUp ? "fade-in" : "fade-out"
                            } btn-close`}
                        >
                            <MdClose />
                        </div>
                        <div className="key-content">
                            <h1 className="title dance-script-headline">
                                {activeKey.value.title}
                            </h1>

                            <div
                                className={`${
                                    !slideUp ? "fade-in" : "fade-out"
                                } btn-readmore`}
                            >
                                <span onClick={() => readMore()}>Läs mer</span>
                            </div>
                        </div>
                        <div className="image-container">
                            <img
                                alt="keyImage"
                                className={`image`}
                                src={activeKey?.value.image}
                            ></img>
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
                    <article className="key-description">
                        <h1>{activeKey.value.title}</h1>
                        <p>{activeKey.value.description}</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Keys;
