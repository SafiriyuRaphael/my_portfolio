import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleCloseMenu = () => setMenu(false);

  return (
    <header>
      {!menu && (
        <nav className="sticky top-0 flex justify-between px-7 items-center py-5 md:py-1 bg-[#14213d] z-50 rounded-md text-black">
          <Link to="/">
            <img src="/logobg.png" alt="Logo" className="w-16" />
          </Link>
          <ul className="items-center justify-center gap-10 pt-4 hidden md:flex text-black">
            <li>
              <Link to="/" onClick={handleCloseMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleCloseMenu}>About</Link>
            </li>
            <li>
              <Link to="/services" onClick={handleCloseMenu}>Services</Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={handleCloseMenu}>Portfolio</Link>
            </li>
            <li>
              <Link to="/blogs" onClick={handleCloseMenu}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleCloseMenu}>Contact</Link>
            </li>
          </ul>
          <a href="mailto:toniaroyce@gmail.com">
            <button className="md:block hidden">Hire me</button>
          </a>
          <a
            className="md:hidden block text-3xl pt-1"
            onClick={() => setMenu(true)}
            aria-label="Open menu"
          >
            &#9776;
          </a>
        </nav>
      )}
      {menu && (
        <nav className="flex justify-between px-3 items-center flex-col shadow-md top-0 fixed w-screen bg-[#FF6663] z-50 rounded-md">
          <div className="flex justify-between w-full m-2">
            <img src="/logobg.png" alt="Logo" className="w-14" />
            <p
              className="text-4xl pt-1 text-red-600 font-extrabold pr-2 cursor-pointer"
              onClick={handleCloseMenu}
              aria-label="Close menu"
            >
              X
            </p>
          </div>
          <ul className="flex flex-col justify-center items-center gap-1 pt-4 w-full text-center">
            <li className="w-full">
              <Link to="/" className="rounded-md border-2 border-solid block p-3 bg-gray-500 w-full" onClick={handleCloseMenu}>Home</Link>
            </li>
            <li className="w-full">
              <Link to="/about" className="rounded-md border-2 border-solid block p-3 bg-gray-500 w-full" onClick={handleCloseMenu}>About</Link>
            </li>
            <li className="w-full">
              <Link to="/services" className="rounded-md border-2 border-solid block p-3 bg-gray-500 w-full" onClick={handleCloseMenu}>Services</Link>
            </li>
            <li className="w-full">
              <Link to="/portfolio" className="rounded-md border-2 border-solid block p-3 bg-gray-500 w-full" onClick={handleCloseMenu}>Portfolio</Link>
            </li>
            <li className="w-full">
              <Link to="/blogs" className="rounded-md border-2 border-solid block p-3 bg-gray-500 w-full" onClick={handleCloseMenu}>Blog</Link>
            </li>
            <li className="w-full">
              <Link to="/contact" className="rounded-md border-2 border-solid block p-3 bg-gray-500 w-full" onClick={handleCloseMenu}>Contact</Link>
            </li>
            <a href="mailto:toniaroyce@gmail.com" className="w-full"> <button className="w-full" >
              Hire Me
            </button></a>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Nav;
