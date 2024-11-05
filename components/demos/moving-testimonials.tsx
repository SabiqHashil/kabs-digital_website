"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";


const InfiniteMovingCardsDemo = () => {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

export default InfiniteMovingCardsDemo;


const testimonials = [
   
    {
        "quote": "Invaluable for our sales and service operations in AC, refrigeration, and HVAC. It has streamlined customer interactions and elevated our online presence, making a real difference to our business.",
        "name": "Jaishan, CEO",
        "title": "JAES COMPANY SDN BHD | Brunei"
    },
    {
        "quote": "Remarkable improvements in our fisheries management! The team simplified driver coordination and calculations across markets, making our operations smoother and more efficient.",
        "name": "Faisal Babu, CEO",
        "title": "FAS PNR Sea Foods | India"
    },
    {
        "quote": "Revolutionized how we handle orders and deliveries in our fruits and vegetables business. Customer order management and tracking supply status have become effortless, boosting our efficiency tremendously.",
        "name": "Sayyid Jabi",
        "title": "Orders and Delivery | UAE"
    },
    {
        "quote": "Outstanding results for our business! The team’s expertise and dedication made the process smooth, and we’re extremely satisfied with the outcome.",
        "name": "Hussain",
        "title": "ASAS Laptop Service | India"
    },
    {
        "quote": "Exceptional service and design! The team perfectly captured our brand with creative posters and efficient forms. Highly recommended for professional and reliable design work.",
        "name": "Sayyid Safeer, Director",
        "title": "BATAL AL JAZEERA TRADE ESTABLISHMENT | Saudi Arabia",
    },
   
  
];

