import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo (2).png'
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    console.log(e.target.value);
    if (e.target.checked) {
      setTheme("dracula");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    // add custom data-theme attribute
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#0076EA] border-b- border-[#571f8e]"
            : "hover:text-[#0076EA]"
        }
      >
        <li className="text-xl font-medium font-serif">Home</li>{" "}
      </NavLink>
      <NavLink
        to="/allArt"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#0076EA] border-b-4 border-[#571f8e]"
            : "hover:text-[#0076EA]"
        }
      >
        <li className="text-xl font-medium font-serif">Assignments</li>{" "}
      </NavLink>
      <NavLink
        to="/addCraft"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#0076EA] border-b-4 border-[#571f8e]"
            : "hover:text-[#0076EA]"
        }
      >
        <li className="text-xl font-medium font-serif"> Create Assignments </li>{" "}
      </NavLink>
      <NavLink
        to="/myCraft"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#0076EA] border-b-4 border-[#571f8e]"
            : "hover:text-[#0076EA]"
        }
      >
        <li className="text-xl font-medium font-serif">Pending Assignments </li>{" "}
      </NavLink>
    </>
  );
  return (
    <div className="navbar   ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  mt-3 z-[2] p-2 shadow bg-[#b26a06] rounded-b-md w-52"
          >
            {navLink}
          </ul>
        </div>
        {/* <a className="lg:text-3xl p-4 font-serif font-semibold">
          <span className="text-[#0076EA]">Artistic</span>
          <span className="text-[#571f8e] ">Vistas</span>
        </a> */}
        <img className="w-52" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-10 px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <label className="cursor-pointer mr-6 mt-2 grid place-items-center">
          <input
            type="checkbox"
            onChange={handleToggle}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <>
          <div className="dropdown dropdown-end z-[2] ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="avatar w-28 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52"
            >
              <div className="space-y-3">
                <h1 className="text-2xl font-serif font-medium">
                  {/* {user?.displayName} */}
                </h1>
                <button className="bg-[#571f8e] px-4  rounded-md text-xl text-white  font-serif font-semibold">
                  Log Out
                </button>
              </div>
            </ul>
          </div>
        </>
        :
        <>
          <Link to="/login">
            <button className="text-2xl bg-[#7b502c] text-white px-4 py-1 font-poppins mr-5 rounded-md">Login</button>
          </Link>
          <Link to="/login">
          <button className="btn text-xl font-poppins btn-outline hover:text-white btn-success">Register</button>
          </Link>
        </>
      </div>
    </div>
    
  );
};

export default Navbar;
