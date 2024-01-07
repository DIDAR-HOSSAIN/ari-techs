import React from 'react';

const Header = ({ isOpen, toggleSidebar, closeSidebar }) => {
    const handleSidebarToggle = () => {
        if (isOpen) {
            closeSidebar(); // Close sidebar if open
        } else {
            toggleSidebar(); // Toggle sidebar if closed
        }
    };

    return (
        <div className="bg-gray-300 w-full">
            <nav className="p-4 flex justify-between items-center">
            <div className="lg:hidden">
                        <button onClick={handleSidebarToggle} className="p-2 focus:outline-none">
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6 7.41l1.41-1.41L12 10.17l4.59-4.58L18 7.41 13.41 12 18 16.59 16.59 18 12 13.41 7.41 18 6 16.59 10.17 12 6 7.41z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                <div>
                    <h1>Dashboard</h1>
                </div>
                <div className="flex items-center">
                    {/* Hamburger icon for mobile */}

                    {/* Other elements in the header */}
                    <div className="mr-4">User Avatar</div>
                    <div>Username</div>
                </div>
            </nav>
        </div>
    );
};

export default Header;