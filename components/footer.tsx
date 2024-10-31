import Image from "next/image";
import { FloatingDockDemo } from "./demos/social_icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-row  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <div>
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo.webp"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left text-xl text-gray-500">
            <a href="tel:+919847847647" className="text-blue-600 hover:underline">
              +91 984 784 7647
            </a>
          </p>
          <p className="text-left text-xl text-gray-500">
            <a href="mailto:kabsdigital@gmail.com" className="text-blue-600 hover:underline">
              kabsdigital@gmail.com
            </a>
          </p>
        </div>

        <div className="flex items-center space-x-4">
        <h2 className="text-xl font-semibold text-gray-700">Follow Us:</h2>
          <FloatingDockDemo />
        </div>

      </div>

      <div className="flex md:justify-center gap-x-4 mt-10 text-center text-gray-600">
        © {currentYear} KABS Digital Soltions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
