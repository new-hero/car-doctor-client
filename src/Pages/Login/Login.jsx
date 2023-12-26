import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email?.value
        const password = form.password?.value

        if (email && password) {

            signInUser(email, password)
                .then(result => {
                    const user = result.user
                    navigate(from)
                })
                .catch(error => console.log(error))

        }


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="flex">
                    <div className="text-center w-1/2 p-3">
                        <img src={login} alt="" />
                    </div>
                    <div className="w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='p-4'>New in car doctor <Link className='btn btn-primary' to='/signUp'>SignUp</Link> </p>
                    <div className="divider">Or</div>
                    <div className='text-center p-4'>
                        <SocialLogin></SocialLogin>                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;