import { MoreHorizontal } from 'lucide-react';
import React from 'react';
// import { Play, Pause, SkipForward, Heart, MoreHorizontal, Clock3 } from 'lucide-react';
import MusicPlayerLayout from '~/components/layout';

const PlaylistPage = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const playlist = {
    title: "Today's Top Hits",
    coverImage: 'https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/b66b1ed4-7586-4301-8a02-fa942c74b39b/b66b1ed4-7586-4301-8a02-fa942c74b39b/f87f83f5-3ba9-4e2d-ae63-e186e1ac6043-2127985474._UX358_FMwebp_QL85_.jpg',
    description: "The most popular tracks right now",
    totalSongs: 50,
    duration: "2 hr 45 min",
    tracks: [
      {
        title: "Song One",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:24",
        image: "https://m.media-amazon.com/images/I/41Z7Z9uYlEL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
        dateAdded: "2 days ago"
      },
      {
        title: "Song Two",
        artist: "Artist Name",
        album: "Album Name",
        duration: "4:12",
        image: "https://m.media-amazon.com/images/I/51Ls+9riaXL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
        dateAdded: "3 days ago"
      },
      {
        title: "Song Three",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:18",
        image: "https://m.media-amazon.com/images/I/51PndTwTN1L._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
        dateAdded: "5 days ago"
      },
      {
        title: "Song Four",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:55",
        image: "https://m.media-amazon.com/images/I/41-Ia7Xl3vL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
        dateAdded: "1 week ago"
      },
      {
        title: "Song Five",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:30",
        image: "https://m.media-amazon.com/images/I/51iq1zWdgwL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
        dateAdded: "1 week ago"
      },

      {
        title: "Song Six",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:30",
        image: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/4731f943-5683-4832-b200-145fe1dc6172/4731f943-5683-4832-b200-145fe1dc6172--1619766509._UX358_FMwebp_QL85_.jpg",
        dateAdded: "1 week ago"
      },
      {
        title: "Song Six",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:30",
        image: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/4731f943-5683-4832-b200-145fe1dc6172/4731f943-5683-4832-b200-145fe1dc6172--1619766509._UX358_FMwebp_QL85_.jpg",
        dateAdded: "1 week ago"
      },
      {
        title: "Song Six",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:30",
        image: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/4731f943-5683-4832-b200-145fe1dc6172/4731f943-5683-4832-b200-145fe1dc6172--1619766509._UX358_FMwebp_QL85_.jpg",
        dateAdded: "1 week ago"
      },
      {
        title: "Song Six",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:30",
        image: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/4731f943-5683-4832-b200-145fe1dc6172/4731f943-5683-4832-b200-145fe1dc6172--1619766509._UX358_FMwebp_QL85_.jpg",
        dateAdded: "1 week ago"
      },
      {
        title: "Song Six",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:30",
        image: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/4731f943-5683-4832-b200-145fe1dc6172/4731f943-5683-4832-b200-145fe1dc6172--1619766509._UX358_FMwebp_QL85_.jpg",
        dateAdded: "1 week ago"
      },
      {
        title: "Song Six",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:30",
        image: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/4731f943-5683-4832-b200-145fe1dc6172/4731f943-5683-4832-b200-145fe1dc6172--1619766509._UX358_FMwebp_QL85_.jpg",
        dateAdded: "1 week ago"
      },
      {
        title: "Song Six",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:30",
        image: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/4731f943-5683-4832-b200-145fe1dc6172/4731f943-5683-4832-b200-145fe1dc6172--1619766509._UX358_FMwebp_QL85_.jpg",
        dateAdded: "1 week ago"
      }
    ]
  };

  return (
    <MusicPlayerLayout>
      <div className="text-white relative min-h-screen">
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

        <div className="relative z-10">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="py-8 md:py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={playlist.coverImage}
                alt={playlist.title}
                className="w-56 h-56 md:w-64 md:h-64 rounded-lg shadow-xl"
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

            <div className="pb-8">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-800">
                    <th className="text-left py-4 w-12 pl-4">#</th>
                    <th className="text-left">Title</th>
                    <th className="text-left hidden md:table-cell">Album</th>
                    <th className="text-left hidden md:table-cell">Date Added</th>
                    <th className="text-right hidden md:table-cell w-24">
                      {/* <Clock3 size={16} className="ml-auto mr-8" /> */}
                      <div className="ml-auto mr-8">clock</div>
                      </th>
                    <th className="text-right w-16">More</th>
                  </tr>
                </thead>
                <tbody>
                  {playlist.tracks.map((track, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-800/50 group rounded-lg border-b border-gray-700 mt-4"
                    >
                      <td className="py-6 pl-4">{index + 1}</td>
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
                      <td className="hidden md:table-cell text-gray-400">{track.dateAdded}</td>
                      <td className="text-right hidden md:table-cell text-gray-400 pr-8">{track.duration}</td>
                      <td className="text-right pr-4">
                        {/* <MoreHorizontal size={16} className="cursor-pointer text-gray-400 hover:text-white ml-auto" /> */}
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
