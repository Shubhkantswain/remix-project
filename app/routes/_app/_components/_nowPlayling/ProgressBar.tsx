import React from 'react'

function ProgressBar() {
    return (
        <div className="px-8 mt-8">
            <div className="h-1 bg-zinc-800/50 backdrop-blur-sm rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-white/90 rounded-full transition-all duration-300 ease-out"></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-zinc-400">
                <span>1:23</span>
                <span>3:45</span>
            </div>
        </div>
    )
}

export default ProgressBar