import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

// Fix for default marker icons in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface TransportRoute {
  from: string;
  to: string;
  type: "flight" | "train" | "bus" | "car";
  coordinates: [number, number][];
}

interface InteractiveMapProps {
  selectedRoute?: TransportRoute | null;
}

const InteractiveMap = ({ selectedRoute }: InteractiveMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const routeLayerRef = useRef<L.Polyline | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current).setView([34.1526, 77.5771], 7);

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update map when selectedRoute changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove existing route layer and markers
    if (routeLayerRef.current) {
      map.removeLayer(routeLayerRef.current);
      routeLayerRef.current = null;
    }
    markersRef.current.forEach(marker => map.removeLayer(marker));
    markersRef.current = [];

    if (selectedRoute) {
      const { coordinates, type, from, to } = selectedRoute;

      // Convert coordinates from [lng, lat] to [lat, lng] for Leaflet
      const latLngCoords: [number, number][] = coordinates.map(coord => [coord[1], coord[0]]);

      // Determine route color based on type
      const routeColor = type === 'flight' ? '#0ea5e9' : type === 'train' ? '#8b5cf6' : type === 'bus' ? '#f59e0b' : '#14b8a6';
      const dashArray = type === 'flight' ? '10, 10' : undefined;

      // Add route polyline
      const polyline = L.polyline(latLngCoords, {
        color: routeColor,
        weight: 4,
        opacity: 0.8,
        dashArray: dashArray,
      }).addTo(map);

      routeLayerRef.current = polyline;

      // Custom icon for start marker (green)
      const startIcon = L.divIcon({
        html: `<div style="background-color: #14b8a6; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
          <span style="font-size: 14px;">🛫</span>
        </div>`,
        className: 'custom-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

      // Custom icon for end marker (orange)
      const endIcon = L.divIcon({
        html: `<div style="background-color: #f97316; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
          <span style="font-size: 14px;">📍</span>
        </div>`,
        className: 'custom-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

      // Add start marker
      const startMarker = L.marker(latLngCoords[0], { icon: startIcon })
        .bindPopup(`<div style="font-weight: 600; color: #0f172a;">${from}</div>`)
        .addTo(map);
      markersRef.current.push(startMarker);

      // Add end marker
      const endMarker = L.marker(latLngCoords[latLngCoords.length - 1], { icon: endIcon })
        .bindPopup(`<div style="font-weight: 600; color: #0f172a;">${to}</div>`)
        .addTo(map);
      markersRef.current.push(endMarker);

      // Fit map bounds to show the route
      map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
    } else {
      // Reset to default view when no route is selected
      map.setView([34.1526, 77.5771], 7);
    }
  }, [selectedRoute]);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Route Visualization
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          {selectedRoute 
            ? `${selectedRoute.from} → ${selectedRoute.to} (${selectedRoute.type})`
            : "Select a transport option to view route"}
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <div ref={mapContainerRef} className="h-[600px] w-full" />
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;
