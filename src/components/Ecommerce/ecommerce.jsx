import React, { useState } from "react";
import Typewriter from "./Typewriter";
import product1 from "../../assets/IMG_ecommerce/F001.png";
import product2 from "../../assets/IMG_ecommerce/F002.png";
import product3 from "../../assets/IMG_ecommerce/F003.png";
import product4 from "../../assets/IMG_ecommerce/F004.png";
import product5 from "../../assets/IMG_ecommerce/F005.png";
import product6 from "../../assets/IMG_ecommerce/F006.png";

const ImageList = [
  {
    id: 1,
    img: product1,
    title: " Beoplay M5 Bluetooth Speaker",
    price: "$399.00",
  },
  {
    id: 2,
    img: product2,
    title: " Beoplay M5 Bluetooth Speaker",
    price: "$500.00",
  },
  {
    id: 3,
    img: product3,
    title: " Beoplay M5 Bluetooth Speaker",
    price: "$49.00",
  },
  {
    id: 4,
    img: product4,
    title: " Beoplay M5 Bluetooth Speaker",
    price: "$49.00",
  },
  {
    id: 5,
    img: product5,
    title: " Beoplay M5 Bluetooth Speaker",
    price: "$49.00",
  },
  {
    id: 6,
    img: product6,
    title: " Beoplay M5 Bluetooth Speaker",
    price: "$49.00",
  },
  {
    id: 7,
    img: product3,
    title: " Beoplay M5 Bluetooth Speaker",
    price: "$49.00",
  },
  {
    id: 8,
    img: product4,
    title: " Beoplay M5 Bluetooth Speaker",
    price: "$49.00",
  },
];

function ecommerce() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <Typewriter />
      <div className="px-4 mx-auto sm:px-4 lg:px-8 max-w-[90rem]">
        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
          <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
            <li className="flex items-center gap-2 bg-white p-2">
              <span className="size-6 rounded-full bg-lime-500 text-center text-[10px]/6 font-bold text-white">
                {" "}
                1{" "}
              </span>

              <span className=" sm:block"> stadium </span>
            </li>

            <li className="flex items-center gap-2 bg-white p-2">
              <span className="size-6 rounded-full bg-lime-500 text-center text-[10px]/6 font-bold text-white">
                2
              </span>

              <span className=" sm:block"> product </span>
            </li>

            <li className="flex items-center gap-2 bg-white p-2">
              <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                {" "}
                3{" "}
              </span>

              <span className=" sm:block"> Payment </span>
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-1 gap-6  lg:mt-16 lg:gap-4 lg:grid-cols-4 ">
          {ImageList.map((data, index) => (
            <div key={index} className="relative group  shadow-md">
              <div className="overflow-hidden aspect-w-1 aspect-h-1 rounded-t-xl  bg-gray-100">
                <div className="group">
                  <img
                    className="w-full h-[340px] object-fit  object-cover  transition-all duration-300 group-hover:scale-125"
                    src={data.img}
                    alt="Descriptive text"
                  />
                </div>
              </div>
              <div className="flex items-center mt-1 justify-center">
                <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill=""
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                  2
                </div>
                <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>

              <div className="absolute left-3 top-3">
                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">
                  Sale
                </p>
              </div>

              <div className="flex items-start justify-between mt-4 space-x-4 p-4 ">
                <div className="">
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <a href="#" title>
                      {data.title}
                      <span className="absolute inset-0" aria-hidden="true" />
                    </a>
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-yellow-500 sm:text-sm md:text-base">
                    {data.price}
                  </p>
                  <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500">
                    {" "}
                    $99.00{" "}
                  </del>
                </div>
              </div>
              <button
                href="#"
                className=" w-full  relative flex items-center justify-center rounded-xl bg-slate-900  py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex  justify-around mt-10">
        <a
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-900 hover:text-white"
          rel="prev"
          href="/"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
          </svg>{" "}
          &nbsp; Previous
        </a>
        <a
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-900 hover:text-white"
          rel="prev"
          href="/"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 576 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
          </svg>{" "}
          &nbsp; Home
        </a>
        <a
          className="relative inline-flex items-center cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-900 hover:text-white"
          rel="next"
          href="#"
        >
          Continue &nbsp;{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default ecommerce;
