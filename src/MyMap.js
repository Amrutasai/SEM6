import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
function MapContainer(props){
  if (!props.loaded) return <div style={{float:'right'}}>Loading...</div>;

  return (
    <Map
      centerAroundCurrentLocation
      className="map"
      google={props.google}
      style={{ height: '100%', position: 'relative', width: '100%' }}
      zoom={14}
    />
  );
};

export default MapContainer;