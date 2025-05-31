import Navbar from "./navbar";
import Hero from "./hero";
import GrowvyPitch from "./join_communtiy";
import GrowvyPitchWithImage from "./img_arrow";
import LftTxt_RgtImg from "./lefttxt_rightimg";
import ecommerce_owner from "/homeowner1.png"
import call from "/homecall1.png"
import Lftimg_RgtTxt from "./lftimg_rgttxt";
import Footer from "./footer";

function Home(){
    
    const growvy_pitch={h2:"Join Growvy's 50M+ Job Seeker Community and Get Hired Faster!",p:"Build your profile, get noticed by top employers and access exclusive job opportunities tailored to your skills. Your next career move starts here!",button:"Sign In"}
    const tolfttxt_rgtimg={h1:" E-Commerce Owner?",p:"Optimize your business with smart asset management, growth strategies and cutting-edge solutions to boosts slaes and efficiency with Growvy.",button:"Plans",img:ecommerce_owner}
    const tolftimg_rgttxt={button:"Schedule Call Now",p:"Join over 10k Users Worldwide. Start Scheduling in less than 1 minute.",img:call}
   
    return(<>
   <Navbar/>
    <section id="home" >
    <Hero />
    <GrowvyPitch pitch={growvy_pitch}/>
    <GrowvyPitchWithImage/>
    <LftTxt_RgtImg content={tolfttxt_rgtimg}/>
    <Lftimg_RgtTxt content={tolftimg_rgttxt}/>
    </section>
    <Footer/>
     </>
    )
}
export default Home;