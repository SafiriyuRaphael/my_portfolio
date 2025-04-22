import Hero from "./articles/Hero";
import AboutMe from "./articles/About";
import Blog from "./articles/Blog";
import Contacts from "./articles/Contact";
import Portfolio from "./articles/Portfolio";
import SideNav from "../../Components/SideNav";
import Experience from "./articles/Experience";
import Reviews from "./articles/Reviews";
const MainPage = () => {
  return (
    <>
      <SideNav />

      <Hero />

      <section id="about">
        <AboutMe />
        <Experience />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="blog">
        <Blog />
      </section>

      {/* <Reviews/> */}

      <section id="contact">
        <Contacts />
      </section>
    </>
  );
};

export default MainPage;
