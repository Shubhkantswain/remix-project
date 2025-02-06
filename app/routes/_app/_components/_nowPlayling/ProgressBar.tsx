import React from 'react'

interface ProgressBarProps {
    currentTime: string;
    duration: string;
    progress: number;
    handleSeek: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentTime, duration, progress, handleSeek }) => {
    return (
        <div className="px-8 mt-8">
            <div className="h-1 bg-zinc-800/50 backdrop-blur-sm rounded-full overflow-hidden cursor-pointer" onClick={(e) => handleSeek(e)}>
                <div className="h-full w-1/3 bg-white/90 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-zinc-400">
                <span>{currentTime}</span>
                <span>{duration}</span>
            </div>
        </div>
    )
}

export default ProgressBar