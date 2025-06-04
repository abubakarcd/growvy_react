//Section where right side is image and left side is text.
import { Link } from "react-router-dom";
export default function LftTxt_RgtImg(props) {
  return (
    <div className="flex flex-col ml-3 items-center p-3 flex-wrap justify-center md:flex-row md:items-center">
      <div className="text-content flex-1 pr-0 min-w-[300px] text-center lg:text-left md:flex md:flex-col md:h-full md:justify-center md:items-center md:pr-4">
        <h1 className="font-bold text-2xl leading-[1.1] m-0 md:text-5xl ">
          {props.content.h1}
        </h1>

        <div className="para1 bg-none  mt-1 mb-2 text-start md:flex md:w-4/5 md:justify-center md:text-left">
          <p className="text-sm   md:text-lg">{props.content.p}</p>
        </div>
        <div className=" flex w-full md:justify-start md:ml-[15%] ">
          <Link to={props.content.add}>
            <button className="startbtn bg-green-500 text-white border-none py-1 px-3 rounded-full font-normal cursor-pointer text-xs transition-transform duration-300 ease-in-out hover:bg-green-700 hover:scale-125 md:py-2 md:px-4 md:font-bold md:text-sm ">
              {props.content.button}
            </button>
          </Link>
        </div>
      </div>
      <div className="text-center p-6 max-w-4xl mx-auto">
        <div className="flex justify-center mt-5">
          <img
            src={props.content.img}
            alt="arrows design"
            className="w-[250px] md:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
