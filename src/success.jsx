import Footer from "./footer";
import GrowvyPitchWithImage from "./img_arrow";
import GrowvyPitch from "./join_communtiy";
import Navbar from "./navbar";
import ReviewCards from "./reviewcard_seccues";
import LogoDisplayWithImages from "./succes_imgs_sec";
import logo from "/logo_succes.png";

export default function Success(){
     const growvy_pitch = {
    h2: "Join Over 10K Users Worldwide !",
    p: ``,
    button: "View Pricing",
    add:"/pricing"
  };
  const growvy_pitch2={h2:"Join Growvy's 50M+ Job Seeker Community and Get Hired Faster!",p:"Build your profile, get noticed by top employers and access exclusive job opportunities tailored to your skills. Your next career move starts here!",button:"Sign In",add:"/pricing"};
    return(
        <>
        <Navbar/>
        <div className="bg-green-200 rounded-b-[20%] py-10 md:py-16 md:mb-8">
        <div className="container flex  flex-col  mx-auto justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 md:mb-4">Success</h2>
          <p className="text-gray-600 text-xs md:text-lg  mb-2 w-[70%]">
            "Discover inspiring Success Stories - See how our solutions empower business to thrive !"
          </p>
        </div>
      </div>
      <GrowvyPitch pitch={growvy_pitch} />
      <LogoDisplayWithImages/>
      <img className="h-20 ml-[10px]" src={logo} alt="Logo success"></img>
      <GrowvyPitch pitch={growvy_pitch2} />
      <ReviewCards/>
      <GrowvyPitchWithImage/>
      <Footer/>
        </>
    )
}