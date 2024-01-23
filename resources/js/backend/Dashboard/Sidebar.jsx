// Sidebar.jsx
import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import "./../../../css/sidebar.css"; // Import your CSS file

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [isContentVisible, setContentVisibility] = useState(true);

    const handleSidebarClick = () => {
        setContentVisibility(!isContentVisible);
        toggleSidebar();
    };

    return (
        <div
            className={`bg-gray-300 min-h-screen sidebar ${
                isContentVisible ? "" : "collapsed"
            }`}
            onClick={handleSidebarClick}
        >
            {/* Sidebar content */}
            <ul className="lg:w-64">
                <li>
                    <Link href="/dashboards">Dashboard</Link>
                </li>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                {/* Add more sidebar items */}
            </ul>
        </div>
    );
};

export default Sidebar;
