import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import SidePanel from './SidePanel/SidePanel';
import About from './About/About'
import Services from './Services/Services';
import MapContainer  from './MyMap';
import Landing from './Landing/Landing';
import Landing2 from './Landing/Landing2';
import App1 from './App1';
import Test from './Test';

function App() {
   
  return (
    <div>
      <Landing/>
      {/* <App1/> */}
      </div>
  );
}

export default App;
