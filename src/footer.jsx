import fb from "/fblogo.webp";
import insta from "/insta.png";
import linkdin from "/lin.webp";
import arrow from "/arrow.png"
export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black px-5 py-8 flex flex-col items-center gap-8 w-full relative bottom-0 left-0 shadow-[0_-2px_5px_rgba(0,0,0,0.05)] z-10 md:flex-row md:justify-around md:items-start md:py-10 md:px-8 md:gap-0">
      {/* Left Section */}
      <div className="flex flex-col items-start max-w-[300px]">
        <div className="growvy-logo-info">
          <h2 className="text-3xl font-extrabold mb-2.5">Growvy</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Optimize your business with smart asset management, growth strategies, and cutting-edge solutions to boost sales and efficiency with Growvy!
          </p>
        </div>
        <div className="social-icons flex gap-2.5 mt-5">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" className="w-7 h-7" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="w-7 h-7" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={linkdin} alt="LinkedIn" className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-start">
        <ul className="list-disc pl-5 space-y-2 mb-5 md:mb-8">
          <li><a href="#home" className="text-gray-800 hover:underline">About Us</a></li>
          <li><a href="#" className="text-gray-800 hover:underline">Services</a></li>
          <li><a href="#" className="text-gray-800 hover:underline">Plans & Pricing</a></li>
          <li><a href="#" className="text-gray-800 hover:underline">Business Solutions</a></li>
          <li><a href="#" className="text-gray-800 hover:underline">Success Stories</a></li>
          <li><a href="#" className="text-gray-800 hover:underline">Jobs</a></li>
        </ul>
        <div className="rating text-green-500 text-xl">
          {['★', '★', '★', '★', '☆'].map((star, i) => (
            <span key={i} className="mr-1">{star}</span>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <img src={arrow} alt="Green Arrow Up" className="max-w-[80%] h-auto" />
      </div>
    </footer>
  );
}