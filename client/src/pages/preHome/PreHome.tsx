import "./preHome.scss";
import {  useNavigate } from "react-router-dom";

const PreHome = function () {

    const navigate = useNavigate()

    const handleStart = function () {
        navigate("/register")
    }

    return (
        <div className="home">
            <div className="homeContainer">
                <div className="homeChild">
                    <h1 className="homeTitle">
                        Bienvenue dans l'univers de la onzième promo
                    </h1>
                    <div className="homeButtons">
                        <button className="register" onClick={handleStart}>
                           Commencez
                        </button>
                    </div>
                </div>

                <div className="homeAuthor">
                    <p>&copy; crée par Henry</p>
                </div>
            </div>
        </div>
    )
}

export default PreHome