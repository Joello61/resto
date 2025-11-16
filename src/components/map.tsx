"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix pour afficher le marker par défaut
const icon = L.icon({
  iconUrl: "/images/leaflet/marker-icon.png",
  shadowUrl: "/images/leaflet/marker-shadow.png",
  iconRetinaUrl: "/images/leaflet/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});


export default function Map({ lat, lng }: { lat: number; lng: number }) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://openstreetmap.org">OSM</a>'
      />

      <Marker position={[lat, lng]} icon={icon}>
        <Popup>Position sélectionnée</Popup>
      </Marker>
    </MapContainer>
  );
}
