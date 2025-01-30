import React from 'react'

interface LeftTrackInfoProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftTrackInfo: React.FC<LeftTrackInfoProps> = ({ setIsOpen }) => {
    return (
        <div className="flex items-center flex-1 min-w-0 md:w-1/3">
            <div className="w-12 h-12 bg-gray-800 rounded-md overflow-hidden mr-3 flex-shrink-0 relative group cursor-pointer" onClick={() => setIsOpen(true)}>
                <img
                    src="https://m.media-amazon.com/images/I/51BSAVzJj3L._UX250_FMwebp_QL85_.jpg"
                    alt="Album Art"
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                />
                {/* Maximize Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-maximize-2"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" x2="14" y1="3" y2="10" /><line x1="3" x2="10" y1="21" y2="14" /></svg>
                </div>
            </div>
            <div className="min-w-0">
                <div className="font-medium text-white truncate">Current Track Name That Might Be Long</div>
                <div className="text-sm text-gray-400 truncate">Artist Name</div>
            </div>
        </div>
    )
}

export default LeftTrackInfo