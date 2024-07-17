import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Location(){
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 400,
          easing: "ease-in-sine",
        });
      }, []);
    return(
       <section>
        <div data-aos="fade-up"  data-aos-delay="300"  className="container my-4">
          <h1 className=" border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl  shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3830.5410244376094!2d103.24633252513124!3d16.244018901062798!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1717761414781!5m2!1sth!2sth"
              width="100%"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "15px" }}

            ></iframe>
          </div>
        </div>
      </section>
    );
}