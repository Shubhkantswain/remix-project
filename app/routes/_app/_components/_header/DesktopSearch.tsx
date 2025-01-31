import React from 'react'

function DesktopSearch() {
    return (
        <div className="hidden md:flex items-center bg-white backdrop-blur-sm rounded-full px-4 py-2 mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b2b2b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none w-64"
            />
        </div>
    )
}

export default DesktopSearch