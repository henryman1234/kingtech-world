import  { useState} from "react";
import "./register.scss"
import {Link, useNavigate} from "react-router-dom"


const Register = function () {

    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const apiUrl = import.meta.env.VITE_API_URL;



    const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const username = String(formData.get("username"))?.trim()
        const matricule = String(formData.get("matricule"))?.trim()
        const email = String(formData.get("email"))?.trim()
        const password = String(formData.get("password"))?.trim()
        const training = String(formData.get("training"))?.trim()
        setError("")
        setIsLoading(true)

        console.log(apiUrl)
    

        try {
            const res = await fetch(`${apiUrl}/api/auth/register` , {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({username, matricule, email,training, password}),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            })
            const data = await res.json()
            console.log(data)
            navigate("/login")
        } catch (err: any) {
            console.log(err)
            setError(err.message)
        } finally  {
            setIsLoading(false)
        }

    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <div className="loginContainer">
                <h1 className="loginTitle">Inscription</h1>
                {error && <span>{error}</span>}
                <div className="loginForm">
                    <div className="item">
                        <label htmlFor="username">Nom</label>
                        <input type="text" required maxLength={10} placeholder="Ton Nom" name="username" id="username" />
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input type="text" required placeholder="Ton Email" name="email" id="email" />
                    </div>
                    <div className="item">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="text" required placeholder="Mot de passe" name="password" id="password" />
                    </div>

                    <div className="item">
                        <label htmlFor="training">Formation</label>
                        <input type="text" placeholder="Formation souhaité" name="training" id="training" />
                    </div>

                    <div className="item">
                        <button type="submit" >S'inscrire</button>
                        <span>si t'as un déja un compte clique <Link to="/login">Ici</Link></span>
                    </div>
                </div>
            </div>
        </form>
    )
    
}

export default Register
