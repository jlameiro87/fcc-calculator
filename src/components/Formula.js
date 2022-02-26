import React from 'react';

const Formula = ({ formula }) => {
  const style = { display: 'flex', justifyContent: 'flex-end' };
  return (
    <div style={style}>{formula}</div>
  )
}

export default Formula;