// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import { createContext } from "react";
// import app from "../../Firebase/firebase.config";

// export const AuthContextRecap = createContext()
// const auth = getAuth(app)
// const AuthProviderRecap = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const createUser=(email, password)=>{
//         return createUserWithEmailAndPassword(auth, email, password)
//     }
//     const loginUser=(email, password)=>{
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser)
//             setLoading(false)
//         })
//         return () => {
//            return unSubscribe()
//         };
//     }, []);

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         loginUser,
//     }
//     return (
//         <AuthContextRecap.Provider value={authInfo}>
//             {children}
//         </AuthContextRecap.Provider>
//     );
// };

// export default AuthProviderRecap;