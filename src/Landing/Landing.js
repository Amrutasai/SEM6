import React, { Component } from "react";
import world from './WholeWrold'
import {NavLink,Link} from 'react-router-dom'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import App1 from "../App1";

const geoUrl =
//"https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json"
//{world}
 "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: 15, name: "Mumbai", coordinates: [75.7139, 19.7515] },
];
class Landing extends Component{
  constructor(){
    super();
    this.state = {render:''}
}
handleClick(compName, e){
    console.log(compName);
    this.setState({render:compName});  
      
}
_renderSubComp(){
    console.log('in rendersub')
    switch(this.state.render){
        case "Mumbai": return <App1/>
        // case 'bracelets' : return <Bracelets/>

    }
}
  render(){
  return (
    <div >
      <ComposableMap style={{justifyContent:'center'}}>
        <Geographies geography={geoUrl}>
          {({geographies}) => geographies.map(geo =>
            <Geography key={geo.rsmKey} geography={geo} />
          )}
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}  > 
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
            
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" ,fontSize:'10px' }}
            onClick={this.handleClick.bind(this, name)}          >
            {name}
          </text>
        </Marker>
        ))}
      </ComposableMap>
      {    this._renderSubComp()}
    </div>
  );
};
}

export default Landing;
