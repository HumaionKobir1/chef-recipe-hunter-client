import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true);

const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}
const logOut = () => {
    setLoading(true)
    return signOut(auth)
}

const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
}

useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('auth state change', currentUser)
        setUser(currentUser);
        setLoading(false);
    });
    return () => {
        unsubscribe();
    }
}, [])

// const profileUpdate = (name, photoUrl) => {
//     return updateProfile(auth.currentUser, {
//         displayName: name,
//         photoUrl: photoUrl,
        
//     })
//     setUser(updateProfile);
// }

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        loading
    }
    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;