import React from 'react';

const UserPage = () => {
  const playlist = {
    title: "Today's Top Hits",
    coverImage: 'https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/4731f943-5683-4832-b200-145fe1dc6172/4731f943-5683-4832-b200-145fe1dc6172--1619766509._SX576_SY576_BL0_QL100__UX250_FMwebp_QL85_.jpg',
    description: "The most popular tracks right now",
    totalSongs: 50,
    duration: "2 hr 45 min",
    tracks: [
      {
        title: "Song One",
        artist: "Artist Name",
        duration: "3:24",
        image: "https://m.media-amazon.com/images/I/41Z7Z9uYlEL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
        plays: "1.2M",
        date: "10-01-2025",
        description: "This memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats andThis memorable melody.beats and memorable melody.beats and memorable melody.beats and memorable melody.beats and memorable melody.beats and memorable melody.beats and memorable melody.beats and memorable melody.beats and memorable melody."
      },
      {
        title: "Song Two",
        artist: "Artist Name",
        duration: "4:12",
        image: "https://m.media-amazon.com/images/I/51Ls+9riaXL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
        plays: "856K",
        date: "09-01-2025",
        description: "An emotional journey through sound and rhythm, this track showcases the artist's vocal range."
      },
    ]
  };

  return (
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
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><defs><path id="ic_action_favorite-a" d="M16,3 C14.499,3 13.092,3.552 12,4.544 C10.908,3.552 9.501,3 8,3 C4.691,3 2,5.691 2,9 C2,14.535 8.379,18.788 11.445,20.832 C11.613,20.944 11.807,21 12,21 C12.193,21 12.387,20.944 12.555,20.832 C15.62,18.788 22,14.535 22,9 C22,5.691 19.309,3 16,3 Z M12,18.797 C9.077,16.832 4,13.186 4,9 C4,6.794 5.794,5 8,5 C9.263,5 10.429,5.592 11.198,6.625 C11.575,7.131 12.425,7.131 12.802,6.625 C13.571,5.592 14.737,5 16,5 C18.206,5 20,6.794 20,9 C20,13.186 14.923,16.832 12,18.797 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use fill-rule="nonzero" href="#ic_action_favorite-a" fill="currentColor"></use></g></svg>
                  Follow
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><defs><path id="ic_action_more-a" d="M19,14 C17.895,14 17,13.105 17,12 C17,10.895 17.895,10 19,10 C20.105,10 21,10.895 21,12 C21,13.105 20.105,14 19,14 Z M14,12 C14,10.895 13.105,10 12,10 C10.895,10 10,10.895 10,12 C10,13.105 10.895,14 12,14 C13.105,14 14,13.105 14,12 Z M7,12 C7,10.895 6.105,10 5,10 C3.895,10 3,10.895 3,12 C3,13.105 3.895,14 5,14 C6.105,14 7,13.105 7,12 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use fill-rule="nonzero" href="#ic_action_more-a" fill="currentColor"></use></g></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Episodes</h2>
            <div className="space-y-4">
              {playlist.tracks.map((track, index) => (
                <div
                  key={index}
                  className="group bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="min-w-[60px]">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="w-16 h-16 rounded-md"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <div className="space-y-1 flex-1">
                          <div className="text-gray-400 text-sm">{track.date}</div>
                          <h3 className="font-medium text-lg truncate">{track.title}</h3>
                          <p className="text-gray-400 text-sm line-clamp-2 max-w-2xl">{track.description}</p>
                        </div>
                        <div className="hidden md:flex items-center gap-4 ml-4">
                          <button className="group-hover:bg-white/20 backdrop-blur-sm bg-white/10 rounded-full p-2 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><defs><path id="ic_playback_play-a" d="M21.54933,11.208 L7.32711083,2.131 C7.05155533,1.955 6.7155554,1.957 6.44177768,2.136 C6.16799996,2.315 6,2.644 6,3 L6,21 C6,21.354 6.16711108,21.683 6.43911102,21.862 C6.57777765,21.954 6.73333318,22 6.8888887,22 C7.038222,22 7.18666641,21.958 7.32177749,21.873 L21.5439967,12.951 C21.8239966,12.775 21.9991077,12.442 22,12.081 C22.0008855,11.72 21.8293299,11.386 21.54933,11.208 Z"></path></defs><g fill-rule="evenodd" fill="none"><rect width="24" height="24"></rect><use href="#ic_playback_play-a" fill="white"></use></g></svg>
                          </button>
                          <div className="text-gray-400 text-sm w-12 text-center">{track.duration}</div>
                          <button className="group-hover:bg-white/20 backdrop-blur-sm bg-white/10 rounded-full p-1.5 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><defs><path id="ic_action_add-a" d="M21,11 L13,11 L13,3 C13,2.448 12.552,2 12,2 C11.448,2 11,2.448 11,3 L11,11 L3,11 C2.448,11 2,11.448 2,12 C2,12.552 2.448,13 3,13 L11,13 L11,21 C11,21.553 11.448,22 12,22 C12.552,22 13,21.553 13,21 L13,13 L21,13 C21.552,13 22,12.552 22,12 C22,11.448 21.552,11 21,11 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use href="#ic_action_add-a" fill="currentColor"></use></g></svg>
                          </button>
                        </div>
                      </div>

                      <div className="md:hidden flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-1.5 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><defs><path id="ic_playback_play-a" d="M21.54933,11.208 L7.32711083,2.131 C7.05155533,1.955 6.7155554,1.957 6.44177768,2.136 C6.16799996,2.315 6,2.644 6,3 L6,21 C6,21.354 6.16711108,21.683 6.43911102,21.862 C6.57777765,21.954 6.73333318,22 6.8888887,22 C7.038222,22 7.18666641,21.958 7.32177749,21.873 L21.5439967,12.951 C21.8239966,12.775 21.9991077,12.442 22,12.081 C22.0008855,11.72 21.8293299,11.386 21.54933,11.208 Z"></path></defs><g fill-rule="evenodd" fill="none"><rect width="24" height="24"></rect><use href="#ic_playback_play-a" fill="white"></use></g></svg>
                          </button>
                          <span className="text-gray-400 text-sm">{track.duration}</span>
                        </div>
                        <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-1.5 transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><defs><path id="ic_action_add-a" d="M21,11 L13,11 L13,3 C13,2.448 12.552,2 12,2 C11.448,2 11,2.448 11,3 L11,11 L3,11 C2.448,11 2,11.448 2,12 C2,12.552 2.448,13 3,13 L11,13 L11,21 C11,21.553 11.448,22 12,22 C12.552,22 13,21.553 13,21 L13,13 L21,13 C21.552,13 22,12.552 22,12 C22,11.448 21.552,11 21,11 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use href="#ic_action_add-a" fill="currentColor"></use></g></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;