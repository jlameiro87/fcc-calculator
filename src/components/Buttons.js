import React from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import MyButton from './MyButton';

const Buttons = ({ handleButtonClick }) => {
  return (
    <Paper elevation={3} style={{ backgroundColor: '#282c34', padding: '15px' }}>
      <Stack spacing={2} direction="row" style={{ marginBottom: '10px' }}>
        <MyButton text='AC' color='error' handleButtonClick={handleButtonClick} />
        <MyButton text='+ | -' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='%' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='/' color='warning' handleButtonClick={handleButtonClick} />
      </Stack>
      <Stack spacing={2} direction="row" style={{ marginBottom: '10px' }}>
        <MyButton text='7' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='8' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='9' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='*' color='warning' handleButtonClick={handleButtonClick} />
      </Stack>
      <Stack spacing={2} direction="row" style={{ marginBottom: '10px' }}>
        <MyButton text='4' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='5' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='6' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='-' color='warning' handleButtonClick={handleButtonClick} />
      </Stack>
      <Stack spacing={2} direction="row" style={{ marginBottom: '10px' }}>
        <MyButton text='1' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='2' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='3' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='+' color='warning' handleButtonClick={handleButtonClick} />
      </Stack>
      <Stack spacing={2} direction="row">
        <MyButton text='0' color='primary' large={true} rounded={false} handleButtonClick={handleButtonClick} />
        <MyButton text='.' color='primary' handleButtonClick={handleButtonClick} />
        <MyButton text='=' color='warning' handleButtonClick={handleButtonClick} />
      </Stack>
    </Paper>
  )
}

export default Buttons;