// import { Heart } from 'lucide-react';
import { useEffect } from 'react';

interface AudioDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}

const AudioDetails = ({ isOpen, onClose }: AudioDetailsProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-200 ease-in-out ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Full-screen Content Panel */}
      <div 
        className="absolute inset-0 w-full h-full bg-gray-900 overflow-hidden"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/30 backdrop-blur-none sm:backdrop-blur-sm" />

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            {/* <Heart size={24} /> */}
          </button>
        </div>

        {/* Content */}
        <div className="h-full p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-lg">
          <div className="max-w-3xl mx-auto">
            {/* Main Content Layout */}
            <div className="flex flex-col items-center px-4 sm:px-8 pt-8">
              {/* Cover Art - Increased size more for mobile */}
              <div className="w-full max-w-[350px] sm:max-w-[300px] mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://i.ytimg.com/vi/MoCjCw8Wm8s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNBPpUVQFQ3aNHPm6cV3u1nG8Rgg"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Track Info and Controls */}
              <div className="mt-8 w-full max-w-xl">
                {/* Track Info - Left aligned */}
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white">Track Title</h2>
                  <p className="mt-2 text-gray-400">Artist Name</p>
                  <p className="text-sm text-gray-500">Album Name • 2024</p>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 space-y-2">
                  <div className="h-2 bg-gray-700 rounded-full w-full">
                    <div className="w-1/3 h-full bg-green-500 rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 w-full">
                    <span>1:23</span>
                    <span>3:45</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="mt-8 space-y-6">
                  <div className="flex items-center justify-center gap-6">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button className="p-4 bg-white rounded-full text-black hover:scale-105 transition-transform">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>

                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center gap-4 w-full">
                    <svg className="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full">
                      <div className="w-2/3 h-full bg-green-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lyrics Section */}
              <div className="mt-8 w-full max-w-xl text-left">
                <h3 className="text-lg font-semibold text-white">Lyrics</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Sample lyrics text here...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioDetails;