function Sections_img_txt(props) {
  const section_content = props.section_content;
  console.log(section_content);

  return (
    <>
      {section_content.map((content, index) => {
        return index % 2 == 0 ? (//changing the image position condition
          
          <div
            className="seeker-card flex flex-col items-center justify-center gap-5 p-8 bg-white rounded-md shadow-md mb-5 ml-1 text-start md:flex-row md:justify-between md:text-left"
            key={`${content.h3},${index}`}
          >
            <div className="seeker-text text-center md:text-left md:flex-1">
              <h3 className="text-2xl mb-2 text-gray-800 font-bold md:text-4xl">
                {content.h3}
              </h3>
              <p className="text-lg text-gray-600 mb-5 md:text-xl">{content.p}</p>
              <button className="seeker-button startbtn bg-green-500 transition-transform duration-300 ease-in-out hover:bg-green-700 hover:scale-125  text-white py-2 px-5 rounded-full cursor-pointer text-lg md:text-2xl">
                {content.button}
              </button>
            </div>
            <div className="seeker-image flex-1 text-center w-[60%] md:w-full h-40 md:h-64">
              <img
                src={content.img}
                alt="Job Seeker Illustration"
                className="object-contain h-full max-w-full"
              />
            </div>
          </div>
        ) : (
          <div className="employer-card flex flex-col items-center justify-center gap-5 p-8 bg-white rounded-md shadow-md mb-5 ml-1 text-start md:flex-row md:justify-between md:text-left"  key={`${content.h3},${index}`}>
            <div className="employer-image flex-1 text-center w-[60%] md:w-full h-40 md:h-64">
              <img
                src={content.img}
                alt="Employer Illustration"
                className="object-contain h-full max-w-full"
              />
            </div>
            <div className="employer-text text-center md:text-left md:flex-1">
              <h3 className="text-2xl mb-2 text-gray-800 font-bold md:text-4xl">
                {content.h3}
              </h3>
              <p className="text-lg text-gray-600 mb-5 md:text-xl">
                {content.p}
              </p>
              <button className="employer-button startbtn bg-green-500 transition-transform duration-300 ease-in-out hover:bg-green-700 hover:scale-125  text-white py-2 px-5 rounded-full cursor-pointer text-xl md:text-3xl">
                {content.button}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Sections_img_txt;