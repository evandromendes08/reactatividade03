import React, { createContext, useState } from 'react'

const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [userLogged, setUserLogged] = useState(false);


    return (
    <AuthContext.Provider value={userLogged}>
        {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };