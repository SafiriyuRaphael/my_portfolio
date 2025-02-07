import Hero from "./Pages/Hero";
import Nav from "./Pages/Nav";
import About from "./Pages/About";
import Services from "./Components/services/Services";
import MyBlog from "./Components/MyBlog";
import Contacts from "./Pages/Contacts";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Pages/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Missing from "./Components/Missing";

function App() {
  return (
    <div className="overflow-hidden">
     
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<MyBlog />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
