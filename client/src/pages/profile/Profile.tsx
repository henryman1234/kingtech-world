import{ useContext, useState } from "react";
import "./profile.scss";
import Avatar from "../../../public/images/noavatar.jpg"
import { Link, useParams } from "react-router-dom";
import { AuthContext, type AuthContextType } from "../../contexts/AuthContext";

const Profile = function () {

    const {currentUser} = useContext(AuthContext) as AuthContextType

    const [details , setDetails] = useState({
        username: "",
        email: "",
        password: "",
        training: "",
    })

    const handleChange = function (e: React.ChangeEvent<HTMLInputElement> ) {
        const {name, value} = e?.target
        setDetails(function (prev){
            return  {...prev, [name]: value }
        })
    }


    return (
        <div className="profile">
            <div className="profileContainer">

                <div className="avatar">
                    <div className="imgContainer">
                        <img src ={ Avatar} className="avatarImg" alt="Image de profil" />
                    </div>
                    <h3 className="avatarName">{currentUser?.username}</h3>
                    <p className="avatarEmail">{currentUser?.email}</p>

                </div>

                <div className="details">

                    <form >
                        <div className="formTitle">Infos Utilisateur</div>

                        <div className="formItem">
                            <label htmlFor="username">Nom</label>
                            <input  type="text" id="username" placeholder="" name="username" defaultValue={currentUser?.username} />
                        </div>

                        <div className="formItem">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name= "email" placeholder="" defaultValue={currentUser?.email} />
                        </div>

                        <div className="formItem">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" id="password" name="password" placeholder="" defaultValue={currentUser?.password} />
                        </div>

                        <div className="formItem">
                            <label htmlFor="traning">Formation</label>
                            <input type="text" defaultValue={currentUser?.training} id="training" name="training" placeholder="" />
                        </div>

                        <div className="formItem">
                            <Link className="update" to={`/profileUpdatePage/${currentUser?._id}`} >Modifier</Link>
                        </div>

                    </form>
                </div>


            </div>
        </div>
    )
}

export default Profile