import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "@inertiajs/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import menu from "../../../../public/data/menus.json";
import logo from "@/assets/images/Logo/logo-png.png";
import UserDropdown from "@/SharedComponents/UserDropdown";

const Navbar = ({ user }) => {
  const { menus } = menu;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // 🔥 Scroll handler
  const handleScroll = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const y = el.offsetTop - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setIsMobileOpen(false);
  };

  // 🔥 Reusable Menu Item
  const MenuItem = ({ item, isMobile = false }) => {
    const baseClass = isMobile
      ? "block w-full text-left px-5 py-3 text-gray-800 hover:bg-gray-100"
      : "px-4 py-2 text-white text-lg rounded-md transition hover:bg-white hover:text-blue-600";

    if (item.path === "/") {
      return (
        <button onClick={() => handleScroll(item.id)} className={baseClass}>
          {item.title}
        </button>
      );
    }

    return (
      <Link
        href={item.path}
        className={baseClass}
        onClick={() => isMobile && setIsMobileOpen(false)}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <div className="navbar sticky top-0 z-[999] h-20 bg-blue-600 font-semibold">

      {/* LEFT */}
      <div className="navbar-start">

        {/* Mobile Toggle */}
        <button
          className="btn btn-ghost text-white lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Logo */}
        {isDesktop && (
          <Link href="/">
            <img src={logo} alt="logo" className="h-20" />
          </Link>
        )}
      </div>

      {/* DESKTOP MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          {menus.map((item) => (
            <li key={item.id}>
              <MenuItem item={item} />
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <UserDropdown user={user} />
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col divide-y">
            {menus.map((item) => (
              <li key={item.id}>
                <MenuItem item={item} isMobile />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
