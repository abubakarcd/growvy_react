import homesec1 from "/public/homsec1.png";

function Sections_img_txt(){
   return(
    <>
    <div className="seeker-card flex flex-col items-center justify-center gap-5 p-8 bg-white rounded-md shadow-md mb-5 ml-1 text-start md:flex-row md:justify-between md:text-left">
        <div className="seeker-text text-center md:text-left md:flex-1">
          <h3 className="text-2xl mb-2 text-gray-800 font-bold md:text-4xl">I'm a Job Seeker!</h3>
          <p className="text-lg text-gray-600 mb-5 md:text-xl">Looking for job according to my skills and requirements.</p>
          <button className="seeker-button startbtn bg-green-500 text-white py-2 px-5 rounded-full cursor-pointer text-xl md:text-3xl">Jobs</button>
        </div>
        <div className="seeker-image flex-1 text-center w-full h-60 md:h-64">
          <img src={homesec1} alt="Job Seeker Illustration" className="object-contain h-full max-w-full" />
        </div>
      </div>

      <div className="employer-card flex flex-col items-center justify-center gap-5 p-8 bg-white rounded-md shadow-md mb-5 ml-1 text-start md:flex-row md:justify-between md:text-left">
        <div className="employer-image flex-1 text-center w-full h-60 md:h-64">
          <img src="/public/homesec2.png" alt="Employer Illustration" className="object-contain h-full max-w-full" />
        </div>
        <div className="employer-text text-center md:text-left md:flex-1">
          <h3 className="text-2xl mb-2 text-gray-800 font-bold md:text-4xl">I'm an Employer!</h3>
          <p className="text-lg text-gray-600 mb-5 md:text-xl">Looking for talented candidates for my company.</p>
          <button className="employer-button startbtn bg-green-500 text-white py-2 px-5 rounded-full cursor-pointer text-xl md:text-3xl">Post a Job</button>
        </div>
      </div>

      <div className="ecommerce-card flex flex-col items-center justify-center gap-5 p-8 bg-white rounded-md shadow-md mb-5 ml-1 text-start md:flex-row md:justify-between md:text-left">
        <div className="ecommerce-text text-center md:text-left md:flex-1">
          <h3 className="text-2xl mb-2 text-gray-800 font-bold md:text-4xl">I'm a E-commerce Store!</h3>
          <p className="text-lg text-gray-600 mb-5 md:text-xl">Looking for potential sales data for sales campaign.</p>
          <button className="ecommerce-button startbtn bg-green-500 text-white py-2 px-5 rounded-full cursor-pointer text-xl md:text-3xl">Sales Data</button>
        </div>
        <div className="ecommerce-image flex-1 text-center w-full h-60 md:h-64">
          <img src="/public/homesec3.png" alt="E-commerce Illustration" className="object-contain h-full max-w-full" />
        </div>
      </div>

      <div className="business-card flex flex-col items-center justify-center gap-5 p-8 bg-white rounded-md shadow-md mb-5 ml-1 text-start md:flex-row md:justify-between md:text-left">
        <div className="business-image flex-1 text-center w-full h-60 md:h-64">
          <img src="/public/homesec4.png" alt="Business Illustration" className="object-contain h-full max-w-full" />
        </div>
        <div className="business-text text-center md:text-left md:flex-1">
          <h3 className="text-2xl mb-2 text-gray-800 font-bold md:text-4xl">I'm Business!</h3>
          <p className="text-lg text-gray-600 mb-5 md:text-xl">Looking for CRM or Data resources to boost my business.</p>
          <button className="business-button startbtn bg-green-500 text-white py-2 px-5 rounded-full cursor-pointer text-xl md:text-3xl">Business Plans</button>
        </div>
      </div>
    </>
   )
}
export default Sections_img_txt;