import React from 'react'
import ProgressBar from './ProgressBar';
import LeftTrackInfo from './LeftTrackInfo';
import CenterPlaybackControllers from './CenterPlaybackControllers';
import RightControllers from './RightControllers';

interface PlaybackcontrollerProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Playbackcontroller: React.FC<PlaybackcontrollerProps> = ({ setIsOpen }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/70 backdrop-blur-lg border-t border-gray-800">
            {/* Progress Bar */}
            <ProgressBar />

            <div className="px-4 py-3 flex items-center justify-between">
                {/* Left: Track Info */}
                <LeftTrackInfo setIsOpen={setIsOpen} />

                {/* Center: Playback Controls (Hidden on Small Screens) */}
                <CenterPlaybackControllers />

                {/* Right: Play Button and Heart Icon for Small Screens */}
                <RightControllers />
            </div>
        </div>
    )
}

export default Playbackcontroller