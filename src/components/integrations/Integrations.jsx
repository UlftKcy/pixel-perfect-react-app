import React from 'react';
import slack from "../../assets/slack.svg";
import quickbooks from "../../assets/quickbooks.svg";
import mailchimp from "../../assets/mailchimp.svg";
import hubshot from "../../assets/hubspot.svg";
import zapier from "../../assets/zapier.svg";
import googleAnalytics from "../../assets/google-analytics.svg";
import marketo from "../../assets/marketo.svg";

const Integrations = () => {
    const logos = [slack, quickbooks, mailchimp, hubshot, zapier, googleAnalytics, marketo];
    return (
        <div className='grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 px-28 pb-40 mt-20'>
            <div className='pl-12 m-auto'>
                <p className='text-6xl tracking-tight leading-tight font-semibold text-neutral-900 mb-6'>Integrate with your <br /> favorite tools</p>
                <span className='font-light text-sm tracking-wide'>Connect RegiM with your most favorite sales and marketing tools</span>
            </div>
            <div className='grid grid-rows-2 grid-cols-4 mx-auto md:flex md:justify-center md:flex-wrap md:mr-6 mt-2'>
                {React.Children.toArray(logos.map((logo) => (
                    <img src={logo} alt="logo" />
                )))}
            </div>
        </div>
    )
};

export default Integrations