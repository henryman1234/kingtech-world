import "./partners.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Logos from "../../../public/images/all.jpg"
import {  faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const About = function () {
    return (
        <div className="about">
            <div className="aboutContainer">
                <h2 className="aboutTitle">
                    Dans la famille KingTech
                </h2>
                <div className="aboutDetails">
                    <div className="imageContainer">
                        <img src={Logos} alt="" className="aboutImage" />
                    </div>

                    <div className="aboutInfos">
                        <p className="about">A propos de nous</p>
                        <h3 className="aboutInfosTitle">
                            KingTech Formation est une filliale du groupe KingTech
                        </h3>
                        <div className="aboutInfosLast">
                            <p className="desc">Kingtech est un centre de formation professionel proposant plusieurs types de formations avec un agrément reconnues .</p>
                            <div className="list">
                                <li><FontAwesomeIcon className="icon" icon={faCheckCircle}/>une formation de qualité</li>
                                <li><FontAwesomeIcon className="icon" icon={faCheckCircle}/>Des formateurs Qualifiées</li>
                                <li><FontAwesomeIcon className="icon" icon={faCheckCircle}/>Une expertise reconnue</li>
                                <li><FontAwesomeIcon className="icon" icon={faCheckCircle}/>Un cadre de formation adéqaut</li>
                                <li><FontAwesomeIcon className="icon" icon={faCheckCircle}/>un suivi permanent</li>
                                <li><FontAwesomeIcon className="icon" icon={faCheckCircle}/>une Insertion sociale assurée</li>
                                <li><FontAwesomeIcon className="icon" icon={faCheckCircle}/>Stage assuré</li>
                            </div>
                            <button className="lastAbout">S'inscrire</button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default About