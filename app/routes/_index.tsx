import React, { useState } from 'react';
// import { Play, Heart, List, MoreVertical } from 'lucide-react';
import AppleMusicLayout from '~/components/layout';

const PlaylistPage = () => {
  const [liked, setLiked] = useState(false);
  const [playlist] = useState([
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
    { id: 2, title: 'Save Your Tears', artist: 'The Weeknd', duration: '3:35' },
    { id: 3, title: 'In Your Eyes', artist: 'The Weeknd', duration: '3:55' },
    { id: 4, title: 'Starboy', artist: 'The Weeknd', duration: '3:50' },
    { id: 5, title: 'After Hours', artist: 'The Weeknd', duration: '3:22' }
  ]);

  return (
    <AppleMusicLayout>
      <div className=" text-white min-h-screen flex flex-col">
        {/* Playlist Details */}
        <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-8">
          {/* Album Image */}
          <div className="self-center w-64 sm:w-80 md:w-96 lg:w-[500px] aspect-square">
            <div className="relative w-full pb-[100%]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl p-1">
                <img 
                  src="/api/placeholder/300/300" 
                  alt="Playlist Cover" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Playlist Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 w-full">
            <div>
              <h1 className="text-3xl font-bold mb-2">After Hours</h1>
              <p className="text-neutral-400">The Weeknd</p>
            </div>

            <div className="flex items-center space-x-4">
              {/* <Heart 
                onClick={() => setLiked(!liked)}
                className={`w-8 h-8 ${liked ? 'text-red-500 fill-current' : 'text-white'}`}
              /> */}
              <button className="bg-green-500 text-black px-6 py-3 rounded-full flex items-center space-x-2">
                {/* <Play className="w-5 h-5" /> */}
                <span>Play</span>
              </button>
            </div>
          </div>
        </div>

        {/* Track List */}
        <div className="flex-grow px-4 md:px-8">
          {playlist.map((track, index) => (
            <div 
              key={track.id} 
              className="flex items-center justify-between py-4 border-b border-neutral-800 hover:bg-neutral-900 px-2 rounded"
            >
              <div className="flex items-center space-x-4">
                <span className="text-neutral-500 w-6 text-right">{index + 1}</span>
                <div>
                  <p className="font-semibold">{track.title}</p>
                  <p className="text-sm text-neutral-400">{track.artist}</p>
                </div>
              </div>
              <span className="text-neutral-400">{track.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </AppleMusicLayout>
  );
};

export default PlaylistPage;