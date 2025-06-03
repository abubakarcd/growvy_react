import React from "react";
import main_pic from "/services1.png";
import main_pic2 from "/services2.png"
import main_pic3 from "/homesec4.png"
import Plans from "./pricing_plans";
import Navbar from "./navbar";
import call from "/homecall1.png";
import Lftimg_RgtTxt from "./lftimg_rgttxt";
import Footer from "./footer";

const toplans = [
    {
  top_content: {
    img: main_pic ,
    p: "Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!",
    h2: "Recruitment Solution",
  },
  plans_content: [
    {
      title: "Basic CV Service",
      p: "Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.",
      priceHeading: "Service Cost:",
      price: "Price 30$ (9797 PKR) Discount 20$ (6500 PKR) Monthly",
      benefitsHeading: "Benefits:",
      benefits: [
        "Companies can access the database with monthly 200 Searches",
        "Manage Filters Like Skills, Cities, Experience etc",
        "Live chat experts help",
      ],
    },
    {
      title: "Lead Generating",
      p: "Companies will directly get qualifying responses in their chat to schedule interviews at their own place and our service charges will apply on the candidate's approach.",
      priceHeading: "Service Cost:",
      price: "Price 50$ (6996 PKR) (50% will apply per 20 Candidates)",
      benefitsHeading: "Benefits:",
      benefits: [
        "Companies Can create a job post on Growxy",
        "Manage Filters Like Skills, Cities, Experience etc",
        "Guide our Team to shortlist best candidates",
        "Live chat experts help",
      ],
    },
    {
      title: "Recruitment Service",
      p: "Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.",
      priceHeading: "Service Cost:",
      price:
        "Price 40% of first Salary (For First Candidate) (Can switch package after above subscription)",
      benefitsHeading: "Benefits:",
      benefits: [
        "Filters can create job post",
        "Filters Like Skills, Cities, Exp etc",
        "Client Screening interviews",
        "Whatsapp group with Team",
        "Complete A-Z hiring solution",
      ],
    },
  ],
},
{
  top_content: {
    img:  main_pic2 ,
    p: "Boost your online store with our E-commerce Plans - affordable pricing crafted to scale your business effortlessly!",
    h2: "E-commerce Solutions",
  },
  plans_content: [
    {
      title: "Basic CV Service",
      p: "Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.",
      priceHeading: "Service Cost:",
      price: "Price 30$ (9797 PKR) Discount 20$ (6500 PKR) Monthly",
      benefitsHeading: "Benefits:",
      benefits: [
        "Companies can access the database with monthly 200 Searches",
        "Manage Filters Like Skills, Cities, Experience etc",
        "Live chat experts help",
      ],
    },
    {
      title: "Lead Generating",
      p: "Companies will directly get qualifying responses in their chat to schedule interviews at their own place and our service charges will apply on the candidate's approach.",
      priceHeading: "Service Cost:",
      price: "Price 50$ (6996 PKR) (50% will apply per 20 Candidates)",
      benefitsHeading: "Benefits:",
      benefits: [
        "Companies Can create a job post on Growxy",
        "Manage Filters Like Skills, Cities, Experience etc",
        "Guide our Team to shortlist best candidates",
        "Live chat experts help",
      ],
    },
    {
      title: "Recruitment Service",
      p: "Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.",
      priceHeading: "Service Cost:",
      price:
        "Price 40% of first Salary (For First Candidate) (Can switch package after above subscription)",
      benefitsHeading: "Benefits:",
      benefits: [
        "Filters can create job post",
        "Filters Like Skills, Cities, Exp etc",
        "Client Screening interviews",
        "Whatsapp group with Team",
        "Complete A-Z hiring solution",
      ],
    },
  ],
},{
  top_content: {
    img:  main_pic3 ,
    p: "Boost your online store with our E-commerce Plans - affordable pricing crafted to scale your business effortlessly.",
    h2: "Business Solutions",
  },
  plans_content: [
    {
      title: "Basic CV Service",
      p: "Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.",
      priceHeading: "Service Cost:",
      price: "Price 30$ (9797 PKR) Discount 20$ (6500 PKR) Monthly",
      benefitsHeading: "Benefits:",
      benefits: [
        "Companies can access the database with monthly 200 Searches",
        "Manage Filters Like Skills, Cities, Experience etc",
        "Live chat experts help",
      ],
    },
    {
      title: "Lead Generating",
      p: "Companies will directly get qualifying responses in their chat to schedule interviews at their own place and our service charges will apply on the candidate's approach.",
      priceHeading: "Service Cost:",
      price: "Price 50$ (6996 PKR) (50% will apply per 20 Candidates)",
      benefitsHeading: "Benefits:",
      benefits: [
        "Companies Can create a job post on Growxy",
        "Manage Filters Like Skills, Cities, Experience etc",
        "Guide our Team to shortlist best candidates",
        "Live chat experts help",
      ],
    },
    {
      title: "Recruitment Service",
      p: "Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.",
      priceHeading: "Service Cost:",
      price:
        "Price 40% of first Salary (For First Candidate) (Can switch package after above subscription)",
      benefitsHeading: "Benefits:",
      benefits: [
        "Filters can create job post",
        "Filters Like Skills, Cities, Exp etc",
        "Client Screening interviews",
        "Whatsapp group with Team",
        "Complete A-Z hiring solution",
      ],
    },
  ],
}
];
const tolftimg_rgttxt = {
    button: "Schedule Call Now",
    p: "Join over 10k Users Worldwide. Start Scheduling in less than 1 minute.",
    img: call,
    add:"/"
  };

export default function Pricing() {
  return<>
  <Navbar/>
  <div className="bg-green-200 rounded-b-[20%] py-10 md:py-16">
        <div className="container flex  flex-col  mx-auto justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 md:mb-4">Pricing</h2>
          <p className="text-gray-600 text-xs md:text-lg  mb-2 w-[70%]">
            Discover flexible pricing plans tailored to your needs—start growing with us today!
          </p>
        </div>
      </div>
  <Plans plans={toplans} />
  <Lftimg_RgtTxt content={tolftimg_rgttxt} />
  <Footer/>
  </> ;
}
