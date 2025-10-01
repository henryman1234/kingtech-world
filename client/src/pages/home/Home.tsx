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
        {header: "C'est quand la prochaine rentrée?", content: " Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024"},
        {header: "Comment s'inscrire ?", content: "Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024"},
        {header: "Combien de filières ", content: "Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024"},
        {header: "Peut t'on faire les cours du soir ?", content: "Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024"},
        {header: "Quelle est la procédure d'inscription ?", content: "Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024Bonjour les gens, je suis Henry Nomo, developpeur web certifiée depuis 2024"},
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