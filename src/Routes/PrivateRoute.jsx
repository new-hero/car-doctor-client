import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const location= useLocation()

    const { user, loading } = useContext(AuthContext)
    if(loading){
        return <h2>Loading...</h2>
    }
    
    if(user?.email){
        return children
    }



    return <Navigate to='/login' replace state={{from:location}}></Navigate>
};

export default PrivateRoute;