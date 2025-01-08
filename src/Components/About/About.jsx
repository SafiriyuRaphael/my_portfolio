import AboutMe from "./AboutMe";
import Experience from "./Experience";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <main className="bg-[#220901]">
      <div className="h-[35vh] flex items-center pl-10 bg-[url('/matrix3.jpg')] bg-center bg-cover bg-blend-darken justify-center flex-col bg-black/50">
        <h1 className="text-6xl ">ABOUT ME</h1>
        <div className="text-xl mt-4 tracking-wide flex gap-2">
          <Link to="/"> Home</Link> &gt;&gt; <p className="text-blue-600"> About Me </p></div>
      </div>
      <div className="px-6 py-12 ">
        <AboutMe />
        <Experience />
      </div>
    </main>
  );
};

export default About;
