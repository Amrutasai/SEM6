import React from 'react'
import Circle from '../Circle'
import Areachart from '../reactChart2'
import MyChart from '../reactCharts1'
import Lines from '../Lines'

function Services() {
    return(
        <div style={{margin:'20px',marginLeft:'275px',paddingTop:'40px'}}>
            <div>
                    <Areachart/>
            </div>
            <div style={{boxShadow:'0px 0px 1px rgba(0,0,0,0.2)',padding:'10px'}}>
                    <div style={{padding:'25px',margin:'10px',color:'#7E7E7E',fontSize:'20px',fontWeight:'lighter'}}> 
                        Average Parking Space utilization
                    </div>
                    <div style={{display:'flex',flexDirection:'row',paddingRight:'20px'}}>
                        <Circle pathcolor='#EC5C5C' percentage='56' icon='fa fa-car fa-2x' arrow='up'/><Circle pathcolor='#5FE2C5' percentage='40' icon='fa fa-motorcycle fa-2x' arrow='down'/>
                        <Circle pathcolor='#ABD99E'percentage='67' icon='fa fa-taxi fa-2x' arrow='down'/><Circle pathcolor='#BC82A6' percentage='22' icon='fa fa-bus fa-2x' arrow='up'/>
                    </div>
            </div>
            <div>
                    <Areachart/>
            </div>
        </div>
    )
}
export default Services