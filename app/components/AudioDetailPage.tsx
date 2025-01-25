import React, { useState } from 'react';

interface Track {
    title: string;
    artist: string;
    albumArt: string;
    album: string;
    duration: string;
}

interface AudioDetailPageProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    track?: Track;
}

const AudioDetailPage: React.FC<AudioDetailPageProps> = ({ 
    isOpen, 
    setIsOpen,
    track = {
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        albumArt: '/api/placeholder/300/300',
        album: 'After Hours',
        duration: '3:42'
    }
}) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [liked, setLiked] = useState<boolean>(false);

    return (
        <div 
            className={`fixed inset-0 z-50 bg-gradient-to-b from-[#1f1f1f] to-black 
                ${isOpen ? 'translate-y-0' : 'translate-y-full'}
                transition-transform duration-300 ease-in-out`}

                style={{zIndex: 100}}
        >
            {/* Close Button */}
            <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-4 left-4 z-10"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </button>

            {/* Album Art Container */}
            <div className="pt-16 px-8 flex flex-col items-center">
                <div className="w-full max-w-md aspect-square mb-8">
                    <img 
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXA1xoHjwgaUQRbR2ijwtqLkVNU4xcJ0Rndg&s'} 
                        alt={track.title} 
                        className="w-full h-full object-cover rounded-lg shadow-2xl"
                    />
                </div>

                {/* Track Info */}
                <div className="text-center w-full max-w-md">
                    <h2 className="text-3xl font-bold text-white mb-2">{track.title}</h2>
                    <div className="flex justify-center items-center space-x-2 text-gray-300">
                        <span>{track.artist}</span>
                        <span className="text-xs">•</span>
                        <span>{track.album}</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-md mt-8">
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                        <span>0:00</span>
                        <span>{track.duration}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                        <div className="bg-white h-1 rounded-full w-1/2"></div>
                    </div>
                </div>

                {/* Player Controls */}
                <div className="flex justify-center items-center space-x-8 mt-12 w-full max-w-md">
                    <button className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 12.5l-6 4.5-6-4.5v5h12z"/><path d="M6 9l6-4.5 6 4.5"/>
                        </svg>
                    </button>

                    <button className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 19 2 12 11 5 11 19"></polygon>
                            <polygon points="22 19 13 12 22 5 22 19"></polygon>
                        </svg>
                    </button>

                    <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-white text-black rounded-full p-4 hover:scale-105 transition-transform"
                    >
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"/>
                            </svg>
                        )}
                    </button>

                    <button className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="13 19 22 12 13 5 13 19"></polygon>
                            <polygon points="2 19 11 12 2 5 2 19"></polygon>
                        </svg>
                    </button>

                    <button 
                        onClick={() => setLiked(!liked)}
                        className={`${liked ? 'text-green-500' : 'text-white'} hover:scale-110 transition-transform`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                </div>

                {/* Additional Controls */}
                <div className="mt-12 w-full max-w-md flex justify-between items-center text-gray-400">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 3l4 4 4-4M12 7v14"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AudioDetailPage;