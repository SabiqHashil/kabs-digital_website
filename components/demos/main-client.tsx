import React from 'react';
import Image from 'next/image';
import { IconStarFilled } from '@tabler/icons-react';

const Testimonial = () => {
  // Static testimonial data
  const testimonialData = {
    imageSrc: "/images/main_client.png",
    startYear: 2022,
    text: "they've been amazing to work with. They've helped us grow our business and we couldn't be happier with the results.",
    name: "Abdul Hakeem, CEO",
    title: "LEADUP Make Your Dream | India",
    rating: 5, // Number of stars
  };

  // Calculate the dynamic year count
  const currentYear = new Date().getFullYear();
  const yearsCount = currentYear - testimonialData.startYear;

  return (
    <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
      <Image
        src={testimonialData.imageSrc}
        width={10000}
        height={10000}
        className="md:w-1/3 rounded-lg"
        alt="image"
      />
      <div className="flex flex-col gap-y-5 md:w-1/2">
        <h1 className="text-lg md:text-2xl">
          &quot;We&apos;ve been working with KABS for over {yearsCount} {yearsCount === 1 ? 'year' : 'years'} and {testimonialData.text}&quot;
        </h1>
        <div className="flex items-center gap-x-1">
          {[...Array(testimonialData.rating)].map((_, index) => (
            <IconStarFilled key={index} className="text-4xl text-yellow-500" />
          ))}
        </div>
        <span className="text-xl font-medium">
          {testimonialData.name} <br />
          {testimonialData.title}
        </span>
      </div>
    </main>
  );
};

export default Testimonial;
