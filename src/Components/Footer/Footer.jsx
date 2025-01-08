import React from 'react';
import { Link } from 'react-router-dom';
import useView from '../../hooks/inview';
import { motion } from 'framer-motion';

const Footer = () => {
  const { controls, ref, cardVariant3, cardVariants1, cardVariants2, containerVariants} =useView()
  return (
    <motion.footer className='flex flex-col justify-between items-center pt-4 border-t-2 border-t-gray-500'
    initial="hidden"
    animate={controls}
    variants={containerVariants}
    ref={ref}>
      
        <motion.div className='flex flex-col items-center'
        variants={cardVariant3}>
          <img src="/logobg.png" alt="Logo" className="size-14" />
          <p className='font-bold'>R.s Designs</p>
        </motion.div>
        <ul className='flex gap-2 sm:gap-6 mt-4'>
          <motion.li
          variants={cardVariants1}>
            <Link to="/" className="hover:text-gray-600">Home</Link>
          </motion.li>
          <motion.li variants={cardVariants1}>
            <Link to="/about" className="hover:text-gray-600">About</Link>
          </motion.li>
          <motion.li variants={cardVariants1}>
            <Link to="/services" className="hover:text-gray-600">Services</Link>
          </motion.li>
          <motion.li variants={cardVariants1}>
            <Link to="/portfolio" className="hover:text-gray-600">Portfolio</Link>
          </motion.li>
          <motion.li variants={cardVariants1}>
            <Link to="/blogs" className="hover:text-gray-600">Blog</Link>
          </motion.li>
          <motion.li variants={cardVariants1}>
            <Link to="/contact" className="hover:text-gray-600">Contact</Link>
          </motion.li>
        </ul>
        <motion.p
        variants={cardVariants2} className="mt-4 text-sm">Build with love by Safiriyu Rapheal</motion.p>
      
    </motion.footer>
  );
};

export default Footer;
