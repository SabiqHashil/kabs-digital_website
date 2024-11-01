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
        quote:
            "LEADUP helped us transition smoothly into a virtual workspace. The team was attentive and delivered exactly what we needed for our project.",
        name: "Abdul Hakeem, CEO",
        title: "LEADUP Make Your Dream",
    },
    {
        quote:
            "The project with FAS PNR Sea Foods was a success! Their collaboration made it easy to streamline our operations, and we couldn't be happier.",
        name: "Faisal Babu, CEO",
        title: "FAS PNR Sea Foods",
    },
    {
        quote:
            "Exceptional service and design! The team perfectly captured our brand with creative posters and efficient forms. Highly recommended for professional and reliable design work.",
        name: "Sayyid Safeer, Family Business",
        title: "BATAL AL JAZEERA TRADE ESTABLISHMENT.",
    },
    {
        quote:
            "Orders and Delivery transformed how we manage our logistics. Their innovative solutions made our project a breeze to execute.",
        name: "Sayyid Jabi",
        title: "Orders and Delivery",
    },
    {
        quote:
            "Our partnership with JAES COMPANY SDN BHD resulted in outstanding outcomes. Their commitment to excellence made a significant difference in our project.",
        name: "Jaishan, CEO",
        title: "JAES COMPANY SDN BHD",
    },
];
