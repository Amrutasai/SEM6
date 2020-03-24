import React from 'react'
//
// import useChartConfig from 'hooks/useChartConfig'
// import Box from 'components/Box'
// import SyntaxHighlighter from 'components/SyntaxHighlighter'
import { Chart } from 'react-charts'

function Areachart() {
const data = React.useMemo(
    () => [
      {
        label: 'Previous Month',
        datatype:'ordinal',
        data: [['jan', 50], ['feb',20], ['mar', 40], ['apr', 20], ['may', 80],['jun',60],['jul',30],['aug',50],['sept',40],['oct',30],['nov',50],['dec',70]]
          },
      {
        label: 'Current Month',
        datatype:'ordinal',
        data: [['jan', 10], ['feb', 45], ['mar', 51], ['apr', 68], ['may', 43],['jun',66],['jul',33],['aug',50],['sept',67],['oct',70],['nov',80],['dec',56]]
      }
    ],
    []
  )
  const series = React.useMemo(
    () => ({
      type: 'area'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, position: 'bottom',type:'ordinal' },
      { position: 'left', type: 'linear' }
    ],
    []
  )
  return (
    <div style={{
        height: '250px',
        margin:'20px',
         marginLeft:'10%'      
    }}>
        <Chart data={data} series={series} axes={axes} tooltip />
        <p style={{textAlign:'center',fontWeight:'lighter'}}>Annual Trend Chart</p>


    </div>
  )
}
export default Areachart