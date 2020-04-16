import React from 'react'
import Circle from '../Circle'
import Areachart from '../reactChart2'
// import MyChart from '../reactCharts1'
// import Lines from '../Lines'
// import BarChart from '../BarChart'
// import { map } from 'd3'

function Services(props) {
    let {title,circledata,chartdata}=props
    return(
        <div style={{margin:'20px',marginLeft:'275px',paddingTop:'10px'}}>
            <div>
                    <Areachart subdata={chartdata}/>
            </div>
            <div style={{padding:'25px',margin:'10px',color:'#7E7E7E',fontSize:'20px',fontWeight:'lighter'}}> 
                        {title}
            </div>
            <div style={{boxShadow:'0px 0px 1px rgba(0,0,0,0.2)',padding:'10px'}}>
                    
                    <div style={{display:'flex',flexDirection:'row',paddingRight:'20px',justifyContent:'center'}}>
                        {circledata.map((value)=>{
                           console.log(value)
                           console.log(circledata)
                           return(<Circle {...value}/>);
                        })}
                    </div>
            </div>
            
        </div>
    )
}
export default Services