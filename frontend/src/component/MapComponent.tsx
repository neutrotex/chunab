"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { BoothLocation } from "../data/nepalConstituencies";

interface MapComponentProps {
  boothLocations: BoothLocation[];
  constituencyName: string;
}

export default function MapComponent({ boothLocations, constituencyName }: MapComponentProps) {
  // Fix for default markers in react-leaflet
  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  // Calculate center point for the map
  const getMapCenter = (): [number, number] => {
    if (boothLocations.length === 0) {
      // Default to Kathmandu if no locations
      return [27.7172, 85.3240];
    }
    
    if (boothLocations.length === 1) {
      return [boothLocations[0].latitude, boothLocations[0].longitude];
    }
    
    // Calculate center point for multiple locations
    const avgLat = boothLocations.reduce((sum, location) => sum + location.latitude, 0) / boothLocations.length;
    const avgLng = boothLocations.reduce((sum, location) => sum + location.longitude, 0) / boothLocations.length;
    
    return [avgLat, avgLng];
  };

  const mapCenter = getMapCenter();

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden border border-border/30">
      <MapContainer
        center={mapCenter}
        zoom={boothLocations.length === 1 ? 15 : 12}
        style={{ height: "100%", width: "100%" }}
        key={`${constituencyName}-${boothLocations.length}`} // Force re-render when data changes
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {boothLocations.map((booth) => (
          <Marker
            key={booth.id}
            position={[booth.latitude, booth.longitude]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-sm mb-1">Voting Booth</h3>
                <p className="text-xs text-muted-foreground">
                  {constituencyName}
                </p>
                <p className="text-xs text-muted-foreground">
                  Lat: {booth.latitude.toFixed(6)}, Lng: {booth.longitude.toFixed(6)}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
