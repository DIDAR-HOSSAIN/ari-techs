import { Link } from "@inertiajs/react";
import React from "react";

const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
        <div className={`bg-gray-200 min-h-screen ${isOpen ? "" : "hidden"}`}>
            {/* Sidebar content */}
            <ul className="lg:w-64">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                    {/* Add more sidebar items */}
                </ul>
        </div>
    );
};

export default Sidebar;
