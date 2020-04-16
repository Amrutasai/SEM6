import React, { Component } from 'react'
import './SidePanel.css';
import { NavLink } from 'react-router-dom'; 
import Landing from '../Landing/Landing';


class SidePanel extends Component{
    constructor(){
        super();
        this.state = {
      showPanel:true}
    }
    handleClick( e){
        
        this.setState({showPanel:false})
    }
    render(){
    if (this.state.showPanel===true)
    return(
        <div style={{
            display:'flex',flexDirection:'column',boxShadow:'0px 0px 1px rgba(0,0,0,0.2)',
             width:'250px',height:'100vh',position:'absolute',top:'0'}}
        >
            <div style={{backgroundColor:'#FC6868',color:'white'}}>
            <div style={{textDecoration:'none',color:'white'}}onClick={this.handleClick.bind(this)}><div style={{textAlign:'center',fontWeight:'bolder',fontSize:'25px',marginTop:'200px',padding:'10px'}}>Mumbai  </div></div>
            </div>
            <div >
                <NavLink style={{textDecoration:'none'}}to="/"><p className='p-sidepanel'>About</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to="/servicesparking"><p className='p-sidepanel'>Parking Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to="/servicescustomer"><p className='p-sidepanel'>Customer Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to="/servicesbaggage"><p className='p-sidepanel'>Baggage Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to="/reachus"><p className='p-sidepanel'>Reach Us</p></NavLink>
            </div>
            
        </div>
    )
    else
return(<div><Landing/></div>)   }
}
export default SidePanel