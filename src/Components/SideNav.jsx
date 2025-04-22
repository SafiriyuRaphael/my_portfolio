import { NAVLINK } from "../constant/navLink";
import { HashLink } from "react-router-hash-link";
import useScroll from "../hooks/useScroll";

const SideNav = () => {
  const {scrollWithOffset} = useScroll();
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-[80]">
      {NAVLINK.map((section) => (
        <HashLink
          key={section.id}
          to={`/#${section.id}`}
          scroll={(el) => scrollWithOffset(el)}
          className="group relative"
        >
          <div className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-amber-500 group-hover:scale-125 transition-all duration-300 ease-out" />
          <span className="absolute left-0 -translate-x-full -translate-y-1/2 top-1/2 mr-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium bg-gray-900/80 px-3 py-1 rounded-lg backdrop-blur-sm whitespace-nowrap">
            {section.label}
          </span>
        </HashLink>
      ))}
    </nav>
  );
};

export default SideNav;
