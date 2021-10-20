import initializeAuthentication from "../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";



initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    // const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user)
            })
            .finally(() => setIsLoading(false));
        // .catch((error) => {
        //     setError(error.message);
        // });
    }

    // portion of email authenticaiton
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const fromSignIn = () => {
        setIsLogin(true)
    }

    const fromSignUp = () => {
        setIsLogin(false)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(isLogin);
        isLogin ? processSignIn(email, password) : processSignUp(email, password);
    }


    const processSignIn = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                console.log(user)
            })

    }
    const processSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user)

            })

    }


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));

    }

    //Observe User State Change

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(user)
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,

        handleEmail,
        handlePassword,
        handleSubmit,
        processSignIn,
        processSignUp,
        fromSignIn,
        fromSignUp,
        handleName,
        email,
        password

    }
}
export default useFirebase;