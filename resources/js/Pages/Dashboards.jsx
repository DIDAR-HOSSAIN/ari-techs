import React, { useState, useEffect } from "react";
import Sidebar from "@/backend/Dashboard/Sidebar";
import Header from "@/backend/Dashboard/Header";



const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true); // Default: sidebar open for large devices

    useEffect(() => {
        // Check window width and set initial sidebar state
        const handleResize = () => {
            setIsOpen(window.innerWidth > 768); // Adjust this width as needed for large devices
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div className="dashboard">
            <Header
                isOpen={isOpen}
                toggleSidebar={toggleSidebar}
                closeSidebar={closeSidebar}
            />
            <div className="flex">
                <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
                <div className="main">
                    {/* content */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


