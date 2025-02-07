import Avatar from "../animations/Avatar";
import { Canvas } from "@react-three/fiber";
("react-intersection-observer");
import { motion } from "framer-motion";
import { useState } from "react";
import useView from "../hooks/inview";

const Experience = () => {
  const [anime, setAnime] = useState("default");
  const {
    ref,
    controls,
    cardVariants1,
    cardVariant3,
    containerVariants,
    cardVariants2,
  } = useView();

  return (
    <section className="w-full mt-6 px-4">
      <motion.div
        ref={ref}
        variants={cardVariants1}
        animate={controls}
        initial="hidden"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          className="lg:w-1/2"
          ref={ref}
          variants={cardVariants2}
          animate={controls}
          initial="hidden"
        >
          <Canvas className=" rounded-xl" shadows>
            <Avatar anime={anime} />
          </Canvas>
        </motion.div>
        <motion.div
          className="lg:w-1/2 flex flex-col gap-4"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          ref={ref}
        >
          {/* Skills Section */}
          <motion.div
            className="p-4 rounded-lg bg-slate-400 w-full hover:bg-slate-600 transition-all duration-900 ease-in"
            variants={cardVariant3}
            onMouseEnter={() => setAnime("anime1")}
            onMouseLeave={() => setAnime("default")}
          >
            <h3 className="text-xl font-semibold mb-2 ">Skills</h3>
            <ul className="list-disc">
              <li>Web Development: HTML, CSS, Javascript, React, Node.js</li>
              <li>Design Tools: Figma, Adobe XD, Sketch, Discovery Studio</li>
              <li>Version Control: Git, GitHub</li>
              <li>Frameworks/Libraries: React, Bootstrap, Tailwind CSS</li>
              <li>Other: WordPress, SEO, Responsive Design, AutoDock Tools</li>
            </ul>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="p-4 rounded-lg bg-slate-400 w-full hover:bg-slate-600 transition-all duration-900 ease-in"
            variants={cardVariant3}
            onMouseEnter={() => setAnime("anime2")}
            onMouseLeave={() => setAnime("default")}
          >
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="list-disc pl-5">
              <li>Biochemistry - Olabisi Onabanjo University, 2025</li>
              <li>
                Full Stack Web Developer - Bafuto Institute of Management and
                Information Technology, 2025
              </li>
              <li>Web Design Basics - freeCodeCamp, 2023</li>
            </ul>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            className="p-4 rounded-lg bg-slate-400 w-full hover:bg-slate-600 transition-all duration-900 ease-in"
            variants={cardVariant3}
            onMouseEnter={() => setAnime("anime3")}
            onMouseLeave={() => setAnime("default")}
          >
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>
                <span className="font-semibold">
                  3D Interactive Space Program App:
                </span>{" "}
                Developed a web app for exploring real-time planetary data.
              </li>
              <li>
                <span className="font-semibold">
                  MarioBee School Management System:
                </span>{" "}
                Built a system to streamline school processes and enhance
                learning.
              </li>
              <li>
                <span className="font-semibold">
                  Authentic Roof Tile Project:
                </span>{" "}
                Designed an e-commerce-style site for synthetic slate tiles.
              </li>
              <li>More projects available on request...</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
