import { useContext, useState } from "react"
import "./home.scss"
import { AuthContext, type AuthContextType } from "../../contexts/AuthContext"
import Header from "../../components/header/Header"
import About from "../../components/featured/Partners"

import OTPModal from "../../components/otpModal/OTPModal"
import Accordion from "../../components/Accordion/Accordion"

const Home = function () {
    const {currentUser} = useContext(AuthContext) as AuthContextType
    console.log(currentUser)
    const [showOTPModal, setShowOTPModal] = useState(false)

    const items = [
        {header: "C'est quand la prochaine rentrée?", content: "La prochaine rentrée debutera en Octobre 2025"},
        {header: "Comment s'inscrire ?", content: "Vous pouvez nous contacter par Eamil ou par Téléphone ou vosu rendre directement dans notre centre situé à Yaoundé Tam-Tam Weekend"},
        {header: "Combien de filières ", content: "Nous disposons de plusieurs , cela depend de ce que vous voulez apprendre , en partant de l'Informatique jusqu'au filières techniques, nosu sommes là pour vous accompagner dans votre formation "},
        {header: "Peut t'on faire les cours du soir ?", content: "Vous pouvez faire les cours du soir, en fonction de votre filière choisie"},
        {header: "Quelle est la procédure d'inscription ?", content: "Contactez nous pour plus d'informations ou rendez-vous sur nos différents réseaux sociaux"},
    ]

    return (
        <div>
           
            <Header  />
            <About/>
            <Accordion items = {items}/>
        </div>
    )
}

export default Home