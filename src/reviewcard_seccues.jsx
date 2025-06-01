import React from "react";
import { FaStar } from "react-icons/fa"; 

function ReviewCards() {
    const reviewCard=[" Excellent Experience with growvy.","Excellent Experience with growvy."];
  return (
    <>
      <div className="flex items-center justify-center space-x-8 py-8 bg-gray-50">
        {reviewCard.map((content,index)=>(
            <div className=" gradient-border relative bg-white rounded-lg shadow-md p-6 border-4" key={index}>
          <div className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/4  rounded-full shadow-md p-3 border border-gray-200">
            <div className="w-12 h-12 border-black border-2 rounded-full bg-gray-300 flex items-center justify-center">
              {/* Placeholder for user icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-14 w-14 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-800 font-semibold">
             {content}
            </p>
            <div className="flex mt-2">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400 ml-1" />
              <FaStar className="text-yellow-400 ml-1" />
              <FaStar className="text-yellow-400 ml-1" />
              <FaStar className="text-yellow-400 ml-1" />
            </div>
          </div>
        </div>
        ))}
        
      </div>
      <div className="flex items-center justify-center mt-4 mb-8 space-x-2">
        <div className="w-3 h-3 rounded-full bg-green-200"></div>
        <div className="w-3 h-3 rounded-full bg-green-200"></div>
        <div className="w-4 h-4 rounded-full bg-green-400"></div>
        <div className="w-5 h-5 rounded-full bg-green-500"></div>
        <div className="w-4 h-4 rounded-full bg-green-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-200"></div>
        <div className="w-3 h-3 rounded-full bg-green-200"></div>
        <div className="w-3 h-3 rounded-full bg-green-200"></div>
        <div className="w-3 h-3 rounded-full bg-green-200"></div>
        <div className="w-3 h-3 rounded-full bg-green-200"></div>
      </div>
    </>
  );
}

export default ReviewCards;
