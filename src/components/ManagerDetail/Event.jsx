import { useEffect } from "react";
// import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../export.js";
// import { servicesinfo } from "../../export.js";
import { FaChevronCircleRight } from "react-icons/fa";
import { pricingplan } from "../../export.js";
import Slider from "react-slick";
import Image1 from "../../assets/hero/womens.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function Services() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <section
      id="event"
      className="w-[90%] m-auto flex flex-col justify-between items-center gap-2 py-5 "
    >
            {/* <h1 data-aos="zoom-in" data-aos-delay="200" className=" text-lime-500 font-ubuntu text-[19px] font-semibold">Select sport type</h1> */}
            <h1 data-aos="zoom-in" data-aos-delay="400" className=" font-bold lg:text-[50px] text-[50px] lg:leading-[70px] leading-[50px] text-center text-black">Event</h1>
            <div data-aos="zoom-in" data-aos-delay="600" className=" w-full flex lg:flex-row flex-col justify-between items-center gap-10 mt-3 "></div>
            <div className="container pb-8 sm:pd-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 z-10  text-gray-900">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl
                       lg:text-7xl font-bold "
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-daley="100"
                    className="text-sm "
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-daley="300"
                  >
                    <button
                      className=" ml-2 bg-limegreen font-ubuntu hover:bg-white text-black px-8 py-2 rounded-full  transform hover:scale-105 transition duration-300 cursor-pointer outline-none "
                    >
                      เพิ่มเติม
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105
                         lg:scale-120  object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>      
      </div>
    </section>
  );
}
