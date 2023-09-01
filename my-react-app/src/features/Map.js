import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Map({ className }) {
    const center = [13.7563, 100.5018]; // Thailand's coordinates

    return (
        <map className={className}>
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
        </map>);
};

Map.propTypes={
    className: PropTypes.string.isRequired
}

export default styled(Map)`
.MapContainer {
    
    height: 800px;
    width: 100%;
   
}
.info{
    margin-top: 65px;
}
.playground{
    
    
    width: 100%;
}
`;
