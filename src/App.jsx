import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Header/Nav";
import About from "./Components/About/About";
import Services from "./Components/services/Services";
import MyBlog from "./Components/Blog/MyBlog";
import Contacts from "./Components/Contact/Contacts";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Missing from "./Components/Missing";

function App() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<MyBlog/>} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
