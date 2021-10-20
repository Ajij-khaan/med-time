import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Shared/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // check if login or not
    const checkedIsLogin = event => {
        setIsLogin(event.target.checked);
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }
    const handleNameChange = event => {
        setName(event.target.value);
    }
    // form handler
    const handleSubmit = event => {
        event.preventDefault();
        if (password.length < 8) {
            setError("Password Must be at least 8 characters long.");
            return;
        }

        isLogin ? processToLogin(email, password) : processToRegister(email, password);
    }
    // register
    const processToRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError("");
                verifyEmail();
                setUserName();
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    // login via email and password
    const processToLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        signInWithEmailAndPassword()
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
                setError(error.code)
            });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name }).then((result) => { });
    };
    // check current user sill logged in or not
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // verify new user by mail
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    };
    // forget /reset password
    const handleResetPass = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
            })
    }
    // logout 
    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }
    //retirn 
    return {
        signInUsingGoogle,
        logOut,
        checkedIsLogin,
        handleSubmit,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleResetPass,
        isLogin,
        user,
        setUser,
        setError,
        email,
        name,
        error
    }
}

export default useFirebase;
