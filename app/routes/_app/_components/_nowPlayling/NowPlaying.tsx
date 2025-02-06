import React, { useEffect, useState } from 'react';
import Header from './Header';
import TrackInfo from './TrackInfo';
import ProgressBar from './ProgressBar';
import TrackControllers from './TrackControllers';
import { useTrackStore } from '~/store/useTrackStore';

interface NowPlayingProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  progress: number;
  currentTime: string;
  duration: string;
  handleSeek: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const NowPlaying: React.FC<NowPlayingProps> = ({ isOpen, setIsOpen, progress, currentTime, duration, handleSeek }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { trackDetails } = useTrackStore()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black overflow-y-auto will-change-transform transform-gpu transition-transform duration-200 ease-in-out z-50 ${isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
    >
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${trackDetails.coverImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto min-h-full">
        {/* Header */}
        <Header setIsOpen={setIsOpen} />

        {/* Album Art and Info */}
        <TrackInfo />

        {/* Progress Bar */}
        <ProgressBar progress={progress} currentTime={currentTime} duration={duration} handleSeek={handleSeek}/>

        {/* Controls */}
        <TrackControllers />
      </div>
    </div>
  );
};

export default NowPlaying;