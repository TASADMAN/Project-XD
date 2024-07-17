import Header from "./Header";
import Hero from "./Hero";
import Services from "./Event";
import Location from "./Location"
import Comment1 from "./Comment1";
import FieldMain from "./FieldMain";
import Field  from "./Field";
import Footer from "./Footer";
// import Local from "./Local";


export default function Detail(){
    return(
        <>
        <Header/>
        <Hero/>
        <Services/>
        <FieldMain/>
        <Field/>
        <Location/>
        <Comment1/>
        <Footer />
        </>
    );
}