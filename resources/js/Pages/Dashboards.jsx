// Dashboard.js
import React, { useState } from 'react';
import Sidebar from '@/backend/Dashboard/Sidebar';
import Header from '@/backend/Dashboard/Header';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex">
            <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
            <div className="flex-1">
                <Header isOpen={isOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
                {/* Main content */}
            </div>
        </div>
    );
};

export default Dashboard;