import React, { useContext, useState, useEffect } from 'react';
import auth from '../firebase';


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){

    function signup(email,password){
        auth.createUserWithEmailAndPassword(email,password);
    }

    useEffect(() => {
        const unsubscribe = auth.setCurrentUser(user => {
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])

    const [currentUser, setCurrentUser] = useState();

    const value = {
        currentUser,
        signup
    }

    return (

        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

