import React, { useState } from 'react';
import AppleMusicLayout from '~/components/layout';

const PlaylistPage = () => {
  const [playlist] = useState([
    { 
      id: 1, 
      title: 'Blinding Lights', 
      artist: 'The Weeknd', 
      explicit: false,
      bg: 'bg-purple-900'
    },
    { 
      id: 2, 
      title: 'Save Your Tears', 
      artist: 'The Weeknd', 
      explicit: true,
      bg: 'bg-blue-900'
    },
    { 
      id: 3, 
      title: 'In Your Eyes', 
      artist: 'The Weeknd', 
      explicit: false,
      bg: 'bg-indigo-900'
    },
    { 
      id: 4, 
      title: 'Starboy', 
      artist: 'The Weeknd', 
      explicit: true,
      bg: 'bg-pink-900'
    },
    { 
      id: 5, 
      title: 'After Hours', 
      artist: 'The Weeknd', 
      explicit: false,
      bg: 'bg-cyan-900'
    }
  ]);

  return (
    <AppleMusicLayout>
      <div className="text-white min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex flex-col md:flex-row px-3 sm:px-6 md:px-6 lg:px-8 xl:px-5 py-4 sm:py-6 space-y-6 md:space-y-0 md:space-x-8 mt-6">
          {/* Cover Image */}
          <div className="self-center w-48 sm:w-64 md:w-64 lg:w-72 xl:w-80 aspect-square">
            <div className="relative w-full pb-[100%]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl sm:rounded-2xl p-0.5 sm:p-1">
                <img 
                  src="/api/placeholder/300/300" 
                  alt="Playlist Cover" 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
          
          {/* Playlist Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 w-full">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mb-2">After Hours</h1>
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg text-neutral-400">The Weeknd</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-green-500 text-black px-4 sm:px-6 md:px-6 lg:px-6 xl:px-8 py-2 sm:py-3 rounded-full flex items-center space-x-2">
                <span className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg">Play</span>
              </button>
            </div>
          </div>
        </div>

        {/* Track List */}
        <div className="flex-grow px-3 sm:px-6 md:px-6 lg:px-8 xl:px-5 mt-4">
          {playlist.map((track, idx) => (
            <div 
              key={track.id} 
              className={`flex items-center justify-between py-2 sm:py-3 md:py-3 rounded-lg hover:bg-neutral-900 px-2 sm:px-2 ${idx%2 == 0 ? "bg-[#0d0d0f]": ""}`}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                {/* Track Image - Increased size for small screens */}
                <div 
                  className={`w-12 sm:w-14 md:w-12 lg:w-12 h-12 sm:h-14 md:h-12 lg:h-12 rounded ${track.bg}`}
                />
                <div className="flex-grow min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-semibold truncate">{track.title}</p>
                    {track.explicit && (
                      <span className="bg-neutral-700 text-neutral-300 px-1 rounded text-[10px] sm:text-xs">E</span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-sm text-neutral-400 truncate">{track.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppleMusicLayout>
  );
};

export default PlaylistPage;