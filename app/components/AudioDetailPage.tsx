import React, { useState } from 'react';
import { ChevronDown, Play, Pause, Heart, MoreVertical } from 'lucide-react';

interface AudioDetailPageProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const AudioDetailPage: React.FC<AudioDetailPageProps> = ({
    isOpen,
    setIsOpen,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [liked, setLiked] = useState(false);
    const [volume, setVolume] = useState(50);
    const [isMuted, setIsMuted] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleLike = () => {
        setLiked(!liked);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value));
        setIsMuted(false);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const VolumeIcon = () => {
        if (isMuted) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5L6 9H2v6h4l5 4z" />
                    <line x1="22" x2="16" y1="4" y2="10" />
                    <line x1="16" x2="22" y1="4" y2="10" />
                </svg>
            );
        }
        if (volume > 50) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5L6 9H2v6h4l5 4z" />
                    <path d="M15.54 11.5a5 5 0 0 1 0 1" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
            );
        }
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4z" />
                <path d="M15.54 11.5a5 5 0 0 1 0 1" />
            </svg>
        );
    };

    return (
        <div
            className={`fixed inset-0 bg-neutral-900 transition-transform duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
            style={{ zIndex: 100 }}
        >
            {/* Down Arrow */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                <button
                    onClick={handleClose}
                    className="text-neutral-400 hover:text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto pb-20">
                <div className="flex flex-col items-center px-6 pt-16 space-y-8">
                    {/* Album Cover - Centered */}
                    <div className="w-full max-w-96 aspect-square flex justify-center items-center">
                        <img
                            src={'audioTrack.coverImage'}
                            className="w-full max-w-96 h-full max-h-96 object-cover rounded-lg shadow-lg"
                            alt="Album Cover"
                        />
                    </div>

                    {/* Rest of the component remains unchanged */}
                    <div className="w-full max-w-md flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-white text-left">{'audioTrack.title'}</h2>
                            <p className="text-neutral-400 text-left">{'audioTrack.artist'}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleLike}
                                className="text-neutral-400 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                            </button>
                            <button
                                className="text-neutral-400 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Playback Controls */}
                    <div className="w-full max-w-md">
                        <div className="w-full h-1 bg-neutral-700 rounded-full mb-2">
                            <div
                                className="h-1 bg-white rounded-full"
                                style={{ width: '40%' }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-xs text-neutral-400 mb-4">
                            <span>1:23</span>
                            <span>-2:45</span>
                        </div>

                        {/* Control Buttons */}
                        <div className="flex justify-center items-center space-x-8">
                            <button className="text-neutral-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-skip-back"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" x2="5" y1="19" y2="5" /></svg>
                            </button>
                            <button
                                onClick={togglePlay}
                                className="bg-white text-black rounded-full p-4 hover:bg-neutral-200"
                            >
                                {isPlaying ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pause"><rect x="14" y="4" width="4" height="16" rx="1" /><rect x="6" y="4" width="4" height="16" rx="1" /></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                                )}
                            </button>
                            <button className="text-neutral-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-skip-forward"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" x2="19" y1="5" y2="19" /></svg>
                            </button>
                        </div>

                        {/* Volume Control */}
                        <div className="flex items-center space-x-4 mt-6">
                            <button onClick={toggleMute} className="text-neutral-400 hover:text-white">
                                <VolumeIcon />
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                className="w-full h-1 bg-neutral-700 rounded-full appearance-none"
                                style={{
                                    background: `linear-gradient(to right, white ${isMuted ? 0 : volume}%, #404040 ${isMuted ? 0 : volume}%)`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioDetailPage;