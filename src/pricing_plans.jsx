export default function Plans(props) {
  const plans = props.plans;
  return (
    <>
      {plans.map((plan, index) => {
        return(<div
          className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
          key={index}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center md:space-x-8 mb-10">
              <div className="mx-auto text-center md:mx-0 md:w-1/4">
                <img
                  src={plan.top_content.img}
                  alt="Recruitment Illustration"
                  className="mx-auto w-38 h-32 md:w-32 md:h-32"
                />
              </div>
              <div className="text-center  md:w-3/4">
                <h2 className="text-3xl font-bold text-black">
                  {plan.top_content.h2}
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl">
                  {plan.top_content.p}
                </p>
                <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold mt-4">
                  Plans
                </button>
              </div>
            </div>

            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plan.plans_content.map((plan, idx) => (
                <div
                  key={idx}
                  className=" bg-gradient-to-r from-yellow-400 to-green-500 p-[2px] rounded-xl"
                >
                  <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {plan.title}
                      </h3>
                      <p>{plan.p}</p>
                      <h4 className="text-black font-semibold mb-1">
                        {plan.priceHeading}
                      </h4>
                      <p className=" font-medium mb-3">{plan.price}</p>
                      <h4 className="text-black font-semibold mb-1">
                        {plan.benefitsHeading}
                      </h4>
                      <ul className="text-gray-700 list-disc pl-5 space-y-1">
                        {plan.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <button className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold w-full">
                        Start Today
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>)
        
      })}
    </>
  );
}
