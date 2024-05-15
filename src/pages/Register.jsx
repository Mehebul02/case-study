import signUp from "../assets/images/signup-image.jpg";

import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
// import { Typewriter } from "react-simple-typewriter";
// import { Helmet } from "react-helmet-async";
const Register = () => {
  const { createUser,userSignOut,userUpdateProfile } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword,] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    // console.log(name, email, password, image);
    if (password.length < 6) {
      return toast.error("Password should be at least 6 characters");
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      return toast.error("First Characters uppercase and Lowercase Will be ");
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        userUpdateProfile(name,image)

        Swal.fire({
          title: "Success",
          text: "Registration Successfully",
          icon: "success",
        });
        form.reset();
        navigate("/login");
        userSignOut()
      })
      .catch((error) => {
        console.log(error);
        toast.error("Email-already-in-use");
      });
  };
  return (
    <div>
      {/* <Helmet>
        <title>Artistic Vistas | Register</title>
      </Helmet> */}
      <div className=" flex flex-col md:flex lg:flex-row justify-center gap-10 space-x-10 mt-10 max-w-[1300px] mx-auto">
      <Helmet>
      <title> Register - Case Study </title>
    </Helmet>
      <div className="lg:w-1/2 border p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl text-red-700 font-serif font-semibold ">
       
       
      </h1>
      <p className="font-medium ">Enter your details below</p>
      <div className="divider">
        <h1 className="text-center text-3xl font-serif text-[#06ABB2] font-semibold">
          Register Now
        </h1>
      </div>
      <div className="flex mt-2 gap-3"></div>

      <form onSubmit={handleRegister}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl font-serif font-semibold">
              Name
            </span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl font-serif font-semibold">
              Email
            </span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full "
            required
          />
        </label>
        <label className="form-control w-full relative">
          <div className="label">
            <span className="label-text text-xl font-serif font-semibold">
              Password
            </span>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Your Password"
            className="input input-bordered w-full "
            required
          />
          <span
            className=" absolute right-6 top-14"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="text-xl"></FaEyeSlash>
            ) : (
              <FaEye className="text-xl"></FaEye>
            )}
          </span>
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl font-serif font-semibold">
              Image Url
            </span>
          </div>
          <input
            type="text"
            name="image"
            placeholder="Enter Your Image Url"
            className="input input-bordered w-full "
            required
          />
        </label>
        <button className="bg-[#4F1B82] px-3 py-2 rounded-lg text-xl font-serif text-white font-semibold my-6">
          Sign Up
        </button>
        <Toaster />
      </form>

      <p className="text-center text-xl font-serif my-2">
        Already An Account ?{" "}
        <Link className="btn-link" to="/login">
          Login
        </Link>
      </p>
    </div>
    <div>
    <img className="w-80" src={signUp} alt="" />

      {/* <iframe className="w-full aspect-video ..." src={signUp}></iframe> */}
    </div>
   
  </div>
    </div>
  );
};

export default Register;