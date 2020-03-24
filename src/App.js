import React from 'react';
import * as d3 from 'd3';
import BarChart from './BarChart'
import './App.css';
import Test from './Test';
import MyChart from './reactCharts1';
import Areachart from './reactChart2';
import Dough from './reactChart3';
import Line from './Test';
import Horizontal from './Horizontal';
import BarG from './Bar';
import AreaTest from './areaTest';
import Circle from './Circle';
import SidePanel from './SidePanel/SidePanel';

function App() {
  
  
  return (
    <div className='app'>
      <div style={{display:'flex',flexDirection:'column'}}>
          {/* <img src='https://static-news.moneycontrol.com/static-mcnews/2018/04/RTX178TL-770x433.jpg'/>
          <Dough/> */}
          <SidePanel/>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
          <Circle/><Circle/><Circle/><Circle/>
        </div>
        <Areachart/>
      </div>
      
      
      {/* <div style={{width:'750px',alignContent:'center'}}>
          <Horizontal />
      </div>
      <BarG/>
      <div style={{display:'flex',flexDirection:'row'}}>
          <MyChart/>
          <Dough/>
      </div> */}
    </div>
  );
}

export default App;
