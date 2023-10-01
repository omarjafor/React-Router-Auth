import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const signInUser = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoding(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('observing current user', currentUser)
            setLoding(false);
        });
        return () => {
            unSubscribe();
        }
    } , [])

    const authInfo = { user, loding, createUser, signInUser, googleSignIn, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}