import "./footer.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import { Facebook, Linkedin, Twitter } from "lucide-react";
const Footer = function () {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="footerFirst">
                    <h2>Faites vous formez chez nous</h2>
                    <Link to="/subscribe">S'inscrire</Link>
                </div>

                <div className="footerSecond">
                    <hr/>
                </div>

                <div className="footerThird">

                    <div className="first">

                        <div className="main">
                            <FontAwesomeIcon className="icon" icon={faLightbulb}/>
                            <h3>kingTech Formation</h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad tempora ducimus beatae culpa laboriosam consequatur, eius, quo eum sint maxime reprehen</p>

                        <div className="socials">
                            <Link to="/">
                                <Facebook className="icon" />
                            </Link>
                            <Link to="/">
                                <Twitter className="icon" />
                            </Link>
                            <Link to="/">
                                <Linkedin className="icon"/>
                            </Link>
                        </div>

                    </div>

                    <div className="second">
                        <div className="second-one">
                            <span>Liens utiles</span>

                            <div className="items">
                                <Link to="/">Design Graphique</Link>
                                <Link to="/">Community Manager </Link>
                                <Link to="/">Developpement Web</Link>
                                <Link to="/">Plombérie</Link>
                                <Link to="/">Developpement d'app</Link>
                                <Link to="/">Comptabilité</Link>
                            </div>
                        </div>

                        <div className="second-two">
                            <span>Compagnies</span>
                            <div className="items">
                                <Link to="/">KingTech Formation</Link>
                                <Link to="/">KingTech Design</Link>
                                <Link to="/">KingTech Voyages</Link>
                                <Link to="/">KingTech Voyages</Link>
                                <Link to="/">KingTech Voyages</Link>
                                <Link to="/">Marina Cyber</Link>
                            </div>
                        </div>

                        <div className="second-three">
                            <span>Contacts</span>

                            <div className="items">
                                <div className="element">
                                    <FontAwesomeIcon className="icon" icon={faLocationArrow}/>
                                    <p className="detail">Tam-Tam Weekend, Yaaoundé, face banque Atlantique</p>
                                </div>
                                <div className="element">
                                    <FontAwesomeIcon className="icon" icon={faMessage}/>
                                    <p className="detail">kingtech@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footerFourth">
                    <p>&copy; KingTech Formations-Tous drois resevés 2025</p>
                </div>
            </div>
        </div>
    )
}

export default Footer