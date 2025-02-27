"use client";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function Player() {
  const playlistId = "PLxATMDXeONjF6UlNVO8wXJVlkib57cHdU";

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "100%",
    playerVars: {
      listType: "playlist",
      list: playlistId,
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold uppercase text-black/70">
        PLAYLIST: REPERTÓRIO 2025
      </h1>
      <YouTube videoId="" opts={opts} className="h-96 w-full" />
    </div>
  );
}
