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
            <div data-aos="zoom-in" data-aos-delay="600" className=" w-full flex lg:flex-row flex-col justify-between items-center gap-10 mt-3">
                {
                    pricingplan.map((item,index) =>(     
                          <div key={index} className="w-full p-5 rounded-xl flex flex-col justify-center items-start gap-3 lg:w-[35%] h-[300px] hover:scale-105 transition duration-300 cursor-pointer bg-custom drop-shadow-md bg-cover bg-no-repeat relative shadow-2xl" style={{ backgroundImage: `url(${item.img})` }}>
                           <div className="absolute inset-0 bg-black opacity-35 rounded-xl"></div>

                            <h1 className="absolute top-2 text-white text-5xl font-bold  font-ubuntu">{item.type}</h1>
                      
                            
                            <p className=" text-white text-lg font-semibold font-ubuntu">{item.specs}</p>
                          
                        </div>
                    
                    ))
                }
            </div>
    </section>
  );
}
