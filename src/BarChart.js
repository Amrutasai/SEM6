import React,{Component} from 'react'
import * as d3 from 'd3'
import { axisBottom } from 'd3'
class BarChart extends Component{
    componentDidMount(){
        const data=[2,4,2,6,8]
        this.drawBarChart(data)
    }
    drawBarChart(data){
        const canvasHeight=400
        const canvasWidth=600
        const Scale=20
        const svgCanvas=d3.select(this.refs.canvas)
            .append("svg")
            .attr('width',canvasWidth)
            .attr('height',canvasHeight)
            .style('border','1px solid black')
        svgCanvas.selectAll('rect')
            .data(data).enter()
            .append("rect")
            .attr("width",40)
            .attr("height",(datapoint)=>datapoint*Scale)
            .attr("fill","orange")
            .attr("x",(datapoint,iteration)=>iteration*45)
            .attr("y",(datapoint)=>canvasHeight-datapoint*Scale)
        svgCanvas.selectAll("text")
        .data(data).enter()
        .append("text")
        .attr("x",(datapoint,i)=>i*45+10)
        .attr("y",(datapoint,i)=>canvasHeight-datapoint*Scale-10)
        .text(datapoint=>datapoint)
        
    
        var scale = d3.scaleLinear()
                   .domain([0,5])
                   .range([0, canvasWidth - 45*data.length]);

        // Add scales to axis
        var x_axis = d3.axisBottom()
                    .scale(scale);
                    

        //Append group and insert axis
        svgCanvas.append("g")
        .call(x_axis);
                
    }
    render(){
        return(
            <div ref='canvas'>
            </div>
        )
    }
}
export default BarChart