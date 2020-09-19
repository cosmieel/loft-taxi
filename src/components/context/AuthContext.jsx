import React, { useState, createContext } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = (email, password) => {
        if (email !== "valid@email.com" || password !== "correctpassword") {
            return;
        }
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}