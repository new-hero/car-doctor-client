
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const SignUp = () => {
    const {createUser} =useContext(AuthContext)
    const handleFormSubmit =(event)=>{
        event.preventDefault()
        const form= event.target
        const name= form.name?.value
        const email= form.email?.value
        const password= form.password?.value
        const confirmPassword= form.confirmPassword?.value
        if(password!== confirmPassword){
            return alert("Password Miss match")
        }
        createUser(email, password)
        .then(result=>{
           const user= result?.user
            console.log(user)
        })
        .then(error=>console.log(error))
    }
    
        return (
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="flex ">
                        <div className="text-center w-1/2 p-3">
                          <img src={login} alt="" />
                        </div>
                        <div className="w-1/2 shadow-2xl bg-base-100">
                            <form onSubmit={handleFormSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" 
                                    name="name" 
                                    className="input input-bordered" required />
                                </div>
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
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" 
                                    name="confirmPassword"
                                    placeholder="confirmPassword" 
                                    className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">SignUp</button>
                                </div>
                            </form>
                            <p className='p-4'>Have an account <Link className='btn btn-primary' to='/login'>Login</Link> </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    export default SignUp;