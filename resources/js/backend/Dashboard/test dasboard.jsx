// Header.js
import React from 'react';

const Header = () => {
    return (
        <div className="bg-gray-300 w-full">
            <nav className="p-4 flex justify-between items-center">
                <div>
                    <h1>Dashboard</h1>
                </div>
                <div className="flex items-center">
                    {/* User section */}
                    <div className="mr-4">User Avatar</div>
                    <div>Username</div>
                </div>
            </nav>
        </div>
    );
};

export default Header;



// Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-200 min-h-screen">
            {/* Hamburger icon for mobile */}
            <div className="lg:hidden">
                <button onClick={toggleSidebar} className="p-2 focus:outline-none">
                    <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        {/* Hamburger icon */}
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                            />
                        ) : (
                            // Close icon when sidebar is open
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 7.41l1.41-1.41L12 10.17l4.59-4.58L18 7.41 13.41 12 18 16.59 16.59 18 12 13.41 7.41 18 6 16.59 10.17 12 6 7.41z"
                            />
                        )}
                    </svg>
                </button>
            </div>
            {/* Expanded sidebar for larger screens */}
            <div className={`lg:block ${isOpen ? 'hidden' : 'block'}`}>
                {/* Sidebar content */}
                <ul className="lg:w-64">
                    <li>Dashboard</li>
                    <li>Analytics</li>
                    <li>Reports</li>
                    {/* Add more sidebar items */}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;


// Dashboard.js
import React from 'react';
import Sidebar from '@/backend/Dashboard/Sidebar';
import Header from '@/backend/Dashboard/Header';
// Import MainContent or comment it out if not yet implemented
// import MainContent from './MainContent';

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                {/* <MainContent /> */}
            </div>
        </div>
    );
};

export default Dashboard;
