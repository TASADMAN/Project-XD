
import Img2 from "../../assets/ImageField/field2.jpg";
import Img3 from "../../assets/ImageField/field3.jpg";
import Img4 from "../../assets/ImageField/field4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Field() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      className=""
    >
      <div className="container">
      <div className="grid grid-cols-1 smL:grid-2 lg:grid-cols-3  gap-1 ">
            <div className="relative  lg:h-[500px]  lg:w-[467px] w-[300px] h-[300px] flex gap-5 justify-items-center">
                <img src={Img2} alt="" className="rounded-xl  object-cover shadow-xl" />
                <img src={Img3} alt="" className="rounded-xl  object-cover shadow-xl" />
                <img src={Img2} alt="" className="rounded-xl  object-cover shadow-xl" />
            </div>
      </div>
      </div>
    </section>
  );
}  