"use client";

import dynamic from "next/dynamic";
import { BoothLocation } from "../data/nepalConstituencies";

// Dynamically import MapComponent with no SSR
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 rounded-xl overflow-hidden border border-border/30 bg-muted/20 flex items-center justify-center">
      <div className="text-muted-foreground">Loading map...</div>
    </div>
  ),
});

interface DynamicMapProps {
  boothLocations: BoothLocation[];
  constituencyName: string;
}

export default function DynamicMap({ boothLocations, constituencyName }: DynamicMapProps) {
  return <MapComponent boothLocations={boothLocations} constituencyName={constituencyName} />;
}
