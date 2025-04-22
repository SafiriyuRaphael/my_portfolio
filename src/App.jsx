import MyBlog from "./Pages/Blogs"
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import MainPage from "./Pages/Home";
import SideNav from "./Components/SideNav";

function App() {
  return (
    <div className="">
      <Header />
      <SideNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogs" element={<MyBlog />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
