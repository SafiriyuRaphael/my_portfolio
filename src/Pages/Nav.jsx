import { HashLink } from "react-router-hash-link";


const Nav = ({ sideBar, setSideBar }) => {
  return (
    <>
      <nav className="sticky top-0 flex justify-between px-7 items-center py-5 md:py-1 bg-slate-800 z-50  text-black">
        <HashLink to="/">
          <img src="/logobg.png" alt="Logo" className="h-28" />
        </HashLink>
        <ul className="items-center justify-center gap-10 pt-4 hidden md:flex text-black">
          <li>
            <HashLink to="/">Home</HashLink>
          </li>
          <li>
            <HashLink smooth="true" to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink to="/services">Services</HashLink>
          </li>
          <li>
            <HashLink to="/#portfolio">Portfolio</HashLink>
          </li>
          <li>
            <HashLink smooth="true" to="/blogs">Blog</HashLink>
          </li>
          <li>
            <HashLink smooth="true" to="/#contact">Contact</HashLink>
          </li>
        </ul>
        <a href="mailto:toniaroyce@gmail.com">
          <button className="btn-ping hidden md:flex bg-transparent rounded-3xl whitespace-nowrap ml-2">
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
