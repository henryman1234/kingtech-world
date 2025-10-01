import React, { use, useContext, useEffect, useState } from "react";
import "./profileUpdatePage.scss";
import Avatar from "../../../public/images/noavatar.jpg"
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext, type AuthContextType } from "../../contexts/AuthContext";

const ProfileUpdatePage = function () {

    const {currentUser, updateUser} = useContext(AuthContext) as AuthContextType
    const [error, setError] = useState<string | null>(null)
    const [isUpdating, setIsUpdating] = useState(false)

    const navigate = useNavigate()

    const {id} = useParams()
    console.log(id)

    // Type for the data
    type UserDataType =  {
        [key: string]: any
    }

    // Store the data from the API
    const [userData, setUserData] = useState<UserDataType>({})

    // Date from the from the form
    const [formInputs, setFormInputs] = useState<UserDataType>({})

    // Find the current user from the API
    useEffect(function() {
        const fetchUser  = async function () {
            const apiUrl = import.meta.env.VITE_API_URL

            const res = await fetch(`${apiUrl}/api/users/${id}`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept : "application/json; charset=utf-8"
                }
            })
            const data = await res.json()
            setUserData(data?.data)
            setFormInputs(data?.data)
            console.log(data)
        }

        fetchUser()
    }, [])

    // Change the inputs
    const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setFormInputs(function(prev) {
            return ({...prev, [name]: value})
        })
    }

    // Submit the data
    const handleSubmit = async function (e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError("")
        setIsUpdating(true)


        const dataToUpdate = Object.keys(formInputs).reduce(function (acc: Record<string, string> ,  key: string) {
            if (formInputs[key] !== userData[key] && formInputs[key] !== "") {
                acc[key] = formInputs[key]
            }
            return acc
        }, {})

        const apiUrl = import.meta.env.VITE_API_URL


        try {
            const  res = await fetch(`${apiUrl}/api/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json",
                },

                credentials: "include",
                body: JSON.stringify(dataToUpdate)

            })

            if (res.ok) {
                const data = await res.json()
                updateUser(data?.data)
                navigate("/profile")
                console.log(data)
            }
            
        } catch (err: any) {
            console.log(err)
            setError(err.message)
        } finally {
            setIsUpdating(false)
        }
    }


    return (
        <div className="profileUpdatePage">
            <div className="profileUpdateContainer">

                <div className="avatar">
                    <div className="imgContainer">
                        <img src ={ Avatar} className="avatarImg" alt="Image de profil" />
                    </div>
                    <h3 className="avatarName">{currentUser?.username}</h3>
                    <p className="avatarEmail">{currentUser?.email}</p>

                </div>

                <div className="details">

                    <form onSubmit={handleSubmit} >

                        <div className="formTitle">Modifier Vos Infos</div>

                        <div className="formItem">
                            <label htmlFor="username">Nom</label>
                            <input onChange={handleChange}  type="text" id="username" placeholder="" name="username" value={formInputs?.username} />
                        </div>

                        <div className="formItem">
                            <label htmlFor="email">Email</label>
                            <input onChange={handleChange} type="text" id="email" name= "email" placeholder="" value={formInputs?.email} />
                        </div>

                        <div className="formItem">
                            <label htmlFor="password">Mot de passe</label>
                            <input onChange={handleChange} type="password" id="password" name="password" value={formInputs?.password}  />
                        </div>

                        <div className="formItem">
                            <label htmlFor="traning">Formation</label>
                            <input onChange={handleChange} type="text" value={formInputs?.training} id="training" name="training" placeholder="" />
                        </div>

                        <div className="formItem">
                            <button  className="update" type="submit">Sauvegarder</button>
                        </div>

                    </form>
                </div>


            </div>
        </div>
    )
}

export default ProfileUpdatePage
