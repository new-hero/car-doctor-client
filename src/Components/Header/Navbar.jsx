import { Link } from "react-router-dom";
import logo from '../../../src/assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Navbar = () => {
    const {user, loading, logOutUser} =useContext(AuthContext)

    const menu= <>
    <li> <Link to='/'> Home </Link></li>
    <li> <Link to='about'> About </Link></li>
    <li> <Link to='service'> Service </Link></li>
    <li> <Link to='blogs'> Blogs </Link></li>
    {user && <li> <Link to='bookings'> Bookings </Link></li>}
    <li> <Link to='contact'> Contact </Link></li>
    </>
    if (loading) {
        return <p>Loading...</p>
    }

    const handleLogout=()=>{
        logOutUser()
        .then(()=>{  })
        .catch((error)=>{console.log(error)})
    }
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {menu}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className="w-full" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {user? <button onClick={handleLogout}>LogOut</button> :<Link to='/login'>Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;