import React from 'react';
import { Link } from 'react-router-dom';
import Group from '../../../assets/icons/Group 2.png';

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/login">Login</Link></li>
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 mt-14 flex  justify-items-start max-w-[1440px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/"><img src={Group} alt="" /></Link>
            </div>
            <div className="navbar-center ml-16 hidden lg:flex">
                <ul className="menu menu-horizontal mr-72 p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end mr-2">
                <a className="btn btn-primary text-white font-bold text-lg w-[220px] h-[64px]">Free Consultation</a>
            </div>
        </div>
    );
};

export default Navbar;