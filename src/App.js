import React from 'react';
import * as d3 from 'd3';
import BarChart from './BarChart'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import MyChart from './reactCharts1';
import Areachart from './reactChart2';
import Dough from './reactChart3';
// import './Test1' webscraping from google
import Horizontal from './Horizontal';
import BarG from './Bar';
import AreaTest from './areaTest';
import Circle from './Circle';
import SidePanel from './SidePanel/SidePanel';
import About from './About/About'
import Services from './Services/Services';

function App() {
  
  
  return (
    // <div className='app'>
    //   <div style={{display:'flex',flexDirection:'column'}}>
    //       <SidePanel/>
    //   </div>
    //   <div style={{display:'flex',flexDirection:'column'}}>
    //     <div style={{display:'flex',flexDirection:'row'}}>
    //       <Circle/><Circle/><Circle/><Circle/>
    //     </div>
    //     <Areachart/>
    //   </div>
      <BrowserRouter>
        <div>
          <SidePanel/>
          <Switch>
            <Route path="/" component={Areachart} exact />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services}/>
          </Switch>
        </div>
      </BrowserRouter>
    // </div>
  );
}

export default App;
