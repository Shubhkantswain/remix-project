import { Track } from "gql/graphql";
import { memo, useCallback } from "react";
import PlayButton from "./PlayButton";
import TrackInfo from "./TrackInfo";

// Types
interface TrackCardProps {
  track: Track;
  isPlaying: boolean;
  onTrackSelect: (track: Track, isPlaying: boolean) => void;
}

// Separate components for better organization and performance
const TrackCard = memo(({ track, isPlaying, onTrackSelect }: TrackCardProps) => {
  const handleClick = useCallback(() => {
    onTrackSelect(track, isPlaying);
  }, [track, isPlaying, onTrackSelect]);

  return (
    <div className="flex-none w-36 sm:w-40 md:w-44 transition-transform duration-300">
      <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <img
          src={track.coverImageUrl || ""}
          alt={`Album cover for ${track.title}`}
          className="w-full aspect-square rounded-lg transition-opacity duration-300 group-hover:opacity-40 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center" onClick={handleClick}>
          <PlayButton isPlaying={isPlaying} />
        </div>
      </div>
      <TrackInfo title={track.title} artist={track.artist} />
    </div>
  );
});

export default TrackCard