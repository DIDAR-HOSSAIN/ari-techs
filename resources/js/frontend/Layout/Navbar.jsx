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

// import React, { useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import { Link } from "@inertiajs/react";
// import { Bars3Icon } from "@heroicons/react/24/solid";
// import menu from "../../../../public/data/menus.json";
// import logo from "@/assets/images/Logo/logo-png.png";
// import UserDropdown from "@/SharedComponents/UserDropdown";

// const Navbar = ({ user }) => {
//     const { menus } = menu;
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     // const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
//     const [hoveredItem, setHoveredItem] = useState(null);
//     const [hoveredMobileMenu, setHoveredMobileMenu] = useState(null);
//     const isLargeScreen = useMediaQuery({ minWidth: 1024 });


//             const scrollToSection = (id) => {
//         // 👉 HOME হলে top এ যাবে
//         if (id === "home") {
//             window.scrollTo({ top: 0, behavior: "smooth" });
//             return;
//         }

//         // 👉 অন্য section
//         const el = document.getElementById(id);
//         if (el) {
//             const yOffset = -80; // navbar height
//             const y = el.offsetTop + yOffset;

//             window.scrollTo({ top: y, behavior: "smooth" });
//         }
//         };

//     const handleMobileMenuOpen = () => {
//         setIsMobileMenuOpen(true);
//     };

//     const handleMobileMenuClose = () => {
//         setIsMobileMenuOpen(false);
//     };

//     const handleMobileSubmenuHover = (menuId) => {
//         setHoveredMobileMenu(menuId);
//     };

//     const handleMobileSubmenuLeave = () => {
//         setHoveredMobileMenu(null);
//     };

//     return (
//         <div className="navbar h-24 bg-cyan-800 font-bold z-[999] sticky top-0">
//             {/* Mobile Menu */}
//             <div className="navbar-start relative z-[999]">
//                 <div className="dropdown">
//                     <div
//                         tabIndex={0}
//                         role="button"
//                         className="btn btn-ghost lg:hidden"
//                         onMouseEnter={handleMobileMenuOpen}
//                         onMouseLeave={handleMobileMenuClose}
//                     >
//                         <Bars3Icon className="h-6 w-6" />

//                         {isMobileMenuOpen && (
//                             <ul
//                                 className="menu left-0 top-10 dropdown-content z-[1] p-2 shadow rounded-box w-52"
//                                 onMouseEnter={handleMobileMenuOpen}
//                                 onMouseLeave={handleMobileMenuClose}
//                             >
//                                 {menus.length > 0 &&
//                                     menus.map((menu) => (
//                                         <li
//                                             className="text-blue-600 font-bold bg-white relative"
//                                             key={menu.id}
//                                             onMouseEnter={() =>
//                                                 handleMobileSubmenuHover(
//                                                     menu.id
//                                                 )
//                                             }
//                                             onMouseLeave={
//                                                 handleMobileSubmenuLeave
//                                             }
//                                         >
//                                             <Link href={menu.path}>
//                                                 {menu.title}
//                                             </Link>
//                                             {menu?.dropdown?.length > 0 &&
//                                                 hoveredMobileMenu ===
//                                                     menu.id && (
//                                                     <ul className="p-2 text-blue-600 font-bold bg-white absolute top-full left-20 z-[1]">
//                                                         {menu?.dropdown?.map(
//                                                             (dropdownMenu) => (
//                                                                 <li
//                                                                     className=""
//                                                                     key={
//                                                                         dropdownMenu.id
//                                                                     }
//                                                                 >
//                                                                     <Link
//                                                                         to={
//                                                                             dropdownMenu.path
//                                                                         }
//                                                                     >
//                                                                         {
//                                                                             dropdownMenu.title
//                                                                         }
//                                                                     </Link>
//                                                                 </li>
//                                                             )
//                                                         )}
//                                                     </ul>
//                                                 )}
//                                         </li>
//                                     ))}
//                             </ul>
//                         )}
//                     </div>
//                 </div>
//                 {isLargeScreen && (
//                     <Link to={"/"}>
//                         <img className="h-36" src={logo} alt="" />
//                     </Link>
//                 )}
//             </div>

//             {/* Desktop Menu */}
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {/* {menus.length > 0 &&
//                         menus.map((menu) => (
//                             <li
//                                 className="text-white text-lg relative"
//                                 key={menu.id}
//                                 onMouseEnter={() => setHoveredItem(menu.id)}
//                                 onMouseLeave={() => setHoveredItem(null)}
//                             >
//                                 <Link href={menu.path}>{menu.title}</Link>
//                                 {menu?.dropdown?.length > 0 &&
//                                     hoveredItem === menu.id && (
//                                         <ul
//                                             className="p-2 text-blue-600 font-bold bg-white absolute top-full left-1 z-[1]"
//                                             style={{ width: "200px" }}
//                                         >
//                                             {menu?.dropdown?.map(
//                                                 (dropdownMenu) => (
//                                                     <li
//                                                         className="text-blue-600 font-bold bg-white"
//                                                         key={dropdownMenu.id}
//                                                     >
//                                                         <Link
//                                                             to={
//                                                                 dropdownMenu.path
//                                                             }
//                                                         >
//                                                             {dropdownMenu.title}
//                                                         </Link>
//                                                     </li>
//                                                 )
//                                             )}
//                                         </ul>
//                                     )}
//                             </li>
//                         ))} */}

//                         {menus.map((menu) => (
//                         <li key={menu.id} className="text-white text-lg">

//                             {menu.path === "/" ? (
//                             // 👉 HOME SCROLL
//                             <button
//                                 onClick={() => scrollToSection(menu.id)}
//                                 className="cursor-pointer"
//                             >
//                                 {menu.title}
//                             </button>
//                             ) : (
//                             // 👉 NORMAL PAGE
//                             <Link href={menu.path}>{menu.title}</Link>
//                             )}

//                         </li>
//                         ))}
//                 </ul>
//             </div>

//             {/* End Menu */}
//             <div className="navbar-end relative">
//                 <UserDropdown user={user} />
//                 {/* <div className="text-white text-lg">{user?.name}</div> */}
//             </div>
//         </div>
//     );
// };

// export default Navbar;
