import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "@inertiajs/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import menu from "../../../../public/data/menus.json";
import logo from "@/assets/images/Logo/logo-transparent.png";

const Navbar = () => {
    const { menus } = menu;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [hoveredMobileMenu, setHoveredMobileMenu] = useState(null);
    const [isEndHovered, setIsEndHovered] = useState(false);
    const isLargeScreen = useMediaQuery({ minWidth: 1024 });

    const handleMobileMenuOpen = () => {
        setIsMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setIsMobileMenuOpen(false);
    };

    const handleMobileSubmenuHover = (menuId) => {
        setHoveredMobileMenu(menuId);
    };

    const handleMobileSubmenuLeave = () => {
        setHoveredMobileMenu(null);
    };

    const handleEndMenuHover = () => {
        setIsEndHovered(true);
    };

    const handleEndMenuLeave = () => {
        setIsEndHovered(false);
    };

    return (
        <div className="navbar bg-blue-600 font-bold z-10 sticky top-0">
            {/* Mobile Menu */}
            <div className="navbar-start relative z-10">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                        onMouseEnter={handleMobileMenuOpen}
                        onMouseLeave={handleMobileMenuClose}
                    >
                        <Bars3Icon className="h-6 w-6" />

                        {isMobileMenuOpen && (
                            <ul
                                className="menu left-0 top-10 dropdown-content z-[1] p-2 shadow rounded-box w-52"
                                onMouseEnter={handleMobileMenuOpen}
                                onMouseLeave={handleMobileMenuClose}
                            >
                                {menus.length > 0 &&
                                    menus.map((menu) => (
                                        <li
                                            className="text-blue-600 font-bold bg-white relative"
                                            key={menu.id}
                                            onMouseEnter={() =>
                                                handleMobileSubmenuHover(
                                                    menu.id
                                                )
                                            }
                                            onMouseLeave={
                                                handleMobileSubmenuLeave
                                            }
                                        >
                                            <Link to={menu.path}>
                                                {menu.title}
                                            </Link>
                                            {menu?.dropdown?.length > 0 &&
                                                hoveredMobileMenu ===
                                                    menu.id && (
                                                    <ul className="p-2 text-blue-600 font-bold bg-white absolute top-full left-20 z-[1]">
                                                        {menu?.dropdown?.map(
                                                            (dropdownMenu) => (
                                                                <li
                                                                    className=""
                                                                    key={
                                                                        dropdownMenu.id
                                                                    }
                                                                >
                                                                    <Link
                                                                        to={
                                                                            dropdownMenu.path
                                                                        }
                                                                    >
                                                                        {
                                                                            dropdownMenu.title
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>
                </div>
                {isLargeScreen && (
                    <Link to={"/"}>
                        <img className="h-24" src={logo} alt="" />
                    </Link>
                )}
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menus.length > 0 &&
                        menus.map((menu) => (
                            <li
                                className="text-white text-lg relative"
                                key={menu.id}
                                onMouseEnter={() => setHoveredItem(menu.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Link to={menu.path}>{menu.title}</Link>
                                {menu?.dropdown?.length > 0 &&
                                    hoveredItem === menu.id && (
                                        <ul
                                            className="p-2 text-blue-600 font-bold bg-white absolute top-full left-1 z-[1]"
                                            style={{ width: "200px" }}
                                        >
                                            {menu?.dropdown?.map(
                                                (dropdownMenu) => (
                                                    <li
                                                        className="text-blue-600 font-bold bg-white"
                                                        key={dropdownMenu.id}
                                                    >
                                                        <Link
                                                            to={
                                                                dropdownMenu.path
                                                            }
                                                        >
                                                            {dropdownMenu.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                            </li>
                        ))}
                </ul>
            </div>

            {/* End Menu */}
            <div className="navbar-end relative">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                    onMouseEnter={handleEndMenuHover}
                    onMouseLeave={handleEndMenuLeave}
                >
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                    {isEndHovered && (
                        <ul className="menu menu-sm dropdown-content absolute top-full right-0 z-[1] p-2 shadow bg-base-100 w-52">
                            <li>
                                <a className="justify-between">
                                    Profile <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
