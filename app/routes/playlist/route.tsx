import React from "react";
import { Play, Heart, MoreHorizontal } from "lucide-react";
import MusicPlayerLayout from "~/components/layout";

const songs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", duration: "3:22", img: "https://via.placeholder.com/50" },
  { id: 2, title: "Save Your Tears", artist: "The Weeknd", duration: "3:35", img: "https://via.placeholder.com/50" },
  { id: 3, title: "Levitating", artist: "Dua Lipa", duration: "3:24", img: "https://via.placeholder.com/50" },
  { id: 4, title: "Peaches", artist: "Justin Bieber", duration: "3:18", img: "https://via.placeholder.com/50" },
  { id: 5, title: "Industry Baby", artist: "Lil Nas X", duration: "3:32", img: "https://via.placeholder.com/50" },
];

const PlaylistPage = () => {
  
  return (
    <MusicPlayerLayout>
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-800 p-6 rounded-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="Playlist Cover"
          className="w-32 h-32 rounded-lg object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">My Playlist</h1>
          <p className="text-gray-400">5 Songs • 18 min 11 sec</p>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700 text-gray-400 text-left">
              <th className="py-3">#</th>
              <th className="py-3">Cover</th>
              <th className="py-3">Title</th>
              <th className="py-3">Artist</th>
              <th className="py-3 text-right">Duration</th>
              <th className="py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr
                key={song.id}
                className="border-b border-gray-700 hover:bg-gray-800 transition duration-200"
              >
                <td className="py-3">{index + 1}</td>
                <td>
                  <img src={song.img} alt={song.title} className="w-12 h-12 rounded-md object-cover" />
                </td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td className="text-right">{song.duration}</td>
                <td className="text-right flex justify-end gap-3">
                  <Play className="cursor-pointer hover:text-green-500" />
                  <Heart className="cursor-pointer hover:text-red-500" />
                  <MoreHorizontal className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </MusicPlayerLayout>
  );
};

export default PlaylistPage;
