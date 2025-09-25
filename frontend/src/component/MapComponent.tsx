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

  // Function to get user's current location
  const getCurrentLocation = (): Promise<{ latitude: number; longitude: number }> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        }
      );
    });
  };

  // Function to open directions
  const openDirections = async (destinationLat: number, destinationLng: number) => {
    try {
      const userLocation = await getCurrentLocation();
      const origin = `${userLocation.latitude},${userLocation.longitude}`;
      const destination = `${destinationLat},${destinationLng}`;
      
      // Open in Google Maps with directions
      const googleMapsUrl = `https://www.google.com/maps/dir/${origin}/${destination}`;
      window.open(googleMapsUrl, '_blank');
    } catch (error) {
      console.error('Error getting location:', error);
      // Fallback: open with destination only (user can set their own starting point)
      const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${destinationLat},${destinationLng}`;
      window.open(fallbackUrl, '_blank');
    }
  };

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
    <div className="w-full h-112 rounded-xl overflow-hidden border border-border/30">
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
              <div className="p-3 min-w-[200px]">
                <h3 className="font-semibold text-sm mb-2">Voting Booth</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {constituencyName}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  Lat: {booth.latitude.toFixed(6)}, Lng: {booth.longitude.toFixed(6)}
                </p>
                <button
                  onClick={() => openDirections(booth.latitude, booth.longitude)}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-md transition-colors duration-200"
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
                    />
                  </svg>
                  Get Directions
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
