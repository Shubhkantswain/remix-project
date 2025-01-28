import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import MusicPlayerLayout from '~/components/layout';

const AppleMusicHomepage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const songs = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", cover: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1" },
    { id: 2, title: "Stay", artist: "Kid Laroi & Justin Bieber", cover: "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=780&h=384&q=90&fit=crop&ar=16%3A10" },
    { id: 3, title: "As It Was", artist: "Harry Styles", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqdMPSUobqm-7KslN-d0gdmOgrXHThFUVsA&s" },
    { id: 4, title: "Anti-Hero", artist: "Taylor Swift", cover: "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg" },
    { id: 5, title: "About Damn Time", artist: "Lizzo", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGz1PUWZlcJYgQq5mgijsv5P5pr8z9pfY0Nw&s" },
    { id: 6, title: "Heat Waves", artist: "Glass Animals", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIG32Y_629Q_YhIrkrWf8iMjGWCDZZQ4xeA&s" },
    { id: 7, title: "Bad Habit", artist: "Steve Lacy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&s" },
    { id: 8, title: "Late Night Talking", artist: "Harry Styles", cover: "https://i.ytimg.com/vi/MoCjCw8Wm8s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNBPpUVQFQ3aNHPm6cV3u1nG8Rgg" }
  ];

  const scroll = (direction) => {
    const container = document.getElementById('song-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };

  return (
    <MusicPlayerLayout>
    <div className=" text-white p-4 sm:p-6 md:p-8">
      <header className="mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1">Listen Now</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-400">Your personal music recommendations</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex gap-1 sm:gap-2">
              <button 
                onClick={() => scroll('left')}
                className="p-1.5 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-1.5 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <button className="text-red-500 hover:text-red-600 font-semibold transition-colors flex items-center text-xs sm:text-sm md:text-base">
              Show All
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </button>
          </div>
        </div>
      </header>

      <div className="relative">
        <div 
          id="song-container"
          className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {songs.map((song) => (
            <div key={song.id} className="flex-none w-36 sm:w-40 md:w-44">
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={song.cover} 
                  alt={song.title}
                  className="w-full aspect-square rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-40 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="white" />
                  </button>
                </div>
              </div>
              <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20">
        <div 
          id="song-container"
          className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {songs.map((song) => (
            <div key={song.id} className="flex-none w-36 sm:w-40 md:w-44">
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={song.cover} 
                  alt={song.title}
                  className="w-full aspect-square rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-40 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="white" />
                  </button>
                </div>
              </div>
              <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="relative mt-20">
        <div 
          id="song-container"
          className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {songs.map((song) => (
            <div key={song.id} className="flex-none w-36 sm:w-40 md:w-44">
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={song.cover} 
                  alt={song.title}
                  className="w-full aspect-square rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-40 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="white" />
                  </button>
                </div>
              </div>
              <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </MusicPlayerLayout>
  );
};

export default AppleMusicHomepage;