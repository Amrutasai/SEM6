import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
    const data = React.useMemo(
        () => [
          [[1, 10], [2, 1], [3, 9]],
          [[1, 2], [2, 7], [3, 10]],
          [[1, 12], [2, 6], [3, 5]]
        ],
        []
      )
      const series = React.useMemo(
        () => ({
          showPoints: false
        }),
        []
      )
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
   
    return (
      <div
        style={{
          width: '400px',
          height: '300px',
          margin:'20px'
        }}
      >
        <Chart data={data} series={series} axes={axes} tooltip />
      </div>
    )
  }
export default MyChart;