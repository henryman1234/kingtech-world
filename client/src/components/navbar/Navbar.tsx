import React, { useContext, useEffect, useState,type SetStateAction } from "react";
import "./navbar.scss"
import { Link, NavLink, useNavigate } from "react-router-dom";
import DefaultImage from "../../../public/images/noavatar.jpg"
import { useToggle } from "../../hooks/useToggle";
import { AuthContext, type AuthContextType } from "../../contexts/AuthContext";


interface OTPSetterType {
    setShowOTPModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = function ({setShowOTPModal}: OTPSetterType) {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    // const [toggleDropDown, setToggleDropDown] = useState(false)
    // let isUserLoggedIn = true
    const {currentUser, updateUser} = useContext(AuthContext) as AuthContextType
    const navigate = useNavigate()

    useEffect(function() {
        const menu = document.querySelector("#menu")
        const body = document?.querySelector("body")
        if (isNavbarOpen) {
            menu?.classList.add("clicked")
            body?.classList.add("blur")
        }
    }, [isNavbarOpen])

    const [state, toggle] = useToggle(false)
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log(apiUrl)

    
    const handleLogout = async function () {
        try {
            const res = await fetch( `${apiUrl}/api/auth/logout`, {
                method: "POST",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data)
            // window.localStorage.removeItem("user")
            updateUser(null)
            window.location.reload()
            navigate("/")

        } catch (err) {
            console.error("Something went wrong")
        }
    }

    return (
        <div className="navbar">

            <div className="navbarContainer">
                <div className="logo">
                    {/* <img src={Logo} alt="" /> */}
                    <Link className="link" to="/">KingTech.</Link>
                </div>

                {/* MOBILE MENU */}
                <div className="mobileMenu">
                     {currentUser ? <div className="mobileMenuItem">
                        <img onClick={toggle} src={currentUser?.image || DefaultImage} alt="Logo" className="mobileImage" />
                        
                        {state && <div className="mobileDrop">
                            <Link onClick={toggle} to="/profile">Mon Profile</Link>
                            <Link onClick={toggle} to="/">Blogs</Link>
                            <Link onClick={toggle} to="/">Contacts</Link>
                            <button className="logout" onClick={function () {
                            setShowOTPModal(true)
                        }}>Admin</button>
                            <button className="logout" onClick={handleLogout}>Se déconnecter</button>
                        </div>}
                     </div>: <Link to="/login" className="connect">Se Connecter</Link>}
                </div>

                {/* DESKTOP MENU */}
                <div className="desktopMenu">
                    {currentUser ? <div className="desktopMenuItem">
                        <Link   to="/profile">Mon Profile</Link>
                        <Link  to="/contacts">Contacts</Link>
                        <button className="logout" onClick={handleLogout}>Se déconnecter</button>
                        <button className="logout-secondary" onClick={function () {
                            setShowOTPModal(true)
                        }}>Admin</button>

                        <span style={{fontWeight: "bold", cursor: "pointer"}}>{currentUser?.username}</span>
                        
                        <img  src={currentUser?.image || DefaultImage} alt="Logo" className="desktopImage" />
                    </div> : <div className="not-loggedIn">
                            <Link to= "/contacts" className="contact">Contacts</Link>
                            <Link to="/login" className="connect">Se connecter</Link>
                        </div>}
                </div>
            </div>


        </div>
    )
}

export default Navbar
