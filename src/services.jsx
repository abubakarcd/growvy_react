//Services main page where other components are rendered.
import GrowvyPitch from "./join_communtiy";
import Lftimg_RgtTxt from "./lftimg_rgttxt";
import Navbar from "./navbar";
import Sections_img_txt from "./section_img_txt";
import ServicesMainSection from "./services_main";
import imgsec1 from "/services_1.png";
import imgsec2 from "/services_2.png";
import imgsec3 from "/services_3.png";
import imgsec4 from "/services_4.png";
import call from "/homecall1.png";
import Footer from "./footer";

export default function Services() {
  const growvy_pitch = {
    h2: "Join Over 10K Users Worldwide !",
    p: ``,
    button: "View Pricing",
    add:"/pricing"
  };
  const tosection_img_txt = [
    {
      h3: "Problems in Hiring",
      p: "Companies spend high $$$ budgets on job portals like Indeed and LinkedIn, only to receive low-quality CVs and irrelevant applicants, making hiring slow and inefficient",
      button: "Start Now",
      img: imgsec1,
      add:"/pricing"
    },
    {
      h3: "With Growvy Solution",
      p: "With Growvy, businesses can access a database of active job seekers who have recently joined for job search. Use advanced filters to find the right candidates quickly and at a fraction of the cost—no wasted budget, just quality hires!",
      button: "Start Now",
      img: imgsec2,add:"/pricing"
    },
    {
      h3: "E-commerce Business",
      p: "E-commerce businesses struggle with high marketing costs, inefficient operations, and slow growth, making it difficult to scale and maximize profits.",
      button: "Start Now",
      img: imgsec3,
      add:"/pricing"
    },
    {
      h3: "With Growvy Solution",
      p: "Growvy helps e-commerce businesses streamline operations, manage assets, and implement smart growth strategies to boost sales and efficiency—all at a low cost with proven results.",
      button: "Start Now",
      img: imgsec4,
      add:"/pricing"
    },
  ];
  const tolftimg_rgttxt = {
    button: "Schedule Call Now",
    p: "Join over 10k Users Worldwide. Start Scheduling in less than 1 minute.",
    img: call,
    add:"/jobs"
  };
  return (
    <>
      <Navbar />

      <ServicesMainSection />
      <GrowvyPitch pitch={growvy_pitch} />
      <div className="flex flex-col ml-3 items-center p-3 flex-wrap justify-center md:flex-row md:items-center">
        <Sections_img_txt section_content={tosection_img_txt} />
      </div>
      <Lftimg_RgtTxt content={tolftimg_rgttxt} />
      <Footer />
    </>
  );
}
