import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
    const center = [13.7563, 100.5018]; // Thailand's coordinates

    return (
        <div className="playground">
            <div className='info'>
            <MapContainer center={center} zoom={6} className="MapContainer">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
            </div>
        </div>
    );
};

export default Map;
