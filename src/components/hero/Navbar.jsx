import React from 'react';
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
    return (
        <div className='w-full h-20 flex items-center justify-between'>
            <img className='ml-28' src={Logo} alt="logo"/>
            <button className='w-36 py-2.5 px-3 mr-28 rounded-md bg-blue-600 text-white text-sm tracking-wider'>Get Early Access</button>
        </div>
    )
}

export default Navbar