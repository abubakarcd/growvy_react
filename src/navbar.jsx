

function Navbar(){
    const navbarcomponents=["home","jobs","success","services","pricing"];

    return(
        <><nav className="mx-auto bg-white mt-2 sticky top-0 border w-screen border-black rounded-lg max-w-70% p-2 z-10 md:w-lg lg:w-3xl">
      <ul className="list-none  flex flex-wrap justify-around m-0 p-0  md:flex-row md:justify-center md:items-center">
        {navbarcomponents.map((components,index)=>(
            <li className="transition-transform  duration-300 ease-in-out hover:scale-125 md:mx-5 md:my-5" key={`${components},${index}`}>
          <a href={`#${components}`} className="hover:underline  font-normal text-black text-xs hover:text-green-600 md:font-bold md:text-sm">{components.toUpperCase()}</a>
        </li>
        ))}
      </ul>
    </nav></>
    )
}

export default Navbar;