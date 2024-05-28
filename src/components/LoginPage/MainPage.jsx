import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Counter from "./Counter";
import Pricing from "./Pricing";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";


export default function MainPage(){
    return(
        <>
        <Header/>
        <Hero/>
        <Services/>
        <About/>
        <Counter/>
        <Pricing/>
        <Clients/>
        <Contact/>
        <Footer/>
        </>
    );
}