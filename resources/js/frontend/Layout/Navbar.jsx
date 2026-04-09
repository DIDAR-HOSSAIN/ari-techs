import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "@inertiajs/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import menu from "../../../../public/data/menus.json";
import logo from "@/assets/images/Logo/logo-png.png";
import UserDropdown from "@/SharedComponents/UserDropdown";

const Navbar = ({ user }) => {
    const { menus } = menu;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isLargeScreen = useMediaQuery({ minWidth: 1024 });

    // ✅ Scroll Function
    const scrollToSection = (id) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const el = document.getElementById(id);
        if (el) {
            const yOffset = -80;
            const y = el.offsetTop + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }

        // 👉 mobile menu close after click
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="navbar h-20 bg-cyan-800 font-bold sticky top-0 z-[999]">

            {/* LEFT */}
            <div className="navbar-start">

                {/* MOBILE BUTTON */}
                <button
                    className="btn btn-ghost lg:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </button>

                {/* LOGO */}
                {isLargeScreen && (
                    <Link href="/">
                        <img className="h-20" src={logo} alt="logo" />
                    </Link>
                )}
            </div>

            {/* DESKTOP MENU */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menus.map((menu) => (
                        <li key={menu.id} className="text-white text-lg">

                            {menu.path === "/" ? (
                                <button onClick={() => scrollToSection(menu.id)}>
                                    {menu.title}
                                </button>
                            ) : (
                                <Link href={menu.path}>{menu.title}</Link>
                            )}

                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT */}
            <div className="navbar-end">
                <UserDropdown user={user} />
            </div>

            {/* ✅ MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-[999]">

                    <ul className="flex flex-col divide-y">

                        {menus.map((menu) => (
                            <li key={menu.id}>

                                {menu.path === "/" ? (
                                    <button
                                        onClick={() => scrollToSection(menu.id)}
                                        className="w-full text-left px-5 py-3 text-gray-800 hover:bg-gray-100"
                                    >
                                        {menu.title}
                                    </button>
                                ) : (
                                    <Link
                                        href={menu.path}
                                        className="block px-5 py-3 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {menu.title}
                                    </Link>
                                )}

                            </li>
                        ))}

                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
