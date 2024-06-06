import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Comment(){
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 400,
          easing: "ease-in-sine",
        });
      }, []);
    return(
        <h1 data-aos="zoom-in" data-aos-delay="20" className="h-[500px] font-bold lg:text-[50px] text-[50px] lg:leading-[70px] leading-[50px] text-center text-black">Comment</h1>
    );
}