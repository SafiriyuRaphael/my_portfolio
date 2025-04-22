import { useState, useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, AnimatePresence } from "framer-motion";
import HeaderAbout from "./section/HeaderAbout";
import ProfileInfo from "./section/ProfileInfo";
import SkillsSection from "./section/SkillsSection";
import ServicesInfo from "./section/ServicesInfo";
import ExperienceInfo from "./section/ExperienceInfo";
import LocationInfo from "./section/LocationInfo";
import { TABVARIANTS } from "../../../../constant/about";
import BackgroundGradients from "./animations/BackgroundGradients";
import { useLocation } from "react-router-dom";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const [hoverTab, setHoverTab] = useState(null);

  // Parallax effect values
  const y1 = useMotionValue(0);
  const y2 = useMotionValue(0);
  const location= useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      y1.set(scrollY * 0.2);
      y2.set(scrollY * -0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y1, y2]);

    // Handle hash navigation
    useEffect(() => {
      if (location.hash === "#services") {
        setActiveTab("services");
        
        // Scroll after a small delay to allow tab switch
        setTimeout(() => {
          const element = document.getElementById("services");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    }, [location.hash]);

  return (
    <article
      className="relative overflow-hidden bg-black text-white py-32 lg:py-40"
      id="about"
    >
    
<BackgroundGradients/>      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 border border-amber-500/20 rounded-full"
        style={{ y: y1 }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 border border-blue-500/20 rounded-full"
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
      />

      {/* Header with enhanced animation */}
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, ease: "easeOut" }}
         className="sticky top-0" // This was missing and could be causing issues
      >
        <HeaderAbout />
      </motion.div>

      {/* Main content container */}
      <motion.section 
        className="max-w-7xl mx-auto px-5 relative z-10"
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Profile card section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative backdrop-blur-lg bg-gradient-to-br from-gray-900/80 to-black/90 rounded-3xl shadow-[0_0_40px_rgba(252,163,17,0.1)] overflow-hidden mb-24"
        >
          {/* Decorative top border glow */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16">
            <div className="absolute top-0 right-0 w-full h-px bg-amber-500/80"></div>
            <div className="absolute top-0 right-0 h-full w-px bg-amber-500/80"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16">
            <div className="absolute bottom-0 left-0 w-full h-px bg-amber-500/80"></div>
            <div className="absolute bottom-0 left-0 h-full w-px bg-amber-500/80"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Profile image and info with enhanced styling */}
            <div className="col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <ProfileInfo />
              </motion.div>
            </div>
            
            {/* Tabs section with improved interaction */}
            <div className="col-span-3 border-t lg:border-t-0 lg:border-l border-gray-700/30 relative">
              <div className="p-6 flex justify-around relative border-b border-gray-800/50">
                {["skills", "services", "experience"].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    onMouseEnter={() => setHoverTab(tab)}
                    onMouseLeave={() => setHoverTab(null)}
                    variants={TABVARIANTS}
                    initial="inactive"
                    animate={activeTab === tab ? "active" : "inactive"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className={`py-3 px-8 rounded-xl capitalize font-medium text-center relative ${
                      activeTab === tab 
                        ? "text-amber-400" 
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {tab}
                    {hoverTab === tab && activeTab !== tab && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-px bg-amber-500/40 mx-auto"
                        layoutId="hoverUnderline"
                        initial={{ width: 0 }}
                        animate={{ width: "50%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {activeTab === tab && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/80 via-amber-400 to-amber-500/80 mx-auto"
                        layoutId="activeUnderline"
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Tab content with smoother transitions */}
              <div className="p-8 lg:p-10 min-h-96">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    {activeTab === "skills" && <SkillsSection />}
                    {activeTab === "services" && <ServicesInfo />}
                    {activeTab === "experience" && <ExperienceInfo />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced location section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <LocationInfo isInView={isInView} />
        </motion.div>
      </motion.section>
    </article>
  );
};

export default AboutMe;