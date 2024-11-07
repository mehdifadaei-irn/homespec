import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "@/lib/leaflet";

interface LeafletMapProps {
  lat?: number;
  lng?: number;
}

const styles = {
  mapContainer: {
    width: "354px",
    height: "288px",
    flexShrink: 0,
    alignSelf: "flex-end",
    position: "relative",
  } as React.CSSProperties,
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  } as React.CSSProperties,
  blur: {
    filter: "blur(5px)",
    transition: "filter 0.3s ease",
  } as React.CSSProperties,
};

const Spinner: React.FC = () => (
  <div style={styles.spinner}>
    <div className="spinner" />
  </div>
);

const MapCenter: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    const center: LatLngExpression = [lat, lng];
    map.setView(center);
  }, [lat, lng, map]);

  return null;
};

const LeafletMap: React.FC<LeafletMapProps> = ({ lat, lng }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (lat !== undefined && lng !== undefined) {
      setLoading(false);
    }
  }, [lat, lng]);

  const center: LatLngExpression = [lat ?? 0, lng ?? 0];

  return (
    <div style={styles.mapContainer}>
      {loading && <Spinner />} {/* Show spinner while loading */}
      <div style={loading ? styles.blur : {}}>
        <MapContainer center={center} zoom={13} style={styles.mapContainer}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center} />
          {!loading && lat && lng && <MapCenter lat={lat} lng={lng} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default LeafletMap;
