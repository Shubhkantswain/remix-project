interface Song {
    id: number;
    title: string;
    artist: string;
    cover: string;
}

const songs: Song[] = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", cover: "https://m.media-amazon.com/images/I/41u8hprs3sL._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg" },
    { id: 2, title: "Stay", artist: "Kid Laroi & Justin Bieber", cover: "https://m.media-amazon.com/images/I/41+FHJiQr3L._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg" },
    { id: 3, title: "As It Was", artist: "Harry Styles", cover: "https://m.media-amazon.com/images/I/51BSAVzJj3L._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg" },
    { id: 4, title: "Anti-Hero", artist: "Taylor Swift", cover: "https://m.media-amazon.com/images/I/512sT1yzl1L._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg" },
    { id: 5, title: "About Damn Time", artist: "Lizzo", cover: "https://m.media-amazon.com/images/I/51FkjVcxs-L._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg" },
    { id: 6, title: "Heat Waves", artist: "Glass Animals", cover: "https://m.media-amazon.com/images/I/51J7m8LdYeL._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg" },
    { id: 7, title: "Bad Habit", artist: "Steve Lacy", cover: "https://m.media-amazon.com/images/I/41UZRyNICWL._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg" },
    { id: 8, title: "Late Night Talking", artist: "Harry Styles", cover: "https://m.media-amazon.com/images/I/51P89lFqKaL._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg" }
];

function TrackLists() {
    return (
        <>
            {songs.map((song) => (
                <div
                    key={song.id}
                    className="flex-none w-36 sm:w-40 md:w-44 transition-transform duration-300"
                >
                    <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <img
                            src={song.cover}
                            alt={`Album cover for ${song.title}`}
                            className="w-full aspect-square rounded-lg transition-opacity duration-300 group-hover:opacity-40 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/10 backdrop-blur-lg"
                                aria-label={`Play ${song.title}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                            </button>
                        </div>
                    </div>
                    <h3 className="mt-2 font-semibold truncate text-xs sm:text-sm md:text-base">{song.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate text-[10px] md:text-sm">{song.artist}</p>
                </div>
            ))}
        </>
    )
}

export default TrackLists