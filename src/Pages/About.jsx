import AboutMe from "../Components/AboutMe";
import Experience from "../Components/Experience";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="">
      
      <div className="md:px-12 px-6 py-12 ">
        <AboutMe />
        <Experience />
      </div>
    </main>
  );
};

export default About;
