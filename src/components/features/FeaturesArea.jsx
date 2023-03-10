import React from 'react';
import Icon01 from "../../assets/Icon=01.svg";
import Icon02 from "../../assets/Icon=02.svg";
import Icon03 from "../../assets/Icon=03.svg";
import Icon04 from "../../assets/Icon=04.svg";
import Icon05 from "../../assets/Icon=05.svg";
import Icon06 from "../../assets/Icon=06.svg";

const FeaturesArea = () => {
    const featureItems = [
        {
            title:"Event Metrics",
            img:Icon01,
            describtion:"Track your ticket sales, attendees count and more with much ease."
        },
        {
            title:"Registration & Ticketing",
            img:Icon02,
            describtion:"Manage your Event registrations and ticket sales easier and receive payments instantly."
        },
        {
            title:"Branded Badges",
            img:Icon03,
            describtion:"Create your custom branded badges for your events and get them printed."
        },
        {
            title:"Oragniser App",
            img:Icon04,
            describtion:"Manage your events at the palm of your hand with our Oragniser App."
        },
        {
            title:"Attendee Engagement",
            img:Icon05,
            describtion:"Engage with your attendees via email, surveys and much more."
        },
        {
            title:"Add to Calendar",
            img:Icon06,
            describtion:"Effortless way to add your events to registered users calendars by 1-click."
        },
    ]
  return (
    <div className='grid sm:grid-rows-3 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-20'>
        {React.Children.toArray(featureItems.map((featureItem)=>(
            <div className='flex flex-col justify-center items-center'>
                <img className='mb-7' src={featureItem.img} alt={featureItem.title} />
                <h4 className='text-2xl font-semibold mb-2'>{featureItem.title}</h4>
                <span className='font-light tracking-wider text-center'>{featureItem.describtion}</span>
            </div>
        )))}
    </div>
  )
}

export default FeaturesArea