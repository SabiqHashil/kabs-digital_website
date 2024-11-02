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
        "quote": "The mobile app brought remarkable improvements to our fisheries management! It simplified driver coordination and box calculations across markets, making our operations smoother and more efficient.",
        "name": "Faisal Babu, CEO",
        "title": "FAS PNR Sea Foods"
    },
    {
        "quote":
            "Exceptional service and design! The team perfectly captured our brand with creative posters and efficient forms. Highly recommended for professional and reliable design work.",
        "name": "Sayyid Safeer, Director",
        "title": "BATAL AL JAZEERA TRADE ESTABLISHMENT.",
    },
    {
        "quote": "This mobile app has revolutionized how we handle orders and deliveries in our fruits and vegetables business. It’s made customer order management and tracking supply status effortless, boosting our efficiency tremendously.",
        "name": "Sayyid Jabi",
        "title": "Orders and Delivery"
    },
    {
        "quote": "The team delivered outstanding web and mobile applications for us! Their expertise and dedication made the process smooth, and we’re extremely satisfied with the results.",
        "name": "Hussain",
        "title": "ASAS Laptop Service"
    },
    {
        "quote": "The website has been invaluable for our sales and service operations in AC, refrigeration, and HVAC. It has streamlined our customer interactions and elevated our online presence, making a real difference to our business.",
        "name": "Jaishan, CEO",
        "title": "JAES COMPANY SDN BHD"
    }
];
