import React from 'react';
export default function HintContent({value}) {
  const {outgoing, year, incoming} = value;
  return <div>
    <div style={{
      borderBottom: '1px solid #717171',
      fontWeight: 'bold',
      marginBottom: 5,
      paddingBottom: 5,
      textTransform: 'uppercase'
    }}>{year}</div>
    <div style={{position: 'relative', height: '15px', width: '100%'}}>
      <div style={{position: 'absolute'}}>Outgoing</div>
      <div style={{position: 'absolute', right: 0}}>{outgoing}</div>
    </div>
    <div style={{position: 'relative', height: '15px', width: '100%'}}>
      <div style={{position: 'absolute'}}>Incoming</div>
      <div style={{position: 'absolute', right: 0}}>{incoming}</div>
    </div>
  </div>;
}
