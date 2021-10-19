import initializeAuthentication from "../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState();
    const [error, setError] = useState();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                setUser(result.user);
                console.log(result.user)

            }).catch((error) => {
                setError(error.message);
            });
    }


    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            setError(error.message)
        });

    }

    //Observe User State Change

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(user)
            }
        });
        return () => unsubscribed;
    }, [])


    return {
        user,
        error,
        logOut,
        signInUsingGoogle
    }
}
export default useFirebase;