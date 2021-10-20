import initializeAuthentication from "../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState();
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
        logOut
    }
}
export default useFirebase;