import React from 'react';
import { Maximize2 } from 'lucide-react';
import { useTrackStore } from '~/store/useTrackStore';
import PlaceholderTrack from '~/routes/_app._index/_components/PlaceholderTrack';

type LeftTrackInfoProps = {
    setIsOpen: (isOpen: boolean) => void;
};

const LeftTrackInfo: React.FC<LeftTrackInfoProps> = ({ setIsOpen }) => {
    const { trackDetails } = useTrackStore();

    const handleExpandClick = () => {
        if (trackDetails.id) {
            setIsOpen(true);
        }
    };

    const isTrackSelected = Boolean(trackDetails.id);
    
    return (
        <article className="flex items-center flex-1 min-w-0 md:w-1/3">
            <button 
                className={`
                    w-12 h-12 bg-gray-800 rounded-md overflow-hidden mr-3 
                    flex-shrink-0 relative group 
                    ${isTrackSelected ? "cursor-pointer" : "cursor-default"}
                `}
                onClick={handleExpandClick}
                disabled={!isTrackSelected}
            >
                {trackDetails.coverImageUrl ? (
                    <img
                        src={trackDetails.coverImageUrl}
                        alt={`${trackDetails.title} album cover`}
                        className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                    />
                ) : (
                    <PlaceholderTrack index={1} />
                )}
                
                {isTrackSelected && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity bg-black/40 group-hover:opacity-100">
                        <Maximize2 className="w-6 h-6" />
                    </div>
                )}
            </button>

            <div className="min-w-0">
                <h2 className="font-medium text-white truncate">
                    {trackDetails.title || "No Track Selected"}
                </h2>
                <p className="text-sm text-gray-400 truncate">
                    {trackDetails.artist || "Artist Name"}
                </p>
            </div>
        </article>
    );
};

export default LeftTrackInfo;

