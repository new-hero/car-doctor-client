import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleLogin} =useContext(AuthContext)
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                G
            </button>

        </div>
    );
};

export default SocialLogin;