import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row h-screen w-screen overflow-hidden">
        <div className="h-screen w-screen">
          <Outlet />
        </div>
      </div>
      <div className="flex-2">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
