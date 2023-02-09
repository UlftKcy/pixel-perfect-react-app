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
    <div className='grid grid-rows-2 grid-cols-3 gap-6'>
        {React.Children.toArray(featureItems.map((featureItem)=>(
            <div className='flex flex-col justify-center items-center'>
                <img src={featureItem.img} alt={featureItem.title} />
                <h6>{featureItem.title}</h6>
                <span className='text-sm'>{featureItem.describtion}</span>
            </div>
        )))}
    </div>
  )
}

export default FeaturesArea