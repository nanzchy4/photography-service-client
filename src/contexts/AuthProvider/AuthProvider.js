import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser= (email, password) =>{
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email,password) =>{
      return signInWithEmailAndPassword(auth, email, password);
    }

    const signUpWithGoogle = (provider)=>{
      return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth);
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo ={user,
         loading, createUser, signUpWithGoogle,logOut, logIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;