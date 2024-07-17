import Img2 from "../../assets/ImageField/field2.jpg";
import Img3 from "../../assets/ImageField/field3.jpg";
// import Img4 from "../../assets/ImageField/field4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Field() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section>
      <div className=" container   flex flex-col justify-items-center items-center  gap-2 mb-10">
        <div className=" mr-auto  lg:w-[470px]  w-[360px] flex-col justify-items-center  flex lg:flex-row  justify-between gap-3 mb-3">
          <img
            src={Img2}
            data-aos="zoom-in"
            data-aos-delay="300"
            alt=""
            className=" rounded-xl bg-cover bg-no-repeat drop-shadow-md"
          />
          <img
            src={Img3}
            data-aos="zoom-in"
            data-aos-delay="350"
            alt=""
            className=" rounded-xl bg-cover bg-no-repeat drop-shadow-md"
          />
          <img
            src={Img2}
            data-aos="zoom-in"
            data-aos-delay="400"
            alt=""
            className="  rounded-xl bg-cover bg-no-repeat drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
  
}
