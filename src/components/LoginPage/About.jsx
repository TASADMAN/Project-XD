// import about from "../../assets/ImageMain/about.png";
import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/shirt/S001.jpg";
import Img2 from "../../assets/shirt/S004.jpg";
import Img3 from "../../assets/shirt/S002.jpg";
// import { FaChevronCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Manchester United",
    description: "600/ชม.",
  },
  {
    id: 2,
    img: Img2,
    title: "Manchester United",
    description: "600/ชม.",
  },
  {
    id: 3,
    img: Img3,
    title: "Manchester United",
    description: "600/ชม.",
  },
  {
    id: 4,
    img: Img1,
    title: "Manchester United",
    description: "600/ชม.",
  },
  {
    id: 5,
    img: Img2,
    title: "Manchester United",
    description: "600/ชม.",
  },
  {
    id: 6,
    img: Img3,
    title: "Manchester United",
    description: "600/ชม.",
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="about"
      className=" w-[100%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20"
    >
      <div className="container">
        <div className="text-left mb-[160px]">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Stadium for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Select a stadium
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[100px]  md:gap-5 place-items-center ">
          {ProductsData.map((data) => (
            <div
              key={data}
              data-aos="zoom-in"
              className="rounded-2xl px-20  hover:bg-black
             dark:hover:bg-limegreenm hover:text-white ralative  shadow-xl duration-300 group max-w-[480px]  mb-[170px]"
            >
              <div className="h-[100px] mb-[60px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[320px] block  transform -translate-y-20 group-hover:scale-150 duration-300 drop-shadow-md rounded-md"
                />
              </div>
              <div className="p-10 text-center ">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
                <h1 className="text-xl font-bold mb-2">{data.title}</h1>
                <p
                  className=" mt-1 text-left text-primary font-bold group-hover:text-white duration-300 text-sm px-0 mb-2
                "
                >
                  {data.description}
                </p>
                <div className="flex gap-3 items-center text-center  place-items-center mb-4">
                  <label className="  block text-black group-hover:text-white font-bold mb-2">
                    Stadium:
                  </label>
                  <div className=" items-center mb-2">
                    <input
                      type="radio"
                      id="option1"
                      name="options"
                      defaultValue={1}
                      className=" text-limegreen h-4 w-4 mr-2"
                    />
                    <label
                      htmlFor="option1"
                      className="text-black group-hover:text-white"
                    >
                      1
                    </label>
                  </div>
                  <div className=" items-center mb-2">
                    <input
                      type="radio"
                      id="option2"
                      name="options"
                      defaultValue={2}
                      className="text-limegreen h-4 w-4 mr-2"
                    />
                    <label
                      htmlFor="option2"
                      className="text-black group-hover:text-white"
                    >
                      2
                    </label>
                  </div>
                  <div className=" items-center mb-2">
                    <input
                      type="radio"
                      id="option2"
                      name="options"
                      defaultValue={3}
                      className="text-limegreen h-4 w-4 mr-2"
                    />
                    <label
                      htmlFor="option2"
                      className="text-black group-hover:text-white"
                    >
                      3
                    </label>
                  </div>
                </div>

                <button className="bg-limegreen hover:scale-105 duration-300 text-gray-900 font-ubuntu font-semibold py-1 px-4 rounded-md mt-4 group-hover:bg-white group-hover:text-black">
                  Choose
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
