import React, { useEffect, useRef, useState } from "react";
import key1 from "../../assets/img/keys-img/key1.jpeg";
import key2 from "../../assets/img/keys-img/key2.jpeg";
import key3 from "../../assets/img/keys-img/key3.jpeg";
import key4 from "../../assets/img/keys-img/key4.jpeg";
import key5 from "../../assets/img/keys-img/key5.jpeg";
interface KeyValuePair {
    key: number;
    value: Key;
}
interface Key {
    title: string;
    image: string;
    active: boolean;
}

const Keys: React.FC = () => {
    const refs = useRef([
        React.createRef<HTMLSpanElement>(),
        React.createRef<HTMLSpanElement>(),
        React.createRef<HTMLSpanElement>(),
        React.createRef<HTMLSpanElement>(),
        React.createRef<HTMLSpanElement>(),
        React.createRef<HTMLSpanElement>(),
    ]);

    const keys = [
        {
            key: 0,
            value: { active: true, image: key1, title: "Prägling" },
        },
        {
            key: 1,
            value: { active: false, image: key2, title: "Relationer" },
        },
        {
            key: 2,
            value: { active: false, image: key3, title: "Tid" },
        },
        {
            key: 3,
            value: { active: false, image: key4, title: "Kroppen" },
        },
        {
            key: 4,
            value: { active: false, image: key5, title: "Närvaro" },
        },
        {
            key: 5,
            value: { active: false, image: "key6", title: "Vision" },
        },
    ] as KeyValuePair[];

    const [activeKey, setActiveKey] = useState<KeyValuePair>(keys[0]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("image-animation");
                }
            });
        });
        const imageElement = document.querySelector(".image");
        if (imageElement) {
            observer.observe(imageElement);
        }
    }, []);
    useEffect(() => {
        document.querySelector(".image")?.classList.add('image-animation');
    }, [activeKey])
    
    const changeKey = (id: number): void => {
        document.querySelector(".image")?.classList.remove('image-animation');
        refs.current[activeKey.key].current?.classList.remove('active');
        refs.current[id].current?.classList.add('active');
        setActiveKey(keys[id]);
    };

    return (
        <section className="keys-component">
            <div className="key">
                <div className="key-section">
                    <div className="key-content">
                        <h1 className="title dance-script-headline">
                            {activeKey.value.title}
                        </h1>
                        <div className="button">
                            <span>Läs mer</span>
                        </div>
                    </div>
                    <img
                        alt="keyImage"
                        className="image"
                        src={activeKey?.value.image}
                    ></img>
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
            </div>
        </section>
    );
};

export default Keys;
