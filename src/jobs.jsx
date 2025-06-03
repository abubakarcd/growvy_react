import Footer from "./footer";
import GrowvyPitchWithImage from "./img_arrow";
import JobsMain from "./jobsMain";
import GrowvyPitch from "./join_communtiy";
import LftTxt_RgtImg from "./lefttxt_rightimg";
import Navbar from "./navbar";
import TopJobs from "./topjobs";
import homesec1 from "/homsec1.png";

export default function Jobs(){
     const growvy_pitch={h2:"Join Growvy's 50M+ Job Seeker Community and Get Hired Faster!",p:"Build your profile, get noticed by top employers and access exclusive job opportunities tailored to your skills. Your next career move starts here!",button:"Sign In",add:"/pricing"};
     const tolfttxt_rgtimg= {h1:"I'm a Job Seeker!",p:"Looking for job according to my skills and requirements.",button:"Jobs",img:homesec1};
    return(
        <>
        <Navbar/>
        <JobsMain/>
        <GrowvyPitch pitch={growvy_pitch} />
        <TopJobs/>
        <GrowvyPitchWithImage/>
        <div className="flex flex-col ml-3 items-center p-3 flex-wrap justify-center md:flex-row md:items-center">
            <LftTxt_RgtImg content={tolfttxt_rgtimg}/>
        </div>
        <Footer/>
        
        </>
    )
}