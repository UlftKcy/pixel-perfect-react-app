import React from 'react';
import Mockups from "../../assets/mockups.svg";

const LeftSection = () => {
    return (
        <div className='flex items-center'>
            <div className='w-[600px] h-80 ml-28 mt-12'>
                <p className='text-[64px] tracking-tight leading-tight font-semibold text-neutral-900'>Event Registration Reimagined</p>
                <p className='text-lg font-light mb-8 mt-4'>
                    Manage your event registrations hassle free and without any <br /> dependency with the technical team. Isn’t it sounds amazing?
                </p>
                <button className='w-40 p-3 rounded-md bg-blue-600 text-white text-md tracking-wider mt-1'>Get Early Access</button>
            </div>
            <div className='w-[650px] h-[39rem] mt-6'>
                <img src={Mockups} alt="mockups"/>
            </div>
        </div>
    )
}

export default LeftSection