import React from 'react';
import {
  // Hint,
  HorizontalGridLines,
  MarkSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis
} from 'react-vis';

// import HintContent from './hint-content.js';

export default function Scatterplot(props){
  // constructor(props) {
    
  //   this.state = {
  //     value: null
  //   };
  //   this._rememberValue = this._rememberValue.bind(this);
  //   this._forgetValue = this._forgetValue.bind(this);
  // }

  // _rememberValue(value) {
  //   this.setState({value});
  // }

  // _forgetValue() {
  //   this.setState({
  //     value: null
  //   });
  // }
  const {data} = props;
  console.log('data:',data)
  
    // const {value} = this.state;
    return <div style={{marginLeft:'-75px',marginRight:'0px'}}>
      <XYPlot
        margin={{top:5, left: 60, right: 5, bottom: 30}}
        width={320}
        height={290}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis/>
        <YAxis/>
        <MarkSeries
          data={data}
          // onValueMouseOver={this._rememberValue}
          // onValueMouseOut={this._forgetValue}
          opacity={0.7}
        />
        {/* {value ?
          <Hint value={value}>
            <HintContent value={value} />
          </Hint> :
          null
        } */}
      </XYPlot>
      <div style={{
        color: '#c6c6c6',
        fontSize: 11,
        lineHeight: '13px',
        textAlign: 'right',
        transform: 'rotate(-90deg) translate(120px, -160px)'
      }}>Outgoing</div>
      <div style={{
        color: '#c6c6c6',
        fontSize: 11,
        lineHeight: '13px',
        textAlign: 'right',
        transform: 'translate(-5px,-14px)',
        width: '320px'
      }}>Incoming</div>
    </div>;
  
}