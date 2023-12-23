import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import "../../css/Navbar.css";
import menu from "../../../public/data/menus.json"
import { Link } from '@inertiajs/react';
import logo from '@/AriTechsResource/Logo/logo-transparent.png';

const Navbar = () => {
    const { menus } = menu;
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const user = {
        name: "didar",
        email: "didar@gmail.com",
        photoURL: "developer"
    };

    const handleLogout = () => {
        logout()
            .then()
            .catch();
    }

    return (
      <div className = "navbar sticky top-0 z-50 bg-white" >
        {/* Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="mob-icon btn btn-ghost md:hidden lg:hidden">
            <Bars3Icon className = "h-12 w-12 text-black-500" />
          <ul tabIndex={0} className="mob-menu menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box font-bold w-52 top-8 left-0.5"
          key={menu.id}
          onMouseEnter={() => setHoveredItem(menu.id)}
          onMouseLeave={() => setHoveredItem(null)}
          >
              {/* main menu */}
          {menus.length >0 &&
              menus.map((menu)=> (
          <li className='text-white bg-red-500' key={menu.id}>
                <Link to={menu.path}>{menu.title}</Link>
                {/* Submenu */}
                {menu?.dropdown?.length > 0 && (
                <ul className="p-2 bg-red-500 text-white">
                  {menu?.dropdown?.map(dropdownMenu =>(
                  <li className="" key={dropdownMenu.id}>
                    <Link to={dropdownMenu.path}>{dropdownMenu.title}</Link> 
                  </li>
                  ))}
            </ul>
                  )}
          </li>
              ))}

          </ul>
          </label>
        </div>
        <Link to={"/"}><img className='h-24' src={logo} alt='' /></Link>
      </div>

    {/* Desktop Menu */}
      <div className="menuArea navbar-center md:flex hidden lg:flex">
        {/* main menu */}
        <ul className="menu menu-horizontal px-1">
          {menus.length >0 &&
              menus.map((menu)=> (
          <li className="text-lg text-black font-semibold group inline-block relative" key={menu.id}>
                <Link to={menu.path}>{menu.title}</Link>
                {/* Submenu */}
                {menu?.dropdown?.length > 0 && (
                <ul className = "bg-white text-black" >
                  {menu?.dropdown?.map(dropdownMenu =>(
              <li className="" key={dropdownMenu.id}>
                    <Link to={dropdownMenu.path}>{dropdownMenu.title}</Link> 
                  </li>
                  ))}
            </ul>
                  )}
          </li>
              ))}
        </ul>  
      </div>

      <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>

    </div>
    );
};

export default Navbar;