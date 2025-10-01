import  { useEffect, useState } from "react";


function Students () {

    interface UserType  {
        username: string,
        image?: string,
        email: string,
        password: string
    }

    const [users, setUsers] = useState([])

    useEffect(function () {
        
        const getUsers = async function () {
            fetch("http://localhost:8800/api/users", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    // "Access-Control-Allow-origin": true
                }
            }).then(function(r) {
                return r.json()
            }).then(function(data){
                setUsers(data)
            }).catch(function(err){
                console.log(err)
            })
        }

        getUsers()

    }, [])

    console.log(users)


    return (
        <div>
            {users.map(function(user: UserType){
                return <div>
                    <h2>{user?.username}</h2>
                    <h4>{user?.email}</h4>
                </div>
            })}
        </div>

        // <div className="container">
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th>Nom</th>
        //                 <th>Matricule</th>
        //                 <th>Statut</th>
        //                 <th>Thème</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //                 {/* <td></td> */}
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
    )
}

export default Students