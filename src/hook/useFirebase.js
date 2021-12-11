import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import initializeAuthentication from './../Firebase/firebase.init';


initializeAuthentication();
const useFirebase = () => {


    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoole = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);


            })
            .catch(error => {
                setError(error.message)
            })
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }






    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user);
                setUser(user);



            }
        })
    }, [auth])

    return {
        user,
        error,
        email,
        password,
        isLogin,
        signInUsingGoole,


        toggleLogin,
        logOut
    }

}
export default useFirebase;