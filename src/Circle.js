import React from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

function Circle(){
const percentage = 66;
 return(
     <div style={{width:'160px',margin:'15px'}}>

<CircularProgressbarWithChildren value={percentage}
//   text={`${percentage}%`}
  strokeWidth={2}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,
    
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
 
    // Text size
    textSize: '10px',
 
    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,
 
    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',
 
    // Colors
    pathColor: `#FFCE56`,
    textColor: '#34495e',
    trailColor: ' rgb(226, 226, 226)',
    backgroundColor: 'white',
  })}>
  
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <img style={{borderRadius:'50%'}} src="https://cdn.dribbble.com/users/462605/screenshots/4683943/caricon.png" alt="doge" />
  
</CircularProgressbarWithChildren>
<p style={{textAlign:'center',fontSize:'30px',color:'#757575',fontWeight:'bold',margin:'0'}}>{percentage}%</p>
</div>
)
}
export default Circle