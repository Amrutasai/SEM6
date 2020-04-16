//import React from 'react'
import './About.css'
import React, {Component} from 'react';
import {csv} from 'd3-request';
import Scatterplot from './Scatterplot';

// function About() {
//     return(
//         <div style={{marginLeft:'255px'}}>
//             <img style={{height:'300px',width:'auto',display:'block',marginLeft:'auto',marginRight:'auto',padding:'10px',marginTop:'20px'}} src='https://i1.wp.com/www.airwhizz.com/wp-content/uploads/2018/05/1200px-Mumbai_03-2016_114_Airport_international_terminal_interior.jpeg?resize=820%2C400&ssl=1'/>
//             <p className='p-about'>Chhatrapati Shivaji Maharaj International Airport, Mumbai</p>
//             <p className='p-about'>Address: Mumbai, Maharashtra 400099</p>
//             <p className='p-about'>Code: BOM</p>
//             <p className='p-about'>Elevation: 11 m</p>
//             <p className='p-about'>Phone: 022 6685 1010</p>
//             <p className='p-about'>Hub for: Air India, Vistara, AirAsia India, Alpance Air, IndiGo, SpiceJet, GoAir</p>
//         </div>
//     )
    
// }
// export default About

class About extends Component{
    constructor(props) {
        super(props);
        this.state = {};
      }

      componentWillMount() {
        csv('airport.csv', (error, data) => {
          this.setState({
            data: data.map(d => ({...d, x: Number(d.outgoing), y: Number(d.incoming)}))
          });
        })
      }

      render() {

        const props = this.state.data;
        if (this.state.loadError) {
          return <div>couldn't load file</div>;
        }
        if (!this.state.data) {
          return <div />;
        }
        return <div 
        style={{
          //background: '#fff',
          //borderRadius: '3px',
          //boxShadow: '0 1 2 0 rgba(0,0,0,0.1)',
          //margin: 100,
          marginLeft: 1000,
          marginTop: -15,
          padding: 24,
          width: '350px'
        }}
        >
         <h1 style={{marginLeft:'-750px'}}>Chhatrapati Shivaji Maharaj International Airport, Mumbai</h1>
          <h2>Passenger Air Traffic Rates at T2 Terminal</h2>
          <h3 style={{marginBottom:'40px'}}>per 1,000 inhabitants</h3>
          <Scatterplot data={props}/>
                    <div>
                        {/* <h1 style={{marginLeft:'-820px', marginTop:'-4px'}}>Chhatrapati Shivaji Maharaj International Airport, Mumbai</h1> */}
                    {/* <div style={{marginLeft:'2px'}}> */}
                        <img style={{height:'300px',width:'auto',display:'block',marginLeft:'-700px',padding:'10px',marginTop:'-430px'}} src='https://i1.wp.com/www.airwhizz.com/wp-content/uploads/2018/05/1200px-Mumbai_03-2016_114_Airport_international_terminal_interior.jpeg?resize=820%2C400&ssl=1'/>
                        {/* <img src='https://i1.wp.com/www.airwhizz.com/wp-content/uploads/2018/05/1200px-Mumbai_03-2016_114_Airport_international_terminal_interior.jpeg?resize=820%2C400&ssl=1'/>/> */}
                        {/* <p className='p-about'>Chhatrapati Shivaji Maharaj International Airport, Mumbai</p> */}
                        {/* <p className='p-about'>Address: Mumbai, Maharashtra 400099</p>
                        <p className='p-about'>Code: BOM</p>
                        <p className='p-about'>Elevation: 11 m</p>
                        <p className='p-about'>Phone: 022 6685 1010</p>
                        <p className='p-about'>Hub for: Air India, Vistara, AirAsia India, Alpance Air, IndiGo, SpiceJet, GoAir</p> */}
                        <h3 className = 'p-about'>Welcome to GVK CSMIA T2 – Where Dreams Take Flight</h3>
                        <p className = 'p-about'>The new iconic Terminal 2 is India’s first and most advanced vertical passenger terminal that integrates world class design, architecture, infrastructure and operational efficiency, with a rich infusion of Indian heritage and cultural character. The transformation of CSMIA, a brown-field project, is a one-of-its-kind unique infrastructural project in the world, unlike any other airport development projects. With a vision to become one of the world’s best airports, GVK has been continuously and consistently upgrading CSMIA to an airport that delights its guests by offering best in class comfort and convenience.
                        </p>
                    </div>
                
        </div>;
      }
}

export default About