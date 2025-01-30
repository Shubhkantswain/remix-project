import React from 'react'

function ProgressBar() {
    return (
        <div className="w-full h-0.5 bg-gray-800">
            <div className="relative w-1/3 h-full bg-white group">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
        </div>
    )
}

export default ProgressBar