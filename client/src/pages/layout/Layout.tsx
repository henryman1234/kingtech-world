import { useContext } from "react";
import "./layout.scss"
import {Outlet, Link, useNavigate, Navigate} from "react-router-dom"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { AuthContext, type AuthContextType } from "../../contexts/AuthContext";
import Home from "../home/Home";
import OTPModal from "../../components/otpModal/OTPModal";


const Layout = function () {

    const [showOTPModal, setShowOTPModal] = useState(false)
    
    return(
        <section className="layout">
            {showOTPModal && (
                <OTPModal setShowOTPModal={setShowOTPModal}/>
            )}
            <Navbar setShowOTPModal={setShowOTPModal} />
            <Outlet/>
            <Footer/>
        </section>
    )
}


const RequireAuthLayout = function () {

    const {currentUser} = useContext(AuthContext) as AuthContextType
    const [showOTPModal, setShowOTPModal] = useState(false)



    if (!currentUser) {
        return <Navigate to="/login"/>
        } else {
        return (

            <div className="layout">
                {showOTPModal &&  (
                    <OTPModal setShowOTPModal={setShowOTPModal}/>
                )}
                <Navbar  setShowOTPModal={setShowOTPModal}/>
                <Outlet/>
                <Footer/>
            </div>
        )
    }
}



export {Layout, RequireAuthLayout}