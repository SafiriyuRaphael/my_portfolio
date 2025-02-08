import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { MoveUpRight, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const EachPortfolio = ({currentIndex, setCurrentIndex}) => {
  const projects = [
    {
      heading: "Cosmic3d-Interactive Space Program",
      words:
        "Cosmic3D is an immersive and interactive platform that brings the wonders of our solar system to life. Designed to engage and educate, it presents fascinating facts and detailed information about each planet in a visually stunning 3D environment. Users can explore planets with smooth animations and dynamic transitions, making learning an engaging experience. The site blends aesthetics with functionality, allowing seamless navigation through celestial bodies while uncovering intriguing insights about their characteristics, history, and unique features. Whether for casual exploration or deeper learning, Cosmic3D offers an unforgettable journey through space, making complex astronomical concepts accessible and exciting",
      img: "cosmic3d.png",
      link: "https://cosmic3d.netlify.app/",
      color: "#6B7280",
    },
    {
      heading: "Edafekioja-A Roofing Business Portfolio",
      words:
        "Edafekioja Roofing Company’s website presents a clean and engaging platform that connects users with professional roofing services. It delivers a seamless browsing experience, allowing visitors to explore different roofing options, view completed projects, and access important service details effortlessly. The design ensures that information is easy to find, with clear sections dedicated to client testimonials, service descriptions, and contact details. With a strong focus on usability and visual appeal, the site provides a polished and professional digital presence that reflects the company’s expertise and reliability",
      img: "edafekioja.png",
      link: "edafekioja.com.ng",
      color: "#FF840E",
    },
    {
      heading: "Fashionsistar-Fashion Landing Page",
      words:
        "The fashion landing page captures elegance and style with a visually striking design that immediately draws attention. Featuring high-quality imagery, smooth transitions, and a well-structured layout, it creates an immersive experience that showcases the latest trends and collections. Every element, from bold typography to carefully curated color schemes, enhances the brand’s identity while ensuring effortless navigation. With a strong focus on aesthetics and user engagement, the page seamlessly blends fashion and functionality, making it easy for visitors to explore, shop, and connect with the brand.",
      img: "fashionsistar.jpg",
      link: "fashionsistar.netlify.app",
      color: "yellow",
    },
  ];

 

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };
  return (
    <div>
    <div className="md:w-full w-screen">
      {projects.map((project, index) => (
        <div
          key={index}
          className={` ${index===currentIndex ? "flex" : "hidden"} flex-col gap-4 items-start justify-start`}
        >
          <div
            className={` to-black flex flex-col gap-4 w-full justify-center py-6 px-10`}
            style={{ backgroundImage: `linear-gradient(to bottom, ${project.color}, black)` }}

          >
            <img
              src={`${project.img}`}
              alt=""
              width={100}
              className="rounded-2xl"
            />
            <h1>{project.heading}</h1>
          </div>
          <p className="px-10 text-sm md:text-md lg:text-xl">{project.words}</p>
          <div className="flex justify-between w-full px-10">
            <div className="flex gap-2 md:gap-4">
              <div className="bg-slate-400 p-1 rounded-lg">
                <FaReact className="md:size-7" />
              </div>{" "}
              <div className="bg-slate-400 p-1 rounded-lg">
                <SiTypescript className="md:size-7" />
              </div>{" "}
              <div className="bg-slate-400 p-1 rounded-lg">
                <DiJavascript1 className="md:size-7" />
              </div>
              <div className="bg-slate-400 p-1 rounded-lg">
                <RiTailwindCssFill className="md:size-7" />
              </div>
            </div>
            <a href={`${project.link}`} className="flex items-center gap-1" target="_blank" >
              Check Live Site <MoveUpRight className="size-4" />
            </a>
            
          </div>
          <div className="flex w-full px-7 justify-between"><ChevronLeft className="size-9 cursor-pointer hover:text-gray-600" onClick={prevProject}/><ChevronRight className="size-9 cursor-pointer hover:text-gray-600" onClick={nextProject}/></div>
        </div>
      ))}
    </div></div>
  );
};

export default EachPortfolio;
