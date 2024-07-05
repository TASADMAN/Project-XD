import herobanner from "../../assets/ImageMain/herobanner.png";
import clients from "../../assets/ImageMain/clients.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "react-slick";
import Image1 from "../../assets/ImageLogin/BBS.jpg";
import { TbBackground } from "react-icons/tb";
import React from "react";
import { MdHeight } from "react-icons/md";


const BgStyle = {
  backgroundImage: `url(${Image1})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export default function Hero() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
   
    <div
    style={BgStyle}
    className="  duration-300 "
  >
    <div className="duration-300 ">
      <div className="container min-h-[620px] flex items-center">
        <div className="w-full md:w-[550px] min-w-full   text-center space-y-5">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className=" text-white uppercase    text-5xl md:text-7xl font-bold"
          >
            manchester united
          </h1>
        </div>
      </div>
    </div>
  </div>

  );
}
