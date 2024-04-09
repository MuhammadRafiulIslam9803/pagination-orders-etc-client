import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './FirebaseApp';

export const AuthContext = createContext(app)
const UserContext = ({children}) => {
    const auth =getAuth()
    const [loding ,setLoding] = useState(true)
    const [user ,setUser] =useState({})

    const singUpUser =(email , password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth ,email ,password)
    }
    const logInUser = (email , password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth ,email ,password)
    }
    const logOut =()=>{
        return signOut(auth)
    }



    const authInfo = {
        user,
        singUpUser,
        logInUser,
        logOut,
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth ,currentUser =>{
            setUser(currentUser)
            setLoding(false)
        }) 
        return ()=>{
            unSubscribe()
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;