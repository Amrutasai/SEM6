import React from 'react'
import './About.css'

function About() {
    return(
        <div style={{marginLeft:'255px'}}>
            <img style={{height:'300px',width:'auto',display:'block',marginLeft:'auto',marginRight:'auto',padding:'10px',marginTop:'20px'}} src='https://i1.wp.com/www.airwhizz.com/wp-content/uploads/2018/05/1200px-Mumbai_03-2016_114_Airport_international_terminal_interior.jpeg?resize=820%2C400&ssl=1'/>
            <p className='p-about'>Chhatrapati Shivaji Maharaj International Airport, Mumbai</p>
            <p className='p-about'>Address: Mumbai, Maharashtra 400099</p>
            <p className='p-about'>Code: BOM</p>
            <p className='p-about'>Elevation: 11 m</p>
            <p className='p-about'>Phone: 022 6685 1010</p>
            <p className='p-about'>Hub for: Air India, Vistara, AirAsia India, Alpance Air, IndiGo, SpiceJet, GoAir</p>
        </div>
    )
    
}
export default About