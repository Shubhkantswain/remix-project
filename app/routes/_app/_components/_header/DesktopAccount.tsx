import React, { useState } from 'react';
import { LogOut, Settings, User, HelpCircle } from 'lucide-react';

function DesktopAccount() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: <User className="w-4 h-4" />, text: 'Profile' },
        { icon: <Settings className="w-4 h-4" />, text: 'Settings' },
        { icon: <HelpCircle className="w-4 h-4" />, text: 'Help' },
        { icon: <LogOut className="w-4 h-4" />, text: 'Logout' }
    ];

    return (
        <div className="hidden md:block relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="transition-colors p-2 rounded-full hover:bg-[#727171] bg-[#313232]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><defs><path id="ic_navigation_profile-a" d="M7,6 C7,3.239 9.239,1 12,1 C14.761,1 17,3.239 17,6 C17,8.761 14.761,11 12,11 C9.239,11 7,8.761 7,6 Z M21.948,18.684 C20.868,15.443 17.015,12 12,12 C6.985,12 3.131,15.443 2.051,18.684 C1.931,19.043 2.025,19.44 2.293,19.707 C4.417,21.83 7.864,23 12,23 C16.137,23 19.584,21.83 21.707,19.707 C21.975,19.439 22.068,19.043 21.948,18.684 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use fill-rule="nonzero" href="#ic_navigation_profile-a" fill="currentColor"></use></g></svg>
            </button>

            <div
                className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg
                    bg-gradient-to-b from-black to-gray-900 text-gray-100
                    transform origin-top-right transition-all duration-200 ease-in-out overflow-hidden
                    ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
            >
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <button
                            className="w-full px-4 py-3 text-sm hover:bg-white/10 flex items-center space-x-2 transition-colors"
                            onClick={() => console.log(`Clicked ${item.text}`)}
                        >
                            {item.icon}
                            <span>{item.text}</span>
                        </button>
                        {index < menuItems.length - 1 && (
                            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-2" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DesktopAccount;