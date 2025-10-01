import React, { useContext, useEffect, useRef, useState} from "react";
import "./otpModal.scss";
import { Navigate, useNavigate } from "react-router-dom";
import {LucideCross} from "lucide-react"
import { AuthContext, type AuthContextType } from "../../contexts/AuthContext";
import Login from "../../pages/login/Login";



const OTPModal = function ({setShowOTPModal}: {setShowOTPModal: React.Dispatch<React.SetStateAction<boolean>>}) {

    console.log(setShowOTPModal)

    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [isFetching, setIsFetching] = useState(false)
    const [success, setSuccess] = useState("")
    const {currentUser} = useContext(AuthContext) as AuthContextType


    const [otp, setOTP] = useState("")
    // Une reference à chaque input permettant de gérer le focus
    const inputRefs = useRef<Array<HTMLInputElement | null>>([])
    console.log(inputRefs)
    const otpLength = 5
    console.log(otp, typeof otp)

    // Gère la saisie des chiffres 
    const handleChange = function (e: React.ChangeEvent<HTMLInputElement>, index: number) {

        const value = e.target.value
        if (isNaN(Number(value))) {
            return
        }

        const newOTP = otp.split("") 
        newOTP[index] = value
        setOTP(newOTP.join(""))

        // Passer au champ suivant
        if (value && index < otpLength - 1 ) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    // Gère l'évènement de coller
    const handlePaste = function (e: React.ClipboardEvent<HTMLInputElement>) {
        const pasteData = e.clipboardData.getData("text").slice(0, otpLength)
        if (!isNaN(Number(pasteData))) {
            setOTP(pasteData)
        }
    } 

    // Gère al touche "retour en arrière"
    const handleKeyDown = function (e:React.KeyboardEvent<HTMLInputElement>, index:number) {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    // Création dynamique des inputs
    const inputElements = Array.from({length: otpLength}).map(function(_, index) {
        return (
            <input 
                type="text"
                maxLength={1}
                key={index}
                value={otp[index] || ""}
                onChange={function(e){
                    handleChange(e, index)
                }}
                onKeyDown={function(e){
                    handleKeyDown(e, index)
                }} 
                onPaste={handlePaste}
                ref={function (el){
                    inputRefs.current[index] = el
                }}
             />
        )
    })

    const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError("")
        setIsFetching(true)
        
        try {
            const res = await fetch("https://kingtech-back.onrender.com/api/verify-otp-password", {
                method: "POST",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({otp: otp})
            })
    
            const data = await res.json()
            console.log(data)
    
            if (res.ok) {
                navigate("/admin")
                setSuccess(data.message)
            }

        } catch (err: any) {
            setError(err?.message)
        } finally {
            setIsFetching(false)
        }

    }

    if (!currentUser) {
        return <Navigate to="/login"/>
    }

    
    return (
         <div className="otpModal">
            <div className="otpModalContainer">
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="title">Mot de Passe Admin</h2>
                    <div className="inputContainer">
                        {/* <input type="text" maxLength={1} name="1" />
                        <input type="text" maxLength={1} name="2" />
                        <input type="text" maxLength={1} name="3" />
                        <input type="text" maxLength={1} name="4" />
                        <input type="text" maxLength={1} name="5" /> */}
                        {inputElements}
                    </div>
                    <LucideCross onClick={function() {
                        setShowOTPModal(false)
                    }} className="icon"/>
                    {error && <span style={{color: "red"}}>{error}</span>}
                    {success && <span style={{color: "green"}}>{success}</span>}
                    <button type="submit" className="button">Soumettre</button>
                </form>
            </div>
        </div> 
    )
}

export default OTPModal
