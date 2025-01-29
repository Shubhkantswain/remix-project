// import { Heart } from "lucide-react";
import { useEffect } from "react";

interface AudioDetailsProps {
    isOpen: boolean;
    onClose: () => void;
}

const AudioDetails = ({ isOpen, onClose }: AudioDetailsProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-50 transform transition-transform duration-200 ease-in-out ${isOpen ? "translate-y-0" : "translate-y-full"
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Full-screen Content Panel */}
            <div className="absolute inset-0 w-full h-full bg-gray-900 overflow-hidden">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/50 sm:bg-black/30 backdrop-blur-none sm:backdrop-blur-sm" />

                {/* Top Bar */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-x"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    </button>
                </div>

                {/* Content */}
                <div className="h-full p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-lg">
                    <div className="max-w-3xl mx-auto">
                        {/* Main Content Layout */}
                        <div className="flex flex-col items-center px-4 sm:px-8 pt-8">
                            {/* Cover Art */}
                            <div className="w-full max-w-[350px] sm:max-w-[300px] mx-auto">
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://i.ytimg.com/vi/MoCjCw8Wm8s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNBPpUVQFQ3aNHPm6cV3u1nG8Rgg"
                                        alt="Album cover"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Track Info */}
                            <div className="mt-8 w-full max-w-xl">
                                {/* Title Bar */}
                                <div className="flex items-center justify-between gap-4">
                                    <div className="relative overflow-hidden flex-1 h-8">
                                        <div className="absolute whitespace-nowrap animate-marquee sm:animate-none text-2xl font-bold text-white">
                                            Track Title - Track Title - arijit singh
                                        </div>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                </div>

                                <p className="mt-2 text-gray-400">Artist Name</p>
                                <p className="text-sm text-gray-500">Album Name • 2024</p>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full max-w-xl mt-6">
                                <div className="relative w-full h-1.5 bg-gray-700 rounded-full">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-white rounded-full"
                                        style={{ width: "30%" }} // Adjust width for progress
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>0:00</span>
                                    <span>3:45</span>
                                </div>
                            </div>

                            {/* Playback Controls */}
                            <div className="w-full max-w-xl mt-6 flex justify-center items-center gap-6">
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-skip-back"
                                    >
                                        <polygon points="19 20 9 12 19 4 19 20" />
                                        <line x1="5" y1="19" x2="5" y2="5" />
                                    </svg>
                                </button>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-play"
                                    >
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                </button>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-skip-forward"
                                    >
                                        <polygon points="5 4 15 12 5 20 5 4" />
                                        <line x1="19" y1="5" x2="19" y2="19" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioDetails;