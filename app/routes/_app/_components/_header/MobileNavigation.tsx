import { Link } from '@remix-run/react'
import React from 'react'

function MobileNavigation() {
    return (
        <div className="flex md:hidden items-center space-x-5">
            <Link to={"/"}>
                <button className="hover:text-[#fa586a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><path id="ic_navigation_home" d="M21.343,8.661 L13.448,1.556 C12.625,0.815 11.375,0.815 10.552,1.556 L2.657,8.661 C2.238,9.039 2,9.564 2,10.113 L2,20 C2,21.105 2.943,22 4.105,22 L9,22 L9,13 L15,13 L15,22 L19.895,22 C21.057,22 22,21.105 22,20 L22,10.113 C22,9.564 21.762,9.039 21.343,8.661 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use href="#ic_navigation_home" fill="currentColor"></use></g></svg>
                </button>
            </Link>
            <Link to={"/explore/playlists"}>
                <button className="hover:text-[#fa586a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-compass"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" /><circle cx="12" cy="12" r="10" /></svg>
                </button>
            </Link>
            <button className="hover:text-[#fa586a] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1" /><path d="M7 3v18" /><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" /></svg>
            </button>
            <button className="hover:text-[#fa586a] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </button>
            <button className="hover:text-[#fa586a] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
            </button>
        </div>
    )
}

export default MobileNavigation