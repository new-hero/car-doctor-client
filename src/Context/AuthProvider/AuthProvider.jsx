import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app)
const gProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleLogin=()=>{
        return signInWithPopup(auth, gProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                fetch('https://car-doctor-server-five-gamma.vercel.app/jwt', {
                    method:"POST",
                    headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({email:user?.email})
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                localStorage.setItem('car-access-token', data.token)
            })
        }else{
            localStorage.removeItem("car-access-token")
        }

            setLoading(false)
        })
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOutUser,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;