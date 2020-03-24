import React from 'react'
//

import { Chart } from 'react-charts'
let sourceCode
export default function Line () {
    const data = React.useMemo(
        () => [
          [[1, 2], [2, 1], [3, 3]]
          
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
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  return (
    <>
      <br />
      <br />
        <Chart data={data} series={series} axes={axes} tooltip />
      <br />
    </>
  )
}