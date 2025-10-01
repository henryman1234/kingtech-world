import { useState } from "react";
import "./header.scss"
import Image from "../../../public/images/8.jpeg"
import { Images } from "../../utils/data.js";
import { Link } from "react-router-dom";

const Header = function () {

    const [currentImage, setCurrentImage] = useState("")

    const handleDefine = function (index: number) {
        let newImage;
        newImage = Images[index].src
        setCurrentImage(newImage)
    }

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerLeft">
                    <div className="headerLeftChild">
                        <h1 className="bigText">Bienvenue chez <span>KingTech Formation</span></h1>
                        <p className="headerDesc">KingTech Formation est un centre de formation professionnelle agrée par le Minsitère de l'Emploi et de la formation Professionnelle et l'Etat du Cameroun.
                        </p>

                        <div className="buttonContainer">
                            <Link to="/subscribe" className="primary">Commencez</Link>
                            <Link to="/trainings" className="secondary">Les Formations</Link>
                        </div>
                        <div className="headerStats">
                            <div className="statItem">
                                <h2>10K</h2>
                                <p>Formations</p>
                            </div>
                            <div className="statItem">
                                <h2>3K</h2>
                                <p>Entreprises partenaires</p>
                            </div>
                            <div className="statItem">
                                <h2>200+</h2>
                                <p>Etudiants</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="headerRight">
                    <div className="headerRightChild">
                        <img src={currentImage || Image} alt=""  className="imgStart" />
                        <div className="gallery">
                            {Images.map(function(item:{src: string}, index: number){
                                return <img src={item?.src} onClick={function(){
                                    handleDefine(index)
                                }}  key={item?.src} alt="" />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header