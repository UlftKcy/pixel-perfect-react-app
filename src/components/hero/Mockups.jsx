import React from 'react';
import MockupImg from "../../assets/mockups.svg";

const Mockups = () => {
    return (
        <div className='md:w-[650px] mx-auto md:mx-0 mt-6'>
            <img src={MockupImg} alt="mockups" />
        </div>
    )
}

export default Mockups