
import { Dialog, DialogContent, DialogTitle ,FormControl,makeStyles,Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Button} from '@material-ui/core';
import {useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import {  toast, ToastContainer } from 'react-toastify';
import TextField from '@material-ui/core/TextField';
import './payment.css'
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  dialogWrapper: {
      padding: theme.spacing(2),
      position: 'absolute',
      top: theme.spacing(1),
      width:800,
      height:500
  },
  dialogTitle: {
    paddingRight: '0px',
},
close:{
  marginLeft:500,
  marginBottom:20
},
btn:{
  marginLeft:200
}

// content:{
//   textAlign:"center"
// }
}))

function PaymentPopUp(props) {
  
    const{openPopup,setOpenPopup}=props;
    const classes = useStyles();
    const[number,setNumber]=useState("");
    const[name,setName]=useState("");
    const[valid,setValid]=useState("");
    const[cvc,setCvc]=useState("");
    const history=useHistory()
    const payment=localStorage.getItem('amount')
console.log(name);
    const handleClose = () => {
      setOpenPopup(false) ;  
    }

    const handleClick = (e) => {
      e.preventDefault()
      toast.success("Payment successfull", {position: toast.POSITION.TOP_RIGHT,autoClose: 3000,
      })

    }

  return (
    
    <Dialog open={openPopup} classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
      <Button className={classes.close} variant="contained"
                color="primary"
                onClick={handleClose
                }>
                <CloseIcon/>
            </Button>
            
    </DialogTitle>
    <DialogContent className={classes.dialogContent}>    
      <div className={classes.content}>
      <Typography  component="div" className='{head}'>
             <h4> Enter your card details</h4><br/>
            </Typography>
          <>
           {/* <div className='success'>{isSuccess ?<h4>Image uploaded successfully</h4>:null}</div> */}
        <form>
        <TextField sx={{width:900}} id="outlined-basic" label="card Number" variant="outlined" 
        value={number} onChange={(e) =>setNumber(e.target.value)}/><br/><br/>

        <TextField id="outlined-basic" label="Name" variant="outlined" 
        value={name} onChange={(e) =>setName(e.target.value)}/><br/><br/>
      <div className='row'> 
      <div className='valid'>       
        <TextField id="outlined-basic" label="MM/YY" variant="outlined" 
        value={valid} onChange={(e) =>setValid(e.target.value)}

        /></div><br/><br/>
        <TextField id="outlined-basic" label="CVC" variant="outlined" 
        value={cvc} onChange={(e) =>setCvc(e.target.value)}
      />        
      </div>
      <div className="payment">     
         <p>Total Pay Amount: {payment}/-</p>
      </div>
      <br/>
          <Button className={classes.btn} type="submit" variant='contained' color='primary' onClick={handleClick}>Pay Now</Button>
        </form>

          </>
        <ToastContainer/>

    </div>
    </DialogContent>
    </Dialog>
  )
}

export default PaymentPopUp

