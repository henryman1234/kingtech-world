import React, { useState } from "react"
import "./subscribe.scss";

const Subscribe = function () {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState("")
    const [error, setError] = useState(null)

    const handleSubscribe = async function (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)
        setMessage("")

        const formdata = new FormData(e.currentTarget)
        formdata.append("access_key","c24d19bf-2212-4713-a192-14449f77c8ef")

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formdata
            }).then(function(res) {
                return res.json()
            })

            if (res.success) {
                console.log("Success", res)
                setMessage(res.message)
                e.currentTarget?.reset()
            } 
              
        } catch (err: any) {
            console.log("Error")
            setError(err.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="subscribe">
            <div className="subscribeContainer">
                <header>Inscription Formation</header>
                
                <form className="form" onSubmit={handleSubscribe}>
                    <div className="input-box">
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" id="name" placeholder="Ton Nom" />
                    </div>

                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="Ton Email" />
                    </div>

                    <div className="column">
                        <div className="input-box">
                            <label htmlFor="phone">Numéro Telephone</label>
                            <input type="text" name="phone" id="phone" placeholder="Ton Numero" />
                        </div>

                        <div className="input-box">
                            <label htmlFor="training">Formation souhaitée</label>
                            <input type="text" name="training" id="training" />
                        </div>
                    </div>

                    <div className="column">
                        <div className="input-box">
                            <label htmlFor="country">Pays</label>
                            <input type="text" id="country" name="country" placeholder="Votre ville" />
                        </div>

                        <div className="input-box">
                            <label htmlFor="city">Ville de résidence</label>
                            <input type="text" id="city" name="city" placeholder="Votre Ville" />
                        </div>

                    </div>

                    <button type="submit">Soumettre</button>


                </form>
            </div>
        </div>
    )
}


export default Subscribe