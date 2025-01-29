import React from 'react';
// import { Play, Pause, SkipForward, Heart, MoreHorizontal, Clock3 } from 'lucide-react';
import MusicPlayerLayout from '~/components/layout';

const PlaylistPage = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const playlist = {
    title: "Today's Top Hits",
    coverImage: 'https://m.media-amazon.com/images/I/51QsSipMLdL._UX358_FMwebp_QL85_.jpg',
    description: "The most popular tracks right now",
    totalSongs: 50,
    duration: "2 hr 45 min",
    tracks: [
      {
        title: "Song One",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:24",
        image: "/api/placeholder/60/60"
      },
      {
        title: "Song Two",
        artist: "Artist Name",
        album: "Album Name",
        duration: "4:12",
        image: "/api/placeholder/60/60"
      },
      {
        title: "Song Three",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:18",
        image: "/api/placeholder/60/60"
      },
      {
        title: "Song Four",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:55",
        image: "/api/placeholder/60/60"
      },
      {
        title: "Song Five",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:30",
        image: "/api/placeholder/60/60"
      }
    ]
  };

  return (
    <MusicPlayerLayout>
      <div className="text-white relative min-h-screen">
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,1) 100%), url(${playlist.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            filter: 'blur(20px)',
            opacity: '0.6',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="p-4 sm:p-6 md:p-8">
            {/* Header Section */}
            <div className="py-8 md:py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={playlist.coverImage}
                alt={playlist.title}
                className="w-60 h-60 md:w-64 md:h-64 rounded-lg shadow-xl"
              />
              <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold">{playlist.title}</h1>
                <p className="text-gray-400">{playlist.description}</p>
                <div className="text-sm text-gray-400">
                  {playlist.totalSongs} songs • {playlist.duration}
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full"
                  >
                    {/* {isPlaying ? <Pause size={20} /> : <Play size={20} />} */}
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                </div>
              </div>
            </div>

            {/* Tracks Section */}
            <div className="pb-8">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-800">
                    <th className="text-left py-4 w-16">#</th>
                    <th className="text-left">Title</th>
                    <th className="text-left hidden md:table-cell">Album</th>
                    <th className="text-right pr-8">
                      {/* <Clock3 size={16} /> */}
                    </th>
                    <th className="w-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {playlist.tracks.map((track, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-800/50 group"
                    >
                      <td className="py-4">{index + 1}</td>
                      <td>
                        <div className="flex items-center gap-4">
                          <img
                            src={track.image}
                            alt={track.title}
                            className="w-10 h-10 rounded"
                          />
                          <div>
                            <div className="font-medium">{track.title}</div>
                            <div className="text-sm text-gray-400">{track.artist}</div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden md:table-cell text-gray-400">{track.album}</td>
                      <td className="text-right text-gray-400 pr-8">{track.duration}</td>
                      <td>
                        <div className="flex items-center justify-end gap-4 opacity-0 group-hover:opacity-100">
                          {/* <Heart size={16} className="cursor-pointer hover:text-green-500" /> */}
                          {/* <MoreHorizontal size={16} className="cursor-pointer" /> */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MusicPlayerLayout>
  );
};

export default PlaylistPage;