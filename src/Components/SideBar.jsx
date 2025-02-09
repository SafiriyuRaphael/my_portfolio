import { HashLink } from "react-router-hash-link";

const SideBar = ({sideBar, setSideBar}) => {
  const handleSidebar=(()=>{
    setSideBar(false)
  })
  return (
    <div className={``}>
       <nav className={`flex  flex-col top-0 fixed w-1/2 bg-black shadow-inner border-r-2 h-full shadow-white z-50 rounded-md ${!sideBar? "-translate-x-full" : "translate-x-0"} transition-transform duration-1000`} >
          <div className="flex w-full bg-slate-400">
            <img src="/logobg.png" alt="Logo" className="w-440" />
         
          </div>
          <ul className="flex flex-col justify-center items-center gap-1 pt-4 w-full text-center">
            <li className="w-full hover:-translate-y-1 transition-transform duration-1000" onClick={handleSidebar}>
              <HashLink smooth="true" to="/" className="rounded-md border-2 border-solid block p-3 bg-[gray-500] w-full hover:bg-gray-900">Home</HashLink>
            </li>
            <li className="w-full hover:-translate-y-1 transition-transform duration-1000" onClick={handleSidebar}>
              <HashLink smooth="true" to="/#about" className="rounded-md border-2 border-solid block p-3 bg-[gray-500] hover:bg-gray-900 w-full">About</HashLink>
            </li>
            <li className="w-full hover:-translate-y-1 transition-transform duration-1000" onClick={handleSidebar}>
              <HashLink smooth="true" to="/services" className="rounded-md border-2 border-solid block p-3 bg-[gray-500] hover:bg-gray-900 w-full" >Services</HashLink>
            </li>
            <li className="w-full hover:-translate-y-1 transition-transform duration-1000" onClick={handleSidebar}>
              <HashLink smooth="true" to="/#portfolio" className="rounded-md border-2 border-solid block p-3 bg-[gray-500] hover:bg-gray-900 w-full" >Portfolio</HashLink>
            </li>
            <li className="w-full hover:-translate-y-1 transition-transform duration-1000" onClick={handleSidebar}>
              <HashLink smooth="true" to="/blogs" className="rounded-md border-2 border-solid block p-3 bg-[gray-500] hover:bg-gray-900 w-full" >Blog</HashLink>
            </li>
            <li className="w-full hover:-translate-y-1 transition-transform duration-1000" onClick={handleSidebar}>
              <HashLink smooth="true" to="/#contact" className="rounded-md border-2 border-solid block p-3 bg-[gray-500] hover:bg-gray-900 w-full" >Contact</HashLink>
            </li>
            <a href="mailto:toniaroyce@gmail.com" className=""> <button className="w-full btn-ping flex  rounded-md bg-green-800" >
              Hire Me
            </button></a>
          </ul>
        </nav>
    </div>
  )
}

export default SideBar