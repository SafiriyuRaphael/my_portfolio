import { Canvas } from "@react-three/fiber";
import HomeBackground from "../Components/HomeBackground";
import Hero3dText from "../Components/Hero3dText";
import AnimatedRobot from "../animations/AnimatedRobot";
import LightBulb from "../animations/LightBulb";
import Plane from "../animations/Plane";
import AboutMe from "../Components/AboutMe";
import Blog from "./Blog";
import Contacts from "./Contacts";
import Reviews from "../Components/Reviews";
import About from "./About";
import Header from "./Header";
import Typical from "react-typical";

const Hero = () => {
  return (
    <>
      <div className="relative w-screen">
        <Header />
        <div className="flex h-full flex-row-reverse w-screen">
          {/* 3D Canvas Section */}
          <div className="w-1/2 flex-col flex items-start justify-center gap-3 font-serif text-left bg-gradient-to-r from-black to-gray-800">
            <h1 className="lg:text-4xl text-sm text-left">
             I Deliver <span className="bebas-neue-regular  text-gray-400 "> SUPERIOR{" "}</span>
              <Typical
                steps={[
                  "Responsive Design", 3000,
                  "SEO Optimization", 3000,
                  "E-commerce Solutions", 3000,
                  "Frontend Development", 3000,
                  "Backend Development", 3000,
                  "JavaScript Development", 3000,
                  "Mobile Optimization", 3000,
                  "WordPress Development", 3000,
                  "Branding & Identity", 3000,
                  "Prototyping", 3000,
                  "Motion Graphics", 3000,
                  "Digital Marketing", 3000,
                  "Custom Themes", 3000,
                  "Website Maintenance", 3000,
                  "Performance Optimization", 3000,
                  "Cross-browser Compatibility", 3000,
                  "Interactive Design", 3000,
                  "Custom Animations", 3000,
                  "CMS (Content Management System)", 3000,
                ]}
                loop={Infinity}
                wrapper="span"
                className="text-amber-500 mt-3 md:text-5xl sm:text-3xl  text-xl block"
              />
            </h1>
            <h6 className="text-left sm:pr-9 lg:text-[1.2rem] rounded-xl md: sm:text-sm text-[10px] mr-10">
              Welcome to my digital studio! I’m Rapheal, a web designer
              passionate about creating seamless, user-friendly experiences. I
              craft beautiful, functional websites, from sleek modern designs to
              vibrant interactive platforms. With a focus on custom layouts and
              responsive design, I ensure each project reflects the unique
              vision behind it.
            </h6>
          </div>

          {/* Background Image Section */}
          <div className="w-1/2 bg-cover bg-no-repeat bg-center flex-nowrap">
            <img
              src="/mypcportfolio.png"
              alt="Portfolio"
              className="h-[70vh] md:h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* Other sections */}
      <About />
      <Blog />
      <Reviews />
      <Contacts />
    </>
  );
};

export default Hero;





