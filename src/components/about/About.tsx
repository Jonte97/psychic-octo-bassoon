import profile from "../../assets/img/profile.jpg";

const About: React.FC = () => {
    return (
        <section id="about-component" className="about-component">
            <div className="profile">
                <img src={profile} alt="profile" />
            </div>
            <div className="right-section">
                <article className="about-article">
                    <div className="text-section">
                        <h1>Lorem ipsum</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque odio porro praesentium atque
                            delectus, sapiente tempora quae ipsa tempore?
                            Dolorem, aut. Nam ad quidem voluptatum, quos commodi
                            repellendus porro vel?
                        </p>
                    </div>
                        <div className="slide-in">
                            <div className="theme-section">
                                <h3 className="dance-script-headline title">
                                    Bakgrund
                                </h3>
                            </div>
                            <div className="text-section">
                                <h1>Lorem ipsum</h1>
                                <p>
                                    {" "}
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Atque eaque aut dolorum
                                    nulla blanditiis libero autem eius
                                    consequuntur? Veritatis nisi unde, odit
                                    perspiciatis eos tempore debitis. Nihil
                                    doloremque voluptate vitae!
                                </p>
                                <ul>
                                    <li>lorem</li>
                                    <li>Ipsum</li>
                                    <li>Dolorem</li>
                                </ul>
                            </div>
                            <div className="theme-section">
                                <h3 className="dance-script-headline title">
                                    Övrigt
                                </h3>
                            </div>
                            <div className="text-section">
                                <h1>Lorem ipsum</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eveniet natus
                                    necessitatibus totam dicta omnis numquam,
                                    ducimus saepe. Repellendus cupiditate
                                    perspiciatis autem, reprehenderit dolorum,
                                    fugit officiis officia atque quibusdam,
                                    soluta nemo.
                                </p>
                                <p className="quote">
                                    "Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Cum eum consequuntur
                                    debitis neque non perspiciatis, officia
                                    placeat?"
                                </p>
                                <ol>
                                    <li>steg 1</li>
                                    <li>steg 2</li>
                                    <li>steg 3</li>
                                    <li>steg 4 success</li>
                                </ol>
                            </div>
                        </div>
                </article>
            </div>
        </section>
    );
};

export default About;
