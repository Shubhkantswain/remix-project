import React, { useState } from 'react';
import AudioDetailPage from './AudioDetailPage';
import { Play, SkipForward } from 'lucide-react';

const MusicPlayerLayout = ({ children }) => {
  const [showVolume, setShowVolume] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-lg border-b border-gray-600">
          <div className="flex items-center justify-between px-4 lg:px-6 py-4">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold mr-9">FlowTune</span>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-9">
                <button className="flex items-center hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                  <span className="hidden lg:inline ml-2 font-semibold">Home</span>
                </button>
                <button className="flex items-center hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-compass"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" /><circle cx="12" cy="12" r="10" /></svg>
                  <span className="hidden lg:inline ml-2">Podcast</span>
                </button>
                <button className="flex items-center hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1" /><path d="M7 3v18" /><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" /></svg>
                  <span className="hidden lg:inline ml-2">Library</span>
                </button>
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center">
              {/* Desktop Search */}
              <div className="hidden md:flex items-center bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none w-64"
                />
              </div>

              {/* Mobile Icons */}
              <div className="flex md:hidden items-center space-x-5">
                <button className="hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                </button>
                <button className="hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-compass"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" /><circle cx="12" cy="12" r="10" /></svg>
                </button>
                <button className="hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1" /><path d="M7 3v18" /><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" /></svg>
                </button>
                <button className="hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </button>
                <button className="hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
                </button>
              </div>

              {/* Desktop Account */}
              <div className="hidden md:flex items-center space-x-6">
                <button className="hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pb-24 bg-gradient-to-b from-black via-neutral-900 to-black text-gray-300">
          {children}
        </main>

        {/* Playback Controller */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/70 backdrop-blur-lg border-t border-gray-800">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-800">
            <div className="relative w-1/3 h-full bg-blue-500 group">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          <div className="px-4 py-3 flex items-center justify-between">
            {/* Left: Track Info */}
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

            {/* Center: Playback Controls (Hidden on Small Screens) */}
            <div className="hidden md:flex items-center justify-center flex-1 md:w-1/3 space-x-2 md:space-x-4">
              {/* Skip Backward 10s Button (Visible on Larger Screens, Hidden on Medium Screens) */}
              <button className="p-2 text-white hover:text-white transition-colors hidden lg:block md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rewind"><polygon points="11 19 2 12 11 5 11 19" /><polygon points="22 19 13 12 22 5 22 19" /></svg>
              </button>

              <button className="p-2 text-white hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-skip-back"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" x2="5" y1="19" y2="5" /></svg>
              </button>
              <button className="w-10 h-10 bg-[#272727] text-[#272727] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
              </button>
              <button className="p-2 text-white hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-skip-forward"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" x2="19" y1="5" y2="19" /></svg>
              </button>

              {/* Skip Forward 10s Button (Visible on Larger Screens, Hidden on Medium Screens) */}
              <button className="p-2 text-white hover:text-white transition-colors hidden lg:block md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-fast-forward"><polygon points="13 19 22 12 13 5 13 19" /><polygon points="2 19 11 12 2 5 2 19" /></svg>
              </button>
            </div>

            {/* Right: Play Button and Heart Icon for Small Screens */}
            <div className="flex items-center justify-end flex-1 md:w-1/3 space-x-2">
              {/* Play Button for Small Screens (Visible Only on Small Screens) */}
              <button className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
              </button>

              {/* Heart Icon for Small Screens (Visible Only on Small Screens) */}
              <button className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
              </button>

              {/* Volume Control (Hidden on Small Screens) */}
              <div className="hidden md:flex items-center justify-end">
                <div className="relative">
                  <button
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    onClick={() => {
                      setShowVolume(!showVolume);
                      setIsMuted(false);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>
                  </button>

                  {/* Animated Volume Slider */}
                  <div className={`
            absolute bottom-full right-0 mb-2 p-2 bg-gray-800 rounded-lg
            transform transition-all duration-200 origin-bottom-right
            ${showVolume ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
          `}>
                    <div className="h-24 w-1 bg-gray-700 rounded-full relative">
                      <div className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-full w-full h-1/2"></div>
                      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AudioDetailPage showDetails={isOpen} setShowDetails={setIsOpen} />
    </>
  );
};

export default MusicPlayerLayout;