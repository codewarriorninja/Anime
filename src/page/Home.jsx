import React from "react";
import { Spotlight } from "../components/ui/spotlight-new";
import Anime from "../components/ui/Anime";

export function SpotlightNewDemo() {
  return (
    (<div
      className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
        <Anime />
    </div>
    )
  );
}
