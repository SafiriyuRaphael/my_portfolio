import Hero from "./Pages/Hero";
import Nav from "./Pages/Nav";
import About from "./Pages/About";
import Services from "./Components/services/Services";
import MyBlog from "./Components/MyBlog";
import Contacts from "./Pages/Contacts";
import Footer from "./Pages/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Missing from "./Components/Missing";
import Header from "./Pages/Header";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
     
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />   
        <Route path="/blogs" element={<MyBlog />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
