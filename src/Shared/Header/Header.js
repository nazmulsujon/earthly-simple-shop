import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Earthly-Logo.webp";
import cube from "../../assets/cube.webp";
import Spin from "react-reveal/Spin";

const Header = () => {
  const menuItems = (
    <React.Fragment>
      <li className="mr-1 my-1 font-semibold">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? " text-info rounded font-bold" : " rounded text-white")}
        >
          Home
        </NavLink>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <NavLink
          to={`/shop`}
          className={({ isActive }) => (isActive ? " text-info rounded font-bold" : " rounded text-white")}
        >
          Shop
        </NavLink>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <NavLink
          to={`/signup`}
          className={({ isActive }) => (isActive ? " text-info rounded font-bold" : " rounded text-white")}
        >
          Sign up
        </NavLink>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <button className="btn btn-ghost btn-outline text-white font-bold normal-case">Log out</button>
      </li>
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
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-500 rounded-box w-32"
            >
              {menuItems}
            </ul>
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="text-white ml-3 md:ml-10">
            <Link to={"/"} className="normal-case text-3xl font-bold">
              earthly
            </Link>
            <p>Sustainable products at affordable prices</p>
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
