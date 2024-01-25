import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

const UserDropdown = () => {
    const [isEndHovered, setIsEndHovered] = useState(false);

    const handleEndMenuHover = () => {
        setIsEndHovered(true);
    };

    const handleEndMenuLeave = () => {
        setIsEndHovered(false);
    };

    return (
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                    onMouseEnter={handleEndMenuHover}
                    onMouseLeave={handleEndMenuLeave}
                >
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                    {isEndHovered && (
                        <ul className="menu menu-sm dropdown-content absolute top-full right-0 z-[1] p-2 shadow bg-base-100 w-52">
                          
                                        <Link href={route('profile.edit')}>Profile</Link>
                                        <Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Link>
                                    
                            <li>
                                <a>Settings</a>
                            </li>
                        </ul>
                    )}
                </div>
    );
};

export default UserDropdown;