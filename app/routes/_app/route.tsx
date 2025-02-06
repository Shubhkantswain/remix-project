// File: app/routes/_app.tsx
import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";
import Header from "./_components/_header/Header";
import Playbackcontroller from "./_components/_playbackcontroller/Playbackcontroller";
import NowPlaying from "./_components/_nowPlayling/NowPlaying";

export default function AppLayout() {
    return (
        <>
            <div className="bg-[#090a0a] text-white min-h-screen flex flex-col">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto pb-24 bg-gradient-to-b from-black via-neutral-900 to-black text-gray-300">
                    <Outlet />
                </main>

                {/* Playback Controller */}
                <Playbackcontroller />
            </div>
        </>
    );
}