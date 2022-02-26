import React from 'react';

const Result = ({ result }) => {
  const style = { display: 'flex', justifyContent: 'flex-end' };
  return (
    <div style={style}>{result}</div>
  )
}

export default Result