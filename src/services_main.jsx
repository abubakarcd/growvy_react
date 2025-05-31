import React from "react";
import homesec4 from "/homesec4.png";
import img1 from "/services1.png"
import img2 from "/services2.png"
const ServicesMainSection = () => {
    const sections=[
        {img:img1,h3:"Hiring",p:"Access a vast talent pool to hire the right candidates quickly and affordably."},
        {img:img2,h3:"E-commerce",p:"Drive expansion with targeted strategies and market-driven solutions."},{img:homesec4,h3:"Business",p:"Optimize and manage business resources with data-backed insights"}]
  return (
    <>
      <div className="bg-green-200 rounded-b-[40%] py-16">
        <div className="container flex  flex-col  mx-auto justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Services</h2>
          <p className="text-gray-600 text-xs md:text-lg  mb-2 w-[70%]">
            At Growvy, we provide innovative, cost-effective solutions to help
            businesses and professionals thrive.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sections.map((content,index)=>(
                <div className=" rounded-lg overflow-hidden relative" key={index}>
            <div className="relative rounded-lg h-30 -mb-[1px]">
              {" "}
              <img
                src={content.img}
                alt="Hiring"
                className="absolute top-23 left-1/2 -translate-y-1/2 -translate-x-1/2 h-full w-auto object-contain"
              />
            </div>

            <div className="border-2 border-black p-6 pt-8 rounded-lg">
              {" "}
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {content.h3}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {content.p}
              </p>
            </div>

            <div className="mt-4 text-center">
              <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                Plans
              </button>
            </div>
          </div>
            ))}
          
        </div>
      </div>
    </>
  );
};

export default ServicesMainSection;
