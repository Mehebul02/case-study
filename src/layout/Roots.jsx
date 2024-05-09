import { Outlet } from "react-router-dom";
import Navbar from "../components/Headers/Navbar";
import Navbar2 from "../components/Headers/Navbar2";
import Hero from "../components/Headers/Hero";

const Roots = () => {
    return (
        <div>
            <Navbar2/>
          <div className="p-5">
          <Navbar/>
          <Hero/>
          </div>
            <Outlet/>
        </div>
    );
};

export default Roots;