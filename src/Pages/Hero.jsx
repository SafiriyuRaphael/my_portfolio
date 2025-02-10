import { SquareArrowOutUpRight } from "lucide-react";
import Blog from "./Blog";
import Contacts from "./Contacts";
import Reviews from "../Components/Reviews";
import About from "./About";
import Header from "./Header";
import { Typewriter } from "react-simple-typewriter";
import Portfolio from "../Components/Portfolio";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <>
      <div className=" w-screen">
     
        <div className="flex h-full flex-row-reverse w-screen">
          {/* 3D Canvas Section */}
          <div className="w-1/2 flex-col flex items-start justify-center gap-3 font-serif text-left bg-gradient-to-r dark:from-black from-gray-900/80 dark:to-gray-800 to-gray-300 text-white">
            <h1 className="lg:text-4xl text-sm text-left">
              I Deliver{" "}
              <span className="bebas-neue-regular  text-gray-400 ">
                {" "}
                SUPERIOR{" "}
              </span>
              <span className="text-amber-500 mt-3 md:text-5xl sm:text-3xl  text-xl block">
                <Typewriter
                  words={[
                    "Responsive Design",
                    "SEO Optimization",
                    "E-commerce Solutions",
                    "Frontend Development",
                    "Backend Development",
                    "JavaScript Development",
                    "Mobile Optimization",
                    "WordPress Development",
                    "Branding & Identity",
                    "Prototyping",
                    "Motion Graphics",
                    "Digital Marketing",
                    "Custom Themes",
                    "Website Maintenance",
                    "Performance Optimization",
                    "Cross-browser Compatibility",
                    "Interactive Design",
                    "Custom Animations",
                    "CMS (Content Management System)",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </span>
            </h1>
            <h6 className="text-left sm:pr-9 lg:text-[1.2rem] rounded-xl md: sm:text-sm text-[10px] mr-10">
              Welcome to my digital studio! I’m Rapheal, a web designer
              passionate about creating seamless, user-friendly experiences. I
              craft beautiful, functional websites, from sleek modern designs to
              vibrant interactive platforms. With a focus on custom layouts and
              responsive design, I ensure each project reflects the unique
              vision behind it.
            </h6>
            <div className="md:flex gap-8">
              <HashLink to="/#contact" smoth="true">
              <button className="flex gap-1 bg-gray-400 text-black hover:bg-gray-800 hover:text-white md:px-3 py-3 rounded-2xl whitespace-nowrap font-extrabold">
                Send me a message
                <SquareArrowOutUpRight className="size-4" />
              </button></HashLink>
              <a href="https://github.com/SafiriyuRaphael" target="_blank">
              <button className="flex gap-1 bg-gray-400 text-black hover:bg-gray-800 hover:text-white md:px-3 md:py-3 rounded-2xl font-extrabold">
                Projects
                <SquareArrowOutUpRight className="size-4" />
              </button></a>
            </div>
          </div>

          {/* Background Image Section */}
          <div className="w-1/2 bg-cover bg-gray-900/80 bg-no-repeat bg-center flex-nowrap dark:bg-black">
            <img
              src="/mypcportfolio.webp"
              alt="Portfolio"
              className="h-[70vh] md:h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* Other sections */}
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <Reviews />
      <Blog />
      <div id="contact">
        <Contacts />
      </div>
    </>
  );
};

export default Hero;
