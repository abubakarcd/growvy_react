import { Link } from 'react-router-dom';
import Sections_img_txt from "./section_img_txt";
import homesec4 from "/homesec4.png";
import homesec1 from "/homsec1.png";
import homesec2 from "/homesec2.png";
import homesec3 from "/homesec3.png";

function Hero(){
  const tosection_img_txt=[
          {h3:"I'm a Job Seeker!",p:"Looking for job according to my skills and requirements.",button:"Jobs",img:homesec1,add:"/jobs"},
          {h3:"I'm an Employer!",p:"Looking for talented candidates for my company.",button:"Post a Job",img:homesec2,add:"/jobs"},
          {h3:"I'm a E-commerce Store!",p:"Looking for potential sales data for sales campaign.",button:"Sales Data",img:homesec3,add:"/success"},
          {h3:"I'm Business!",p:"Looking for CRM or Data resources to boost my business.",button:"Business Plans",img:homesec4,add:"/pricing"}];
    return(
       <>   
       <div className="flex flex-col ml-3 items-center p-3 flex-wrap justify-center md:flex-row md:items-center">
      <div className="text-content flex-1 pr-0 min-w-[300px] text-center lg:text-left md:flex md:flex-col md:h-full md:justify-center md:items-center md:pr-4">
        <h1 className="font-bold text-2xl leading-[1.1] m-0 md:text-5xl ">
          Max<span className="inline-block align-baseline">imize</span><br />
          <span className="inline-block align-baseline relative border-3 border-double border-green-500 rounded-full transform rotate-[-5deg] h-auto w-auto px-1.5 py-0.5 md:border-5 md:px-2 md:py-1">Business</span> Efficiency
        </h1>
        <h2 className="m-0 md:text-center">
          <span className="block text-green-500 font-bold text-lg text-center w-full md:inline md:text-xl">with <br className="md:hidden" /></span>
          <span className="text-green-500 text-4xl font-bold block text-center w-full md:text-5xl">Growvy</span>
        </h2>
        <div className="para1 bg-none  mt-1 mb-2 text-start md:flex md:w-4/5 md:justify-center md:text-left">
          <p className="text-sm   md:text-lg">Scale your company with tailored strategies, market insights, and expert consulting</p>
        </div>
        <div className=" flex w-full md:justify-start md:ml-[15%] ">
          <Link to="/pricing">
          <button className="startbtn bg-green-500 text-white border-none py-1 px-3 rounded-full font-normal cursor-pointer text-xs transition-transform duration-300 ease-in-out hover:bg-green-700 hover:scale-125 md:py-2 md:px-4 md:font-bold md:text-sm ">Start Today</button></Link>
        </div>
      </div>
      <div className="graphic flex-1 flex flex-col items-center mt-4 bg-[url('/arrow.png')] bg-contain bg-no-repeat bg-center-top bg-center min-h-[100px] ml-0 w-full md:mt-0 md:h-[400px] md:justify-center">
  <div className="logo  text-[9vw] text-black font-thin text-center mt-2 md:text-[13vw]">Growvy</div>
</div>
<div className="growvy-pitch-container bg-white rounded-md w-full text-center flex flex-col justify-center items-center   md:p-5 md:max-w-[95%]">
      <p className="growvy-pitch-quote text-sm leading-relaxed text-gray-700 mb-2 w-4/5 md:text-lg">
        "Growvy is built to streamline hiring, optimize assets, and drive business
        growth. Our mission is to create a tech-driven ecosystem where
        companies hire smarter, manage resources efficiently, and scale
        effortlessly. Whether you're seeking top talent, asset solutions, or business
        expansion, Growvy is your trusted partner in success."
      </p>
    </div>
    <Sections_img_txt section_content={tosection_img_txt}/> 
    </div>
    </>
    )
}
export default Hero;


