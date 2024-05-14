import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ futsal_listing }) => {
    // Set static location data

    return (
        <MapContainer
            center={[futsal_listing.latitude, futsal_listing.longitude]} // Set center to Eiffel Tower or any other focal point
            zoom={25}
            style={{ height: "500px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker
                key={location.id}
                position={[futsal_listing.latitude, futsal_listing.longitude]}
            >
                <Tooltip direction="top" permanent>
                    {futsal_listing.title}
                </Tooltip>
            </Marker>
        </MapContainer>
    );
};

export default Map;
