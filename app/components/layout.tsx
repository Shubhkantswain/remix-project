import React, { ReactNode, useState } from 'react';
import { Home, Search, Library, User, Bell, Settings, Plus, Heart, Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import AudioDetailPage from './AudioDetailPage';



const MobileAudioPlayer = ({
    track = {
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        albumArt: '/api/placeholder/300/300'
    }
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [liked, setLiked] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    return (
        <>
            <div
                className="md:hidden w-[95%] mx-auto bg-[#1f1f1f] py-2 px-3 rounded-lg mb-2 absolute bottom-16 left-1/2 transform -translate-x-1/2 z-40"
                onClick={() => setIsDetailsOpen(true)}
            >
                <div className="flex items-center space-x-3">
                    <img
                        src={"https://media.licdn.com/dms/image/v2/C4E0BAQHoBQsz2JsOqw/company-logo_200_200/company-logo_200_200/0/1631344197976?e=2147483647&v=beta&t=83zJTZOm4ClO6VXYjxOtf4WCsOtTwAUvYWwjelDVhjc"}
                        alt={`Album art for ${track.title}`}
                        className="w-10 h-10 rounded-md object-cover"
                    />
                    <div className="flex-grow overflow-hidden">
                        <p className="text-xs font-medium truncate">{track.title}</p>
                        <p className="text-[10px] text-gray-400 truncate">{track.artist}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setLiked(!liked);
                            }}
                            className={`${liked ? 'text-red-500' : 'text-white'}`}
                        >
                            <Heart className="w-4 h-4" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsPlaying(!isPlaying);
                            }}
                        >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>
            <AudioDetailPage isOpen={isDetailsOpen} setIsOpen={setIsDetailsOpen} />
        </>
    );
};


const AppleMusicLayout = ({ children }: { children: ReactNode }) => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    return (
        <div className="flex h-screen bg-black text-white">
            {/* Left Sidebar */}
            <aside className="hidden md:block w-64 bg-zinc-900 p-4 overflow-y-auto">
                <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        <span className="text-lg">Home</span>
                    </div>
                    <div className="flex items-center space-x-3 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        <span className="text-lg">Search</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/* <Library className="w-6 h-6" /> */}
                        <span className="text-lg">Library</span>
                    </div>
                    <div className="border-t border-zinc-700 mt-4 pt-4">
                        <div className="flex items-center space-x-3">
                            {/* <Plus className="w-6 h-6" /> */}
                            <span className="text-lg">Create Playlist</span>
                        </div>
                        <div className="flex items-center space-x-3 mt-4">
                            {/* <Heart className="w-6 h-6 text-red-500" /> */}
                            <span className="text-lg">Liked Songs</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Container */}
            <div className="flex flex-col flex-grow">
                {/* Enhanced Header */}
                <header className="p-4 flex justify-between items-center bg-zinc-900/50 backdrop-blur-md">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold text-white">Apple Music</h1>
                        <nav className="hidden md:flex space-x-4 text-gray-300">
                            <button className="hover:text-white transition-colors">Browse</button>
                            <button className="hover:text-white transition-colors">Radio</button>
                            <button className="hover:text-white transition-colors">Playlists</button>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                            className="relative hover:text-gray-300"
                        >
                            {/* <Bell className="w-6 h-6" /> */}
                            {isNotificationOpen && (
                                <div className="absolute top-full right-0 mt-2 w-64 bg-zinc-800 rounded-lg shadow-lg p-4 z-50">
                                    <p className="text-sm">No new notifications</p>
                                </div>
                            )}
                        </button>

                        <button className="hover:text-gray-300">
                            {/* <Settings className="w-/6 h-6" /> */}
                        </button>

                        <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 transition-colors">
                            {/* <User className="w-5 h-5" /> */}
                            {/* <span className="hidden md:block text-sm">Profile</span> */}
                        </button>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-grow overflow-y-auto p-0 bg-gradient-to-b from-zinc-900 to-black">
                    {children}
                </main>

                {/* Mobile Audio Player */}
                <MobileAudioPlayer />

                {/* Mobile Navigation Footer */}
                <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-black via-zinc-900 to-black py-3 px-4 z-50">
                    <div className="flex justify-around items-center">
                        <button className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                            <span className="text-xs mt-1">Home</span>
                        </button>
                        <button className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            <span className="text-xs mt-1">Search</span>
                        </button>
                        <button className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1" /><path d="M7 3v18" /><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" /></svg>
                            <span className="text-xs mt-1">Library</span>
                        </button>
                        <button className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                            <span className="text-xs mt-1">Favorites</span>
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AppleMusicLayout;