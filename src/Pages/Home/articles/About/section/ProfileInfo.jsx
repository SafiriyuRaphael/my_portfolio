import { motion } from "framer-motion"
import { ArrowRight, ClipboardCopy, CopyCheck, Mail } from "lucide-react"
import { useState } from "react";

const ProfileInfo = () => {
     const [copyText, setCopyText] = useState(false);

    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText("toniaroyce@gmail.com");
          setCopyText(true);
          setTimeout(() => {
            setCopyText(false);
          }, 2500);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      };
      
  return (
    <section className="col-span-2 p-8 lg:p-12 flex flex-col items-center lg:items-start">
    <div className="relative mb-8 group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#fca311] to-purple-400 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-md"></div>
      <img 
        src="/mypcportfolio.webp" 
        alt="Raphael - Web Designer & Developer" 
        className="relative w-48 h-48 rounded-full object-cover border-4 border-[#14213d]"
      />
    </div>
    
    <h3 className="text-2xl font-bold mb-2">Raphael Safiriyu</h3>
    <p className="text-[#fca311] font-medium mb-6">Web Designer & Developer</p>
    
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-300">Years Experience</span>
        <span className="text-lg font-bold">2+</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-300">Projects Completed</span>
        <span className="text-lg font-bold">10+</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-300">Satisfied Clients</span>
        <span className="text-lg font-bold">15+</span>
      </div>
    </div>
    
    <div className="w-full p-4 bg-black/30 rounded-xl mb-6">
      <div className="flex items-center mb-3 gap-2">
        <Mail className="text-[#fca311] h-5 w-5" />
        <span className="text-gray-200 font-medium">Email me at:</span>
      </div>
      <div className="flex items-center justify-between bg-black/20 p-3 rounded-lg">
        <span className="text-gray-200">toniaroyce@gmail.com</span>
        <button 
          onClick={handleCopy} 
          className="text-[#fca311] hover:text-white transition-colors"
          aria-label="Copy email"
        >
          {copyText ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <CopyCheck className="h-5 w-5" />
            </motion.div>
          ) : (
            <ClipboardCopy className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
    
    <a 
      href="#contact" 
      className="w-full bg-[#fca311] hover:bg-[#e39200] text-black font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-[#fca31180]"
    >
      Let's Work Together
      <ArrowRight className="h-5 w-5" />
    </a>
  </section>
  )
}

export default ProfileInfo
