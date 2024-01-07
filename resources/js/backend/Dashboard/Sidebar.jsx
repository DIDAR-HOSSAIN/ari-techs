// Sidebar.js
import { Link } from '@inertiajs/react';
import React from 'react';

const Sidebar = ({ isOpen }) => {

    return (
        <div className={`bg-gray-200 min-h-screen ${isOpen ? 'block' : 'hidden'} lg:block`}>
            {/* Sidebar content */}
            <ul className="lg:w-64">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                    {/* Add more sidebar items */}
                </ul>
        </div>
    );
};

export default Sidebar;
