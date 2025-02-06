import React from 'react'
import { useTrackStore } from '~/store/useTrackStore'

function TrackInfo() {
    const { trackDetails } = useTrackStore()

    return (
        <div className="px-8 pt-8 -mt-10">
            <div
                className={`aspect-square w-full max-w-sm lg:max-w-[300px] lg:ml-0 mx-auto bg-zinc-800 rounded-lg mb-8 will-change-transform transition-transform duration-500 ease-out transform ${true ? 'scale-100' : 'scale-95'
                    }`}
            >
                <img
                    src={trackDetails.coverImageUrl || ""}
                    alt="Album art"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            <div className="space-y-1 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold transition-all duration-300">{trackDetails.title}</h2>
                <p className="text-zinc-400 transition-all duration-300">{trackDetails.artist}</p>
            </div>
        </div>
    )
}

export default TrackInfo