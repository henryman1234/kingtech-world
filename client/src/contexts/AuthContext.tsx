import React, { createContext, useEffect, useState } from "react";

type User = {
    username: string,
    _v?:number,
    _id: string,
    email: string,
    password: string,
    image?: string,
    training?: string,
    updatedAt?: string,
    created?: string
}

export type AuthContextType = {
    currentUser: User | null,
    updateUser: (user: User | null) => void
}
export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthContextProvider = function ({children}: {children: React.ReactNode}) {

    const [currentUser, setCurrentUser] = useState<User | null>(function() {
        const storedUser = localStorage.getItem("user")
        return storedUser ? JSON.parse(storedUser) as User :null
    })

    const updateUser = function (data: User | null) {
        setCurrentUser(data)
    }

    useEffect(function() {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])


    return (
        <AuthContext.Provider value={{currentUser, updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}