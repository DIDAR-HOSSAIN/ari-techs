import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./../../../css/dashboardLayout.css"; // Import your CSS file

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div
            className={`flex h-screen bg-gray-100 ${isSidebarOpen ? "" : "sidebar-collapsed"}`}
        >
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header with toggle button */}
                <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Main content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto p-4">
                        {/* Content passed as children */}
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
