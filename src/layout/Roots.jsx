import { Outlet } from "react-router-dom";
import Navbar from "../components/Headers/Navbar";
import Navbar2 from "../components/Headers/Navbar2";
import Hero from "../components/Headers/Hero";
import Footer from "../components/Footer";

const Roots = () => {
    return (
        <div>
            <Navbar2/>
          <div className="p-5">
          <Navbar/>
        
          </div>
            <div className="min-h-[calc(100ch-300px)]">
            <Outlet/>
            </div>
                <Footer/>
        </div>
    );
};

export default Roots;