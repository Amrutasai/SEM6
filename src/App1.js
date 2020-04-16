import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import SidePanel from './SidePanel/SidePanel';
import About from './About/About'
import Services from './Services/Services';
import MapContainer  from './MyMap';
import Landing from './Landing/Landing';
import Landing2 from './Landing/Landing2';

function App1() {
   
  return (
      <BrowserRouter>
        <div>
          <SidePanel/>
          <Switch>
            <Route path="/" component={Landing2} exact />
            <Route path="/about" component={About} />
            <Route path="/servicesparking" component={()=><Services title='Average Parking Space utilization' 
              circledata={[
                {'pathcolor':'#EC5C5C', 'percentage':'56', 'icon':'fa fa-car fa-2x', 'arrow':'up'},
                {'pathcolor':'#5FE2C5' ,'percentage':'40', 'icon':'fa fa-motorcycle fa-2x' ,'arrow':'down'},
                {'pathcolor':'#ABD99E','percentage':'67' ,'icon':'fa fa-taxi fa-2x', 'arrow':'down'},
                {'pathcolor':'#BC82A6', 'percentage':'22', 'icon':'fa fa-bus fa-2x', 'arrow':'up'}
              ]}
              chartdata={[
                {
                  label: 'N',
                  data: [['',0],['Mon', 60], ['Tue',40], ['Wed', 20]]
                    },
                {
                  label: 'N-1',
                  data: [['',0],['Mon', 50], ['Tue',20], ['Wed', 40], ['Thu', 20], ['Fri', 80],['Sat',60],['Sun',30]]
                    },
                {
                  label: 'N-2',
                  data: [['',0],['Mon', 20], ['Tue',30], ['Wed', 25], ['Thu', 30], ['Fri', 80],['Sat',50],['Sun',50]]
                    },  
              ]
              }/>}/>
            <Route path="/servicescustomer" component={()=><Services title='Average Customer Service utilization'
              circledata={[
                {'pathcolor':'#EC5C5C', 'percentage':'36', 'icon':'fa fa-cutlery fa-2x', 'arrow':'up'},
                {'pathcolor':'#5FE2C5' ,'percentage':'69', 'icon':'fa fa-shopping-bag fa-2x' ,'arrow':'down'},
                {'pathcolor':'#ABD99E','percentage':'20' ,'icon':'fa fa-plus-square fa-2x', 'arrow':'down'},
                {'pathcolor':'#BC82A6', 'percentage':'82', 'icon':'fa fa-glass fa-2x', 'arrow':'up'}
              ]}
              chartdata={[
                {
                  label: 'N',
                  data: [['',0],['Mon', 70], ['Tue',60], ['Wed', 80]]
                    },
                {
                  label: 'N-1',
                  data: [['',0],['Mon', 60], ['Tue',20], ['Wed', 50], ['Thu', 20], ['Fri', 30],['Sat',60],['Sun',30]]
                    },
                {
                  label: 'N-2',
                  data: [['',0],['Mon', 70], ['Tue',30], ['Wed', 55], ['Thu', 30], ['Fri', 50],['Sat',50],['Sun',90]]
                    },  
              ]
              }/>}/>
            <Route path="/servicesbaggage" component={()=><Services title='Average Baggage Service utilization'
              circledata={[
                {'pathcolor':'#EC5C5C', 'percentage':'95', 'icon':'fa fa-suitcase fa-2x', 'arrow':'up'},
                {'pathcolor':'#5FE2C5' ,'percentage':'100', 'icon':'fa fa-sign-in fa-2x' ,'arrow':'up'},
                {'pathcolor':'#ABD99E','percentage':'80' ,'icon':'fa fa-shopping-cart fa-2x', 'arrow':'down'},
                {'pathcolor':'#BC82A6', 'percentage':'82', 'icon':'fa fa-check-square-o fa-2x', 'arrow':'up'}
                ]}
              chartdata={[
                {
                  label: 'N',
                  data: [['',0],['Mon', 60], ['Tue',80], ['Wed', 70]]
                    },
                {
                  label: 'N-1',
                  data: [['',0],['Mon', 70], ['Tue',60], ['Wed', 65], ['Thu', 75], ['Fri', 87],['Sat',76],['Sun',90]]
                    },
                {
                  label: 'N-2',
                  data: [['',0],['Mon', 70], ['Tue',80], ['Wed', 80], ['Thu', 75], ['Fri', 80],['Sat',90],['Sun',100]]
                    },  
              ]
              }/>}/>
            <Route path="/reachus" component={()=><div><MapContainer/></div>} />


          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App1;
