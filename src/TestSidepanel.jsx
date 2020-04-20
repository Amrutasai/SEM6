import React, { Component } from 'react'
// import './SidePanel.css';
import { NavLink,Link } from 'react-router-dom'; 
// import Landing from '../Landing/Landing';
// import App from '../App'
import data_app1 from './data_app1';

class TestSidePanel extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          parking:'',
          customer:'',
          baggage:''
        };
      }
    
    
      componentWillMount() {
        
        console.log('props',this.props.location)
        switch(this.props.location.state.name){
          case "Mumbai":
            let parking=data_app1[0].Mumbai.parking
            let  customer=data_app1[0].Mumbai.customer
            let  baggage=data_app1[0].Mumbai.baggage
                
            
            // console.log(parking,customer,baggage)
        }
        
        
      }
    
      
    
    render(){
    let city=this.props.location.state.name;
    let {parking,customer,baggage}=''
    // let parking=this.state.parking
    switch(this.props.location.state.name){
      case "Mumbai":
         parking=data_app1[0].Mumbai.parking
         customer=data_app1[0].Mumbai.customer
         baggage=data_app1[0].Mumbai.baggage
        console.log (parking,customer,baggage)   
        
        // console.log(parking,customer,baggage)
    }
    console.log (parking,customer,baggage)   

    return(
        <div style={{
            display:'flex',flexDirection:'column',boxShadow:'0px 0px 1px rgba(0,0,0,0.2)',
             width:'250px',height:'100vh',position:'absolute',top:'0'}}>
            <div style={{backgroundColor:'#FC6868',color:'white'}}>
              
            <NavLink style={{textDecoration:'none',color:'white'}} to='/'><div style={{textAlign:'center',fontWeight:'bolder',fontSize:'25px',marginTop:'200px',padding:'10px'}}>{city} </div></NavLink>
            </div>
            <div >
                <Link style={{textDecoration:'none'}}to=
                {{
                  pathname:`/about/${city}`,
                  state:{name:city}
                }}><p className='p-sidepanel'>About</p></Link>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/servicesparking/${city}`,
                  state:{
                    name:city,
                    services:parking}
                }}><p className='p-sidepanel'>Parking Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/servicescustomer/${city}`,
                  state:{
                    name:city,
                    services:customer}
                }}><p className='p-sidepanel'>Customer Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/servicesbaggage/${city}`,
                  state:{
                    name:city,
                    services:baggage}
                }}><p className='p-sidepanel'>Baggage Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/map/${city}`,
                  state:{name:city}
                }}><p className='p-sidepanel'>Map</p></NavLink>            </div>
            
        </div>
    )
    // else
// return(<div><App/></div>)   
}
}
export default TestSidePanel