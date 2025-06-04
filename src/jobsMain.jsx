export default function JobsMain() {
  const buttons = [
    "Tech",
    "Management",
    "Human Resource",
    "Marketing & Sales",
    "Account & Finance",
    "Customer Service",
  ];
  return (
    <>
      <div className="bg-green-200 rounded-b-[20%] py-10 md:py-16 md:mb-8">
        <div className="container flex  flex-col  mx-auto justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 md:mb-4">
            Jobs
          </h2>
          <p className="text-gray-600 text-xs md:text-lg  mb-2 w-[70%]">
            Join our team and shape the future--expolre exciting opportunities
            today.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-4/5 md:mb-8 mb-4  mx-auto">
        {buttons.map((content, index) => (
          <div
            className="border-black border-2 font-bold text-center p-4 m-2 w-[100%] md:w-[30%] box-border  rounded-[20px]"
            key={index}
          >
            {content}
          </div>
        ))}
      </div>
    </>
  );
}
