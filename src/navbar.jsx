//This is the navbar of the website which is sticky.
import { Link } from "react-router-dom";

export default function Navbar() {
  const navbarcomponents = [
    { name: "home", path: "/" },
    { name: "jobs", path: "/jobs" },
    { name: "success", path: "/success" },
    { name: "services", path: "/services" },
    { name: "pricing", path: "/pricing" },
  ];

  return (
    <nav className="mx-auto bg-white mt-2 sticky top-0 border w-screen border-black rounded-lg max-w-[100%] p-2 z-10 md:w-lg lg:w-3xl">
      <ul className="list-none flex flex-wrap justify-around m-0 p-0 md:flex-row md:justify-center md:items-center">
        {navbarcomponents.map((item, index) => (
          <li
            className="transition-transform duration-300 ease-in-out hover:scale-125 md:mx-5 md:my-5"
            key={index}
          >
            <Link
              to={item.path}
              className="hover:underline font-normal text-black text-xs hover:text-green-600 md:font-bold md:text-sm"
            >
              {item.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
