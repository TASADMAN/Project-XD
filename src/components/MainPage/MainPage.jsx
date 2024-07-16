import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import About2 from "./About2";
import About3 from "./About3";
import Counter from "./Counter";
import Pricing from "./Pricing";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function MainPage() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Services />
      <nav>
        <Link to="/">About</Link>
        <Link to="/about2">About 2</Link>
        <Link to="/about3">About 3</Link>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/about3" element={<About3 />} />
      </Routes>
      <Counter />
      <Pricing />
      <Clients />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}