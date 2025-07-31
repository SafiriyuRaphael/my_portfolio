import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

const SideBar = ({ sideBar, setSideBar }) => {
  const [activeLink, setActiveLink] = useState("/");
  const [mounted, setMounted] = useState(false);

  // Set initial active link and handle updates
  useEffect(() => {
    setMounted(true);
    const path = window.location.hash || window.location.pathname;
    setActiveLink(path);

    const handleHashChange = () => {
      const newPath = window.location.hash || window.location.pathname;
      setActiveLink(newPath);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Navigation links with icons
  const navLinks = [
    {
      title: "Home",
      path: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      title: "About",
      path: "/#about",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    },
    {
      title: "Services",
      path: "/services",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      title: "Portfolio",
      path: "/#portfolio",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      title: "Blog",
      path: "/blogs",
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
    },
    {
      title: "Contact",
      path: "/#contact",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setSideBar(false);
  };

  // Sidebar variants for animations
  const sidebarVariants = {
    hidden: {
      x: "-100%",
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
    },
    visible: {
      x: 0,
      boxShadow: "5px 0px 20px rgba(0, 0, 0, 0.4)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      x: "-100%",
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    hidden: {
      x: -20,
      opacity: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      x: -20,
      opacity: 1,
    },
  };

  // Backdrop for clicking outside to close
  const backdropVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {mounted && (
        <>
          {/* Dark overlay behind sidebar */}
          {sideBar && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSideBar(false)}
            />
          )}

          {/* Sidebar */}
          <motion.nav
            className="flex flex-col fixed top-0 left-0 w-64 bg-gradient-to-b from-slate-800 to-slate-900 h-full z-[60] overflow-hidden"
            variants={sidebarVariants}
            initial="hidden"
            animate={sideBar ? "visible" : "hidden"}
            exit="exit"
          >
            {/* Logo Container */}
            <motion.div
              className="flex justify-center items-center pt-6 pb-8"
              variants={linkVariants}
            >
              <img src="/logobg.png" alt="Logo" className="w-3/4 max-w-40" />
            </motion.div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-3 px-4 mt-2">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  variants={linkVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <HashLink
                    smooth={link.path.includes("#")}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`relative overflow-hidden group flex items-center py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeLink === link.path
                        ? "text-white bg-blue-600/20"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {/* Link background */}
                    <div
                      className={`absolute inset-0 ${
                        activeLink === link.path
                          ? "bg-blue-600/10"
                          : "bg-white/5"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                    />

                    {/* Left accent bar */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 rounded-full ${
                        activeLink === link.path
                          ? "bg-blue-500"
                          : "bg-transparent group-hover:bg-blue-500/50"
                      }`}
                    />

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 mr-3 transition-colors ${
                        activeLink === link.path
                          ? "text-blue-400"
                          : "text-gray-400 group-hover:text-blue-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={link.icon}
                      />
                    </svg>

                    {/* Title */}
                    <span className="relative">{link.title}</span>
                  </HashLink>
                </motion.div>
              ))}
            </div>

            {/* Hire Me Button */}
            <motion.div className="mt-auto mb-8 px-4" variants={linkVariants}>
              <a href="mailto:toniaroyce@gmail.com" className="block">
                <motion.button
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-lg flex items-center justify-center overflow-hidden relative group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button shine effect */}
                  <span className="absolute w-64 h-64 mt-12 ml-40 top-0 left-0 bg-white/20 rotate-45 transform translate-x-12 -translate-y-2 opacity-10 group-hover:opacity-50 group-hover:-translate-x-40 transition-all duration-1000 ease-out"></span>
                  {/* Button content */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Hire Me
                </motion.button>
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              className="flex justify-center space-x-4 mb-6 px-4"
              variants={linkVariants}
            >
              {[
                {
                  icon: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
                  color: "text-blue-400",
                },
                {
                  icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                  color: "text-sky-400",
                },
                {
                  icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                  color: "text-indigo-400",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`${social.color} hover:text-white transition-colors duration-200`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={social.icon}
                    />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
