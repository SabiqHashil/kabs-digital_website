"use client";


import ShowcaseNavbar from "@/components/showcase-navbar";
import { TextGenerateEffectDemo } from "@/components/demos/TextGenerateEffect";
import Footer from "@/components/footer";

const AboutUs = () => {

    return (
        <div className="
    flex flex-col  w-full  
     overflow-clip inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
    
    ">
            <ShowcaseNavbar />
            <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
                <div className="md:w-full mb-14">
                    <h1 className="text-4xl font-semibold pt-10">
                        About <span className="text-blue-600 font-bold">Us</span>
                    </h1>
                    <TextGenerateEffectDemo />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
