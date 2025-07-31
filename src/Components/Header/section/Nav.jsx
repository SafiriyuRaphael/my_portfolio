import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { NAVLINK } from "../../../constant/navLink";

const Nav = ({ sideBar, setSideBar }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [hoverLink, setHoverLink] = useState(null);
  const navRef = useRef(null);

  // Handle scroll effect with throttling for performance
  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(lastScrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active link based on current path & handle hash changes
  useEffect(() => {
    const setActivePath = () => {
      const path = window.location.hash || window.location.pathname;
      setActiveLink(path);
    };

    setActivePath();
    window.addEventListener("hashchange", setActivePath);
    return () => window.removeEventListener("hashchange", setActivePath);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    if (sideBar) setSideBar(false);
  };

  return (
    <motion.header
      ref={navRef}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-[99] transition-all duration-300 ${
        scrolled
          ? "py-2 bg-slate-900/90 backdrop-blur-md shadow-2xl shadow-slate-900/20"
          : "py-4 bg-gradient-to-b from-slate-900 to-slate-900/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <HashLink
            to="/"
            className="relative group flex items-center z-10"
            onClick={() => handleLinkClick("/")}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="/logobg.png"
                alt="Logo"
                className={`transition-all duration-300 ${
                  scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
                }`}
              />
              <motion.div
                className="absolute -inset-1 -z-10 rounded-full blur-sm bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
          </HashLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <nav className="flex items-center">
              {NAVLINK.map((link) => (
                <motion.div
                  key={link}
                  className="relative px-1"
                  onHoverStart={() => setHoverLink(link.path)}
                  onHoverEnd={() => setHoverLink(null)}
                >
                  <HashLink
                    smooth={link.to.includes("#")}
                    to={link.to}
                    onClick={() => handleLinkClick(link.to)}
                    className={`relative flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                      activeLink === link.to
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span className="hidden sm:inline-block sm:mr-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={link.icon}
                        />
                      </svg>
                    </span>
                    {link.label}

                    {/* Background hover effect */}
                    <AnimatePresence>
                      {(hoverLink === link.to || activeLink === link.to) && (
                        <motion.span
                          className={`absolute inset-0 -z-10 rounded-md ${
                            activeLink === link.to
                              ? "bg-blue-600/20"
                              : "bg-slate-700/40"
                          }`}
                          initial={{ opacity: 1, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 1, scale: 0.9 }}
                          transition={{ duration: 0.15 }}
                        />
                      )}
                    </AnimatePresence>
                  </HashLink>

                  {/* Active indicator */}
                  {activeLink === link.to && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <a
                href="mailto:toniaroyce@gmail.com"
                className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 to-blue-900 rounded-full group"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 ease-out bg-gradient-to-br from-white/20 to-transparent"></span>
                <span className="relative flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Hire me
                </span>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              className="p-2 rounded-md text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setSideBar(!sideBar)}
              whileTap={{ scale: 0.9 }}
              aria-label={sideBar ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {!sideBar ? (
                  <motion.svg
                    key="menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ opacity: 1, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 1, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="close"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ opacity: 1, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 1, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Progress bar for scroll position */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-amber-500 to-amber-500"
        style={{
          width: scrolled
            ? `${
                (window.scrollY /
                  (document.documentElement.scrollHeight -
                    window.innerHeight)) *
                100
              }%`
            : "0%",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.header>
  );
};

export default Nav;
