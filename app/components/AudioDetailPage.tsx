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
    const [volume, setVolume] = useState<number>(50);

    return (
        <div
            className={`fixed inset-0 z-50 
            ${isOpen
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : 'translate-y-full opacity-0 pointer-events-none'
                }
            transition-all duration-300 ease-in-out overflow-hidden`}
            style={{
                zIndex: 100,
                background: 'linear-gradient(-45deg, #121212, #1E1E1E, #0D0D0D, #2C2C2C, #1A1A1A, #3A3A3A, #111827, #1F2937, #18181B, #27272A)',
                backgroundSize: '400% 400%',
                animation: 'gradientBG 20s ease infinite',
                position: 'fixed'
            }}
        >
            <style>
                {`
            @keyframes gradientBG {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `}
            </style>

            <div
                className="h-full overflow-y-auto pb-24"
                style={{
                    overscrollBehavior: 'contain'
                }}
            >
                <div className="sticky top-0 z-10 pt-4 flex justify-center items-center">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                </div>

                <div className="px-4 sm:px-8 flex flex-col items-center">
                    <div className={`w-full max-w-md aspect-square mb-6 sm:mb-8 transition-all duration-300 
                    ${isPlaying ? 'scale-100' : 'scale-75 opacity-80'}`}>
                        <img
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXA1xoHjwgaUQRbR2ijwtqLkVNU4xcJ0Rndg&s'}
                            alt={track.title}
                            className="w-full h-full object-cover rounded-lg shadow-2xl"
                        />
                    </div>

                    <div className="text-center w-full max-w-md flex items-center justify-between">
                        <div className="text-left w-[calc(100%-40px)]">
                            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-2 truncate max-w-full">{track.title}</h2>
                            <div className="flex items-center space-x-2 text-gray-300 text-xs sm:text-sm">
                                <span className="truncate">{track.artist}</span>
                                <span className="text-xs">•</span>
                                <span className="truncate">{track.album}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setLiked(!liked)}
                            className={`${liked ? 'text-green-500' : 'text-white'} hover:scale-110 transition-transform`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </button>
                    </div>

                    <div className="w-full max-w-md mt-6 sm:mt-8">
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                            <span>0:00</span>
                            <span>{track.duration}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1">
                            <div className="bg-white h-1 rounded-full w-1/2"></div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center space-x-7 sm:space-x-6 mt-8 sm:mt-12 w-full max-w-md">
                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                        </button>

                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-skip-back"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" x2="5" y1="19" y2="5" /></svg>
                        </button>

                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="bg-white rounded-full p-3 sm:p-4 hover:scale-105 transition-transform"
                        >
                            {isPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pause"><rect x="14" y="4" width="4" height="16" rx="1" /><rect x="6" y="4" width="4" height="16" rx="1" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                            )}
                        </button>

                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-skip-forward"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" x2="19" y1="5" y2="19" /></svg>
                        </button>

                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rotate-cw"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>
                        </button>
                    </div>

                    <div className="w-full max-w-md mt-6 sm:mt-8 flex items-center space-x-4">
                        <button
                            onClick={() => setVolume(Math.max(0, volume - 10))}
                            className="text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-1">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                            </svg>
                        </button>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={(e) => setVolume(Number(e.target.value))}
                            className="w-full h-1 bg-gray-700 rounded-full appearance-none cursor-pointer"
                        />

                        <button
                            onClick={() => setVolume(Math.min(100, volume + 10))}
                            className="text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioDetailPage;