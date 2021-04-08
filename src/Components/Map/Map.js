import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const Map = () => {
    const containerStyle = {
        width: '100%',
        height: '74vh'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };
      const position = {
        lat: 37.772,
        lng: -122.214
      }
      const onLoad = marker => {
        console.log('marker: ', marker)
      }
      
    return (
        <div>
            <LoadScript
        googleMapsApiKey="AIzaSyBf54iiHH_vD3YjvF3XTjzVUNJnKfyYNtQ"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
            <Marker
            onLoad={onLoad}
           position={position}
    />
        </GoogleMap>
      </LoadScript>

        </div>
    );
};

export default Map;