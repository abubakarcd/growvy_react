import React from "react";

import Navbar from "./navbar";
import Hero from "./hero";
import Sections_img_txt from "./section_img_txt";

function Home(){
    return(<>
    <Navbar/>
    <section id="home" className="flex flex-col ml-3 items-center p-3 flex-wrap justify-center md:flex-row md:items-center">
    <Hero/>
    <Sections_img_txt/>
    </section>
     </>
    )
}
export default Home;