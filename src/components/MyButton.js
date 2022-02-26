import React from 'react';

import Button from '@mui/material/Button';

const MyButton = ({ text, color, large = false, rounded = true, handleButtonClick }) => {
  const style = { height: '4em', with: '4em', fontSize: '15px', minWidth: large ? '144px' : '', borderRadius: rounded ? '50%' : '5%' }
  return (
    <Button variant="contained" color={color} style={style} onClick={() => handleButtonClick(text)}>{text}</Button>
  )
}

export default MyButton;