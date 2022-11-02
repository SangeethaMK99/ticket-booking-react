
import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import './cancel.css'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    btn:{
        paddingLeft:30,
        paddingRight:30,
    }
})
export default function Cancel() {
    const[name,setName]=useState("")
    const[phone,setPhone]=useState("");
    const classes = useStyles()
    const history=useHistory()

    const handleSubmit=(e) => {
        e.preventDefault();
        history.push('/passengerCancel')
    }
    console.log(name);
    console.log(phone);
    
  return (
    <div className='add'>
        <div>
            <h3>Enter Your Booking details</h3><br/><br/>
        </div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 40, width: '28ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined"   
      value={name} onChange={(e) =>setName(e.target.value)}
        /><br/><br/>
      <TextField id="outlined-basic" label="Phone number" variant="outlined" 
        value={phone} onChange={(e) =>setPhone(e.target.value)}

      /><br/><br/>
      <Button className={classes.btn} variant='contained' color='primary' onClick={handleSubmit}>Verify Details</Button>
    </Box>
    </div>
  );
}
