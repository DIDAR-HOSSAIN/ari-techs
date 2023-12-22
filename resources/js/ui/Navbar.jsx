import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import "../../css/Navbar.css";
import menu from "../../../public/data/"

const Navbar = () => {
    const {menus} = menu;

    return (
    <div className = "navbar sticky top-0 z-50 bg-white" >
    {/* Mobile Menu */}
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="mob-icon btn btn-ghost md:hidden lg:hidden">
        <Bars3Icon className = "h-12 w-12 text-black-500" />
      <ul tabIndex={0} className="mob-menu menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box font-bold w-52 top-8 left-0.5">
      
      {menus.length > 0 &&
    menus.map((menu) => (
        <li className='text-white bg-red-500' key={menu.id}>
            <Link to={menu.path}>{menu.title}</Link>
            {/* Submenu */}
            {menu.dropdown && menu.dropdown.length > 0 && (
                <ul className="p-2 bg-red-500 text-white">
                    {menu.dropdown.map((dropdownMenu) => (
                        <li className="" key={dropdownMenu.id}>
                            <Link to={dropdownMenu.path}>{dropdownMenu.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    ))
}

        {/* <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li> */}
      </ul>
      </label>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;