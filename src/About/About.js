//import React from 'react'
import './About.css'
import React, {Component} from 'react';
import {csv} from 'd3-request';
import Scatterplot from './Scatterplot';
import data from './airport.csv';
import data_app1 from '../data_app1';


class About extends Component{
    constructor(props) {
        super(props);
        this.state ={};
      }

      componentWillMount() {
        csv(data, (error, data1) => {
          console.log("Airport Data",data1)
          this.setState({
            data1: data1.map(d => ({...d, x: Number(d.outgoing), y: Number(d.incoming)}))
          });
        })
      }
      render() {
//          if (this.state.showPanel===true)
// {      
          let data1 = this.state.data1;
          let {portname,tagline,plotheading,scale,imgsrc,description}=''

          console.log("About props",this.props)
          switch(this.props.location.state.name){
            case "Mumbai":
               portname=data_app1[0].Mumbai.about.portname;
               tagline=data_app1[0].Mumbai.about.tagline;
               plotheading=data_app1[0].Mumbai.about.plotheading;
               scale=data_app1[0].Mumbai.about.scale;
               imgsrc=data_app1[0].Mumbai.about.imgsrc;
               description=data_app1[0].Mumbai.about.description;
              
              // console.log(parking,customer,baggage)

              case "Delhi":
               portname=data_app1[1].Delhi.about.portname;
               tagline=data_app1[1].Delhi.about.tagline;
               plotheading=data_app1[1].Delhi.about.plotheading;
               scale=data_app1[1].Delhi.about.scale;
               imgsrc=data_app1[1].Delhi.about.imgsrc;
               description=data_app1[1].Delhi.about.description;

               case "Seoul":
               portname=data_app1[2].Seoul.about.portname;
               tagline=data_app1[2].Seoul.about.tagline;
               plotheading=data_app1[2].Seoul.about.plotheading;
               scale=data_app1[2].Seoul.about.scale;
               imgsrc=data_app1[2].Seoul.about.imgsrc;
               description=data_app1[2].Seoul.about.description;

               case "Washington":
               portname=data_app1[3].Washington.about.portname;
               tagline=data_app1[3].Washington.about.tagline;
               plotheading=data_app1[3].Washington.about.plotheading;
               scale=data_app1[3].Washington.about.scale;
               imgsrc=data_app1[3].Washington.about.imgsrc;
               description=data_app1[3].Washington.about.description;

               case "Seattle":
               portname=data_app1[4].Seattle.about.portname;
               tagline=data_app1[4].Seattle.about.tagline;
               plotheading=data_app1[4].Seattle.about.plotheading;
               scale=data_app1[4].Seattle.about.scale;
               imgsrc=data_app1[4].Seattle.about.imgsrc;
               description=data_app1[4].Seattle.about.description;
          }
          
        if (this.state.loadError) {
          return <div>couldn't load file</div>;
        }
        if (!this.state.data1) {
          return <div />;
        }
        return <div 
        style={{
          marginLeft: 1000,
          marginTop: 45,
          width: '350px'
        }}
        >
          <h2>{plotheading}</h2>
          <h3 style={{marginBottom:'40px'}}>{scale}</h3>
          <Scatterplot data={data1}/>
                    <div>
                        <img style={{height:'300px',width:'auto',display:'block',marginLeft:'-700px',padding:'10px',marginTop:'-460px'}} src={imgsrc}/>
                        <h3 className = 'p-about' style={{fontWeight:'lighter'}}>{portname}<br></br>{tagline}</h3>
                        <p className = 'p-about'>{description}</p>
                    </div>
                
        </div>;
        //}
      }
}

export default About