import React from "react";
import { HashLink } from "react-router-hash-link";
import useView from "../hooks/inview";
import { motion } from "framer-motion";

const Footer = () => {
  const {
    controls,
    ref,
    cardVariant3,
    cardVariants1,
    cardVariants2,
    containerVariants,
  } = useView();
  return (
    <motion.footer
      className="flex flex-col justify-between items-center pt-4 border-t-2 border-t-gray-500"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      ref={ref}
    >
      <motion.div
        className="flex flex-col items-center"
        variants={cardVariant3}
      >
        <div className="bg-[#7493c0]">
          <img src="/logobg.png" alt="Logo" className="h-16" />
        </div>
        <p className="font-bold">RaphNexus</p>
      </motion.div>
      <ul className="flex gap-2 sm:gap-6 mt-4">
        <motion.li variants={cardVariants1}>
          <HashLink
            smooth="true"
            to="/"
            className="hover:text-gray-600 text-black dark:text-white"
          >
            Home
          </HashLink>
        </motion.li>
        <motion.li variants={cardVariants1}>
          <HashLink
            smooth="true"
            to="/#about"
            className="hover:text-gray-600 text-black dark:text-white"
          >
            About
          </HashLink>
        </motion.li>
        <motion.li variants={cardVariants1}>
          <HashLink
            smooth="true"
            to="/services"
            className="hover:text-gray-600 text-black dark:text-white"
          >
            Services
          </HashLink>
        </motion.li>
        <motion.li variants={cardVariants1}>
          <HashLink
            smooth="true"
            to="/#portfolio"
            className="hover:text-gray-600 text-black dark:text-white"
          >
            Portfolio
          </HashLink>
        </motion.li>
        <motion.li variants={cardVariants1}>
          <HashLink
            smooth="true"
            to="/blogs"
            className="hover:text-gray-600 text-black dark:text-white"
          >
            Blog
          </HashLink>
        </motion.li>
        <motion.li variants={cardVariants1}>
          <HashLink
            smooth="true"
            to="/#contact"
            className="hover:text-gray-600 text-black dark:text-white"
          >
            Contact
          </HashLink>
        </motion.li>
      </ul>
      <motion.p variants={cardVariants2} className="mt-4 text-sm">
        Build with love by Safiriyu Rapheal
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
