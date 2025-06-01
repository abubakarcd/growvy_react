
function TopJobs() {
  const jobTitles = [
    "Business Developer",
    "Finance Manager",
    "Human Resource Manager",
    "Software Engineer",
    "Web Developer",
    "Graphic Designer / UI /UX",
    "SEO Expert",
    "Android Developer",
    "Floor Manager",
    "Sales Representative",
    "Data Entry Operator",
    "Delivery Man",
    "Urdu / English Call Center Agent",
    "Morning Shift Jobs for Women",
    "Accountant"
  ];

  return (
    <div className="container mx-auto py-8 md:mt-8 mt-4 ">
      <h2 className="text-3xl font-bold text-center mb-6">Top Jobs</h2>
      <div className="space-y-4">
        {jobTitles.map((job, index) => (
          <div
            key={index}
            className="flex items-center flex-col md:flex-row md:justify-between  rounded-full border border-gray-300 p-2"
          >
            <div className="font-semibold">{job}</div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none cursor-pointer focus:shadow-outline">
              Apply Now
            </button>
          </div>
        ))}
      </div>
   
    </div>
  );
}

export default TopJobs;