import React, { useContext } from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Earthly-Logo.webp";
import cube from "../../assets/cube.webp";
import Spin from "react-reveal/Spin";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log("log out accentfully"))
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <React.Fragment>
      <li className="mr-1 my-1 font-serif">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? " text-accent rounded font-bold" : " rounded text-white")}
        >
          Home
        </NavLink>
      </li>
      <li className="mr-1 my-1 font-serif">
        <NavLink
          to={`/shop`}
          className={({ isActive }) => (isActive ? " text-accent rounded font-bold" : " rounded text-white")}
        >
          Shop
        </NavLink>
      </li>
      {user?.uid ? (
        <>
          <li className="mr-1 my-1 font-serif">
            <button
              onClick={handleLogOut}
              className="btn btn-outline text-xs normal-case mr-3 text-white hover:bg-white hover:text-black"
            >
              Log out
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="mr-1 my-1 font-serif">
            <NavLink
              to={`/signup`}
              className={({ isActive }) => (isActive ? " text-accent rounded font-bold" : " rounded text-white")}
            >
              Sign up
            </NavLink>
          </li>
        </>
      )}
    </React.Fragment>
  );

  return (
    <section>
      <div className="navbar md:px-20 py-5 nav-bar-bg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box w-32"
            >
              {menuItems}
            </ul>
          </div>
          <div className="lg:flex justify-center items-center ">
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className="w-10 lg:w-20 mx-auto" />
              </Link>
            </div>
            <div className="text-white ml-3 md:ml-10">
              <Link to={"/"} className="normal-case text-3xl font-extrabold font-sans">
                earthly
              </Link>
              <p className="text-xs font-light hidden lg:flex">Sustainable products at affordable prices</p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Spin>
            <div>
              <img className="cursor-pointer cube w-20" src={cube} alt="cube" />
            </div>
          </Spin>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">{menuItems}</ul>
          <button className="btn btn-outline text-xs normal-case mr-3 text-white hover:bg-white hover:text-black">
            Get in touch
          </button>
          <button className="text-4xl text-white">
            <FaShoppingCart></FaShoppingCart>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
