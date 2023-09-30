import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    

    const handleLogOut = () => {
        logOut()
        .then(() => console.log('User Logged out Successful'))
        .catch(err => console.log(err.message))
    }

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <NavLink className="btn btn-ghost normal-case text-xl" to='/'>React Auth</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <span> {user.email} </span>
                }
                <NavLink to='/login' className='btn' onClick={handleLogOut}>{user ? 'LogOut' : 'Login'}</NavLink>
            </div>
        </div>
    );
};

export default Navbar;