import { useState, useEffect, useRef } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
import imageLogo2 from "../../assets/ImageLogo/imageLogo2.png";
import imageProfile from "../../assets/ImageProfile/imageProfile.avif";
import { GiClick } from "react-icons/gi";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [open, setOpen] = useState(false);
  
    let menuRef = useRef();
    let imgRef = useRef();
  
    window.addEventListener('click' , (e)=> {
     if(e.targer === menuRef.current &&  e.targer === imgRef.current ) {
      setOpen(false);
     }
    })
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    const DropdownLinks = [
      {
        id: 1,
        name: "Edite Profile",
        link: "",
      },
      {
        id: 2,
        name: "My Booking",
        link: "",
      },
      {
        id: 3,
        name: "Log Out",
        link: "",
      },
    ];
    const navItems = [
      {
        link: "Home",
        path: "hero",
      },
      {
        link: "Services",
        path: "services",
      },
      {
        link: "About",
        path: "about",
      },
    ];
  return (
    <nav className="w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-1 sticky top-0 z-50">
    <div className="flex justify-center items-center gap-2">
      <img src={imageLogo2} alt="" className="lg:w-12 w-10 uppercase " />
      <h1 className=" text-white md:text-4xl text-2xl font-bold font-ubuntu">
        Sport
        <span className=" text-limegreen italic">Booking</span>
      </h1>
    </div>

    <ul className=" lg:flex justify-center items-center gap-8 hidden">
      {navItems.map(({ link, path }) => (
        <Link
          key={path}
          className=" text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black font-ubuntu text-[15px]"
          to={path}
          spy={true}
          offset={-100}
          smooth={true}
        >
          {link}
        </Link>
      ))}
    </ul>

    <div className="relative items-center ml-8 sm:flex sm:gap-2  ">
      <button onClick={()=> setOpen(!open)} className="block h-10 w-10 rounded-full overflow-hidden border-2 border-limegreen focus:outline-none focus:border-white ">
        <img
          ref={imgRef}
          src={imageProfile}
          alt=""
          className="h-full w-full object-cover"
        />
      </button>
      <span className="hidden lg:inline lg:text-white">Thaksin</span>

      {open && (
        <div ref={menuRef} className="bg-white rounded-lg w-[160px] py-3 px-6 lg:mt-[12rem] ml-[-4rem] absolute text-start shadow-xl ">
          {DropdownLinks.map((data) => (
            <div onClick={()=> setOpen(false)} key={data.id}>
              <a
                href={data.link}
                className="font-semibold block rounded-full  px-2 py-2  text-gray-800 hover:bg-limegreen hover:text-white"
              >
                {data.name}
              </a>
            </div>
          ))}
        </div>
      )}

    </div>

    {/* Mobile Menu */}
    <div
      className=" flex justify-center items-center lg:hidden "
      onClick={toggleMenu}
    >
      <div>
        {isMenuOpen ? (
          <FaXmark className=" text-white text-3xl cursor-pointer" />
        ) : (
          <FaBars className=" text-white text-3xl cursor-pointer" />
        )}
      </div>
    </div>
    <div
      className={`${
        isMenuOpen ? "flex" : "hidden"
      } flex w-full h-fit bg-black p-4 absolute top-[72px] left-0`}
      onClick={closeMenu}
    >
      <ul className=" flex flex-col justify-center items-center gap-2 w-full">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black w-full text-center"
            to={path}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>
    </div>
  </nav>
  );
}
