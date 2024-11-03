import Image from "next/image";
import { FloatingDockDemo } from "./demos/desktop-social-icon";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fafafa] py-10 px-4 md:px-8 border-t">
      <div className="flex flex-col md:flex-row justify-between gap-8 xl:w-4/5 2xl:w-[68%] mx-auto">
        {/* Logo and Contact Section */}
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

        <div className="flex-1 mt-10 md:mt-0">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Company</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/showcase">
                <p className="text-sm text-gray-600 hover:underline">Showcase</p>
              </Link>
            </li>
   <li>
              <Link href="/meeting">
                <p className="text-sm text-gray-600 hover:underline">Meeting</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="text-sm text-gray-600 hover:underline">About Us</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex-1 mt-10 md:mt-0 flex flex-col items-start">
          <h2 className="text-sm md:text-lg lg:text-xl xl:text-xl font-semibold text-gray-700 mb-2">Follow Us:</h2>
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
