import { Link } from "react-router-dom";
import imglogin from "../../assets/ImageLogin/BBS.jpg";
import ImageLogo from "../../assets/ImageLogo/imageLogo.png";

import React from "react";
const RegisterManager = () => {
  return (
    <div className="relativ w-full bg-zinc-900/40 text-white h-[100vh] flex justify-center items-center ">
      <img
        src={ImageLogo}
        alt="Logo"
        className=" max-sm:hidden  w-[200px] z-50  md:w-[600px]  md:h-100vh   object-cover"
      />

      <img
        src={imglogin}
        alt=""
        className=" absolute w-full h-full object-cover mix-blend-color-burn"
      />
      <div className="">
        <div className="bg-gray-900 border border-gray-400 rounded-md px-[50px] shadow-lg  sm:backdrop-blur-lg backdrop-blur-0  bg-opacity-20 relative">
          <h1 className="text-4xl text-white font-bold text-center mb-10">
            Manager Register
          </h1>
          <form action="">
            <div className="flex flex-row  ">
              <div className=" pb-2 relative my-6">
                <input
                  type="text"
                  className="block w-72 py-2 px-1 text-md font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer "
                  placeholder=""
                />
                <label
                  htmlFor=""
                  className="absolute text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  Name :
                </label>
              </div>
              <div className=" pb-2 relative my-6">
                <input
                  type="text"
                  className="block w-72 py-2 px-1 text-md font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer "
                  placeholder=""
                />
                <label
                  htmlFor=""
                  className="absolute text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  | Surname :
                </label>
              </div>
            </div>

            <div className="flex flex-row">
              <div className=" pb-2 relative my-6">
                <input
                  type="email"
                  className="block w-72 py-2 px-1 text-md font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer "
                  placeholder=""
                />
                <label
                  htmlFor=""
                  className="absolute text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  Email :
                </label>
              </div>
              <div className=" pb-2 relative my-6">
                <input
                  type="email"
                  className="block w-72 py-2 px-1 text-md font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer "
                  placeholder=""
                />
                <label
                  htmlFor=""
                  className="absolute text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  | Identification Card :
                </label>
              </div>
            </div>
            <div className="flex flex-row">
              <div className=" pb-2 relative my-6">
                <input
                  type="tel"
                  className=" block w-72 py-2 px-1 text-md font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer "
                  placeholder=""
                />
                <label
                  htmlFor=""
                  className="absolute text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  Phone Number :
                </label>
              </div>
              <div className=" pb-2 relative my-6">
                <input
                  type="tel"
                  className=" block w-72 py-2 px-1 text-md font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer "
                  placeholder=""
                />
                <label
                  htmlFor=""
                  className="absolute text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  | Bank Account Number :
                </label>
              </div>
            </div>

            <div className="relative my-6">
              <input
                type="text"
                className="block w-72 py-2 text-md px-1 font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >
                User Name :
              </label>
            </div>
            <div className="flex flex-row">
              <div className="relative my-6">
                <input
                  type="password"
                  className="block w-72 py-2 text-md px-1 font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer"
                  placeholder=""
                />
                <label
                  htmlFor=""
                  className="absolute text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  Password :
                </label>
              </div>
              <div className="relative my-6">
                <input
                  type="password"
                  className="block w-72 py-2 text-md px-1 font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer"
                  placeholder=""
                />
                <label
                  htmlFor=""
                  className="absolute text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                |  Confirm Password :
                </label>
              </div>
            </div>

            <button
              className="w-full mb-4 text-[18px] font-bold mt-6 rounded-full bg-white text-emerald-800 hover:text-white hover:bg-emerald-400 py-2  duration-200  transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
              type="submit"
            >
              Register
            </button>
            <div>
              <span>
                Already Create an Account?{" "}
                <Link
                  to="/LoginManager"
                  className="font-bold text-emerald-300 hover:text-emerald-400 duration-300 hover:text-sm"
                >
                  Login{" "}
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterManager;
