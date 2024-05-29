import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo (2).png";
import useAuth from "../../hooks/useAuth";
import { HashLoader } from "react-spinners";
const Navbar = () => {
  const { user, userSignOut, loading } = useAuth();

  const [theme, setTheme] = useState("light");

  // Function to handle theme toggle
  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme preference to localStorage
    document.documentElement.setAttribute("data-theme", newTheme); // Apply theme to document
  };

  useEffect(() => {
    // Load theme preference from localStorage on initial render
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme); // Apply theme to document
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader height={140} radius={9} width={40} color="#36d7b7" />
      </div>
    );
  }
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
        to="/assignments"
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
     
      {user && (
        <NavLink
          to="/pending"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#0076EA] border-b-4 border-[#571f8e]"
              : "hover:text-[#0076EA]"
          }
        >
          <li className="text-xl font-medium font-serif">
            Pending Assignments{" "}
          </li>{" "}
        </NavLink>
      )}
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
       <Link to='/'>
       <img className="w-28 lg:w-52" src={logo} alt="" />
       </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-10 px-1">{navLink}</ul>
      </div>
      <div className="navbar-end space-x-7">
      <label className="cursor-pointer ml-10 mt-2 grid place-items-center">
          <input
            type="checkbox"
            name="checked"
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
    {
      user ? <div>
     <Link to='/dashboard/studentHome'> <button className="bg-[#5554E2] text-white font-semibold px-2 py-2 rounded-md">Dashboard</button></Link>
     </div>:''
    }
       
        {user ? (
          <>
            <div className="dropdown dropdown-end z-[2] ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="avatar w-56 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52"
              >
                <div className="space-y-3">
                 
                 
                  <button
                    onClick={userSignOut}
                    className="bg-[#571f8e] px-4  rounded-md text-xl text-white  font-serif font-semibold"
                  >
                    Log Out
                  </button>
                </div>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="text-2xl bg-[#7b502c] text-white px-4 py-1 font-poppins mr-5 rounded-md">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn text-xl font-poppins btn-outline hover:text-white btn-success">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
