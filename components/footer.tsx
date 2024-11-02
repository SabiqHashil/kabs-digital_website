
"use client";

import Image from "next/image";
import { FloatingDockDemo } from "./demos/desktop-social-icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fafafa] py-10 px-4 md:px-8 border-t">
      <div className="flex flex-col md:flex-row justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-medium mb-2">
            <Image
              src={"/logo/logo.webp"}
              width={10000}
              height={10000}
              className="w-40 sm:w-20 md:w-32"
              alt="KABS Digital Solutions Logo"
            />
          </h1>
          <p className="text-left text-sm md:text-lg lg:text-xl xl:text-xl text-gray-500">
            <a href="tel:+919847847647" className="text-blue-600 hover:underline">
              +91 984 784 7647
            </a>
          </p>
          <p className="text-left text-sm md:text-lg lg:text-xl xl:text-xl text-gray-500">
            <a href="mailto:kabsdigital@gmail.com" className="text-blue-600 hover:underline">
              kabsdigital2020@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 mt-4 md:mt-0">
          <h2 className="text-sm md:text-lg lg:text-xl xl:text-xl font-semibold text-gray-700 md:mb-0">Follow Us:</h2>
          <FloatingDockDemo />
        </div>
      </div>

      <div className="flex justify-center gap-x-4 mt-10 text-sm text-center text-gray-600">
        © {currentYear} KABS Digital Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
