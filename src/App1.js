import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import SidePanel from './SidePanel/SidePanel';
import About from './About/About'
import Services from './Services/Services';
import MapContainer  from './MyMap';
import Landing from './Landing/Landing';

class App1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:this.props.name,
      parking:this.props.parking,
      customer:this.props.customer,
      baggage:this.props.baggage
        }
}
  render(){
  let {parking,customer,baggage,name}=this.state
 
  return (
      <BrowserRouter>
        <div>
          <SidePanel city={name}/>
          <Switch>
            <Route path="/" component={About} exact  />
            <Route path="/servicesparking" component={()=><Services title='Average Parking Space utilization' {...parking}/>}/>
            <Route path="/servicescustomer" component={()=><Services title='Average Customer Service utilization'{...customer}/>}/>
            <Route path="/servicesbaggage" component={()=><Services title='Average Baggage Service utilization' {...baggage}/>}/>
            <Route path="/map" component={()=><div><MapContainer/></div>} />
          </Switch>
        </div>
      </BrowserRouter>
  );
            }
}

export default App1;
