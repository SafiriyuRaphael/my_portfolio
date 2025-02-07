import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ sideBar, setSideBar }) => {
  return (
    <>
      <nav className="sticky top-0 flex justify-between px-7 items-center py-5 md:py-1 bg-slate-800 z-50 rounded-md text-black">
        <Link to="/">
          <img src="/logobg.png" alt="Logo" className="h-28" />
        </Link>
        <ul className="items-center justify-center gap-10 pt-4 hidden md:flex text-black">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <a href="mailto:toniaroyce@gmail.com">
          <button className="btn-ping hidden md:flex bg-transparent rounded-3xl">
            Hire me
          </button>
        </a>
        <a
          className="md:hidden block text-3xl pt-1"
          onClick={() => setSideBar(!sideBar)}
          aria-label="Open menu"
        >{ !sideBar ?
         <>&#9776;</> : <div className="text-red-500 font-bold hover:-translate-y-1 transition-transform duration-700 text-5xl hover:text-red-900">X</div> }
        </a>
      </nav>
    </>
  );
};

export default Nav;
