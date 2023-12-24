import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from '@inertiajs/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import menu from "../../../public/data/menus.json";
import logo from '@/assets/images/Logo/logo-transparent.png'

const Navbar = () => {
  const { menus } = menu;
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleMenuHover = () => {
    setIsMenuOpen(true);
    setIsSubmenuOpen(false); // Close submenu when menu is hovered
  };

  const handleSubmenuHover = () => {
    setIsSubmenuOpen(true);
  };

  const handleSubmenuLeave = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <div className="navbar bg-base-100">
    {/* Mobile Menu */}
    <div className="navbar-start">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
          onMouseEnter={handleMenuHover}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <Bars3Icon className="h-6 w-6" />
        </div>
        <ul
          tabIndex={0}
          className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${isMenuOpen ? 'block' : 'hidden'}`}
          onMouseEnter={handleMenuHover}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          {/* Main menu */}
          {menus.length > 0 &&
            menus.map((menu) => (
              <li
                className='text-white bg-red-500'
                key={menu.id}
                onMouseEnter={handleSubmenuHover}
                onMouseLeave={handleSubmenuLeave}
              >
                <Link to={menu.path}>{menu.title}</Link>
                {/* Submenu */}
                {menu?.dropdown?.length > 0 && isSubmenuOpen && (
                  <ul className="p-2 bg-red-500 text-white absolute top-full left-20 z-[1]">
                    {menu?.dropdown?.map((dropdownMenu) => (
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
      {isLargeScreen && (
        <Link to={"/"}>
          <img className='h-24' src={logo} alt='' />
        </Link>
      )}
    </div>

    {/* Desktop Menu */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1"
      key={menu.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        {/* main menu */}
        {menus.length > 0 &&
          menus.map((menu) => (
            <li
              className='text-white bg-red-500 relative'
                key={menu.id}
                onMouseEnter={() => setHoveredItem(menu.id)}
                onMouseLeave={() => setHoveredItem(null)}
            >
              <Link to={menu.path}>{menu.title}</Link>
              {/* Submenu */}
              {menu?.dropdown?.length > 0 && isHovered && hoveredItem === menu.id && (
                <ul
                  className="p-2 bg-red-500 text-white absolute top-full left-1 z-[1]"
                  style={{ width: "200px" }}
                >
                  {menu?.dropdown?.map((dropdownMenu) => (
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

  <div className="navbar-end">
    <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            {isHovered && (
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
            )}
          </div>
  </div>       

</div>
    );
};

export default Navbar;