import React, { useState } from "react";
import profile from "../../assets/img/profile.jpg";

const About: React.FC = () => {
    const [showmore, setShowmore] = useState<boolean>(false);

    const showText = (): string => {
        return showmore ? "Visa mindre" : "Visa mer..";
    };

    return (
        <section className="about-component">
            <div className="left-section">
                <h1 className="dance-script-headline">Om mig</h1>
            </div>
            <div className="profile">
                <img src={profile} alt="profile" />
            </div>
            <div className="right-section">
                <article className="about-article">
                    <h1>Lorem ipsum</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Doloremque odio porro praesentium atque delectus,
                        sapiente tempora quae ipsa tempore? Dolorem, aut. Nam ad
                        quidem voluptatum, quos commodi repellendus porro vel?
                    </p>
                    <h1>Lorem ipsum</h1>
                    <p>
                        {" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque eaque aut dolorum nulla blanditiis libero
                        autem eius consequuntur? Veritatis nisi unde, odit
                        perspiciatis eos tempore debitis. Nihil doloremque
                        voluptate vitae!
                    </p>
                    <ul>
                        <li>lorem</li>
                        <li>Ipsum</li>
                        <li>Dolorem</li>
                    </ul>
                    {showmore === true && (
                        <div className="slide-in">
                            <h1>Lorem ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eveniet natus necessitatibus
                                totam dicta omnis numquam, ducimus saepe.
                                Repellendus cupiditate perspiciatis autem,
                                reprehenderit dolorum, fugit officiis officia
                                atque quibusdam, soluta nemo.
                            </p>
                            <p className="quote">
                                "Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Cum eum consequuntur debitis
                                neque non perspiciatis, officia placeat?"
                            </p>
                            <ol>
                                <li>steg 1</li>
                                <li>steg 2</li>
                                <li>steg 3</li>
                                <li>steg 4 success</li>
                            </ol>
                        </div>
                    )}
                    <span
                        onClick={() => {
                            setShowmore(!showmore);
                        }}
                    >
                        {showText()}
                    </span>
                </article>
            </div>
        </section>
    );
};

export default About;
