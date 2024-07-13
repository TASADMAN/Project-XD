import { useEffect } from "react";
// import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../export.js";
// import { servicesinfo } from "../../export.js";
import { FaChevronCircleRight } from "react-icons/fa";
import { pricingplan } from "../../export";
export default function Services() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="services"
      className="w-[90%] m-auto flex flex-col justify-between items-center gap-2 py-5 "
    >
            {/* <h1 data-aos="zoom-in" data-aos-delay="200" className=" text-lime-500 font-ubuntu text-[19px] font-semibold">Select sport type</h1> */}
            <h1 data-aos="zoom-in" data-aos-delay="400" className=" font-bold lg:text-[50px] text-[50px] lg:leading-[70px] leading-[50px] text-center text-black">Select Your Sport</h1>
            <div data-aos="zoom-in" data-aos-delay="600" className=" w-full flex lg:flex-row flex-col justify-between items-center gap-10 mt-3 ">
                {
                    pricingplan.map((item,index) =>(
                        <div key={index} className=" w-50 p-5 rounded-xl flex flex-col justify-center items-start gap-3 lg:w-[35%] w-full hover:scale-105 transition duration-300 cursor-pointer bg-custom drop-shadow-md"style={{ backgroundImage: `url(${item.img})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat', width: '100%',height: '300px',position: 'relative',boxShadow: '0 10px 6px rgba(0, 0, 0, 0.1)' }}>
                            <h1 className="absolute top-2 text-white text-5xl font-bold  font-ubuntu">{item.type}</h1>
                            {/* <p className=" text-white text-lg font-ubuntu">{item.about}</p> */}
                            {/* <h1 className=" text-limegreen font-bold text-[55px] font-ubuntu">{item.price}<span className=" text-limegreen text-lg pl-2 font-ubuntu">Monthly</span></h1> */}
                            
                            <p className=" text-white text-lg font-semibold font-ubuntu">{item.specs}</p>
                            <div className=" flex flex-col justify-center items-start gap-4">
                                
                            </div>
                        </div>
                    ))
                }
            </div>
    </section>
  );
}
