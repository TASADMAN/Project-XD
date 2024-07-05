import about from "../../assets/ImageMain/about.png";
import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaChevronCircleRight } from "react-icons/fa";
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
      <h1 data-aos="zoom-in" data-aos-delay="0" className="h-[500px] font-bold lg:text-[50px] text-[50px] lg:leading-[70px] leading-[50px] text-center text-black">About</h1>
      <div data-aos="zoom-in" data-aos-delay="0" className=" w-full flex lg:flex-row flex-col justify-between items-center gap-10 mt-3 "></div>
      </div>
    </section>
  );
}
