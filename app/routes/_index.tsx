import React, { useState } from 'react';
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
      <div className="text-white p-4 sm:p-6 md:p-8">
        <header className="mb-4 md:mb-6">
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">New Year, New You</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button className="w-full font-bold sm:w-auto py-1 px-3 text-xs sm:text-sm bg-[#29292a] text-white rounded-full transition-transform transform hover:scale-110 duration-300 ease-in-out">
                Show All
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            id="song-container"
            className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-serif"
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
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>



        <header className="mb-4 md:mb-6 mt-12">
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">New Year, New You</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button className="w-full font-bold sm:w-auto py-1 px-3 text-xs sm:text-sm bg-[#29292a] text-white rounded-full transition-transform transform hover:scale-110 duration-300 ease-in-out">
                Show All
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            id="song-container"
            className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-serif"
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
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>


        <header className="mb-4 md:mb-6 mt-12">
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">New Year, New You</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button className="w-full font-bold sm:w-auto py-1 px-3 text-xs sm:text-sm bg-[#29292a] text-white rounded-full transition-transform transform hover:scale-110 duration-300 ease-in-out">
                Show All
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            id="song-container"
            className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-serif"
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
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>



        <header className="mb-4 md:mb-6 mt-12">
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">New Year, New You</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button className="w-full font-bold sm:w-auto py-1 px-3 text-xs sm:text-sm bg-[#29292a] text-white rounded-full transition-transform transform hover:scale-110 duration-300 ease-in-out">
                Show All
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            id="song-container"
            className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-serif"
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
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>



        <header className="mb-4 md:mb-6 mt-12">
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">New Year, New You</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button className="w-full font-bold sm:w-auto py-1 px-3 text-xs sm:text-sm bg-[#29292a] text-white rounded-full transition-transform transform hover:scale-110 duration-300 ease-in-out">
                Show All
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            id="song-container"
            className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-serif"
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
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>




        <header className="mb-4 md:mb-6 mt-12">
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">New Year, New You</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button className="w-full font-bold sm:w-auto py-1 px-3 text-xs sm:text-sm bg-[#29292a] text-white rounded-full transition-transform transform hover:scale-110 duration-300 ease-in-out">
                Show All
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            id="song-container"
            className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-serif"
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
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>





        <header className="mb-4 md:mb-6 mt-12">
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">New Year, New You</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button className="w-full font-bold sm:w-auto py-1 px-3 text-xs sm:text-sm bg-[#29292a] text-white rounded-full transition-transform transform hover:scale-110 duration-300 ease-in-out">
                Show All
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            id="song-container"
            className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-serif"
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
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>




        <header className="mb-4 md:mb-6 mt-12">
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">New Year, New You</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button className="w-full font-bold sm:w-auto py-1 px-3 text-xs sm:text-sm bg-[#29292a] text-white rounded-full transition-transform transform hover:scale-110 duration-300 ease-in-out">
                Show All
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            id="song-container"
            className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-serif"
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
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>




        <header className="mb-4 md:mb-6 mt-12">
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">New Year, New You</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button className="w-full font-bold sm:w-auto py-1 px-3 text-xs sm:text-sm bg-[#29292a] text-white rounded-full transition-transform transform hover:scale-110 duration-300 ease-in-out">
                Show All
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            id="song-container"
            className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-serif"
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
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>

        <header className="mb-4 md:mb-6 mt-12">
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">New Year, New You</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button className="w-full font-bold sm:w-auto py-1 px-3 text-xs sm:text-sm bg-[#29292a] text-white rounded-full transition-transform transform hover:scale-110 duration-300 ease-in-out">
                Show All
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            id="song-container"
            className="flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-serif"
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
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
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