import React from 'react';
import LogoDivider from "../../assets/Logo Divider.png";

const Footer = () => {
  return (
    <div className='bg-neutral-900 text-white px-28 pb-10'>
        <img src={LogoDivider} alt="logodivider" />
        <div className='flex justify-between items-center mt-6 text-sm font-light tracking-wide'>
            <span>© RegiM 2022. Made with love by <strong>Landify</strong></span>
            <span>For further details, drop a mail to <strong>hello@landify.design</strong></span>
        </div>
    </div>
  )
}

export default Footer