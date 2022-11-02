import { Dialog, DialogContent, DialogTitle ,makeStyles,Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Button} from '@material-ui/core';
import './popUp.css'
import {useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import {  toast, ToastContainer } from 'react-toastify';
import TextField from '@material-ui/core/TextField';
import { fetchHelp } from '../../Redux/customerHelp/helpAction';
const useStyles = makeStyles(theme => ({
  dialogWrapper: {
      padding: theme.spacing(5),
      position: 'absolute',
      top: theme.spacing(5)
  },
  dialogTitle: {
    paddingRight: '0px',
},
  dialogContent:{
  marginTop:'50px'

} ,
close:{
  marginLeft:400,
  marginBottom:20
},
content:{
  textAlign:"center"
}
}))

function PopUp(props) {
  
    const{openPopup,setOpenPopup}=props;
    const classes = useStyles();
    const[phone,setPhone]=useState("");
    const[name,setName]=useState("");
    const dispatch=useDispatch()
console.log(name);
console.log(phone);
    const handleClose = () => {
      setOpenPopup(false) ;  
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(fetchHelp(name,phone))
      setName("")
      setPhone("")
      toast.success("We will contact you soon...!", {position: toast.POSITION.TOP_RIGHT,autoClose: 3000,
    })
  }
      
    
  return (
    
    <Dialog open={openPopup} classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
      <Button className={classes.close} variant="contained"
                color="secondary"
                onClick={handleClose
                }>
                <CloseIcon/>
            </Button>
        <div >
          
            <Typography variant="h6" component="div" className='{head}' style={{ flexGrow:1}}>
             <p> Sign in for faster support for all your queries!!</p>
            </Typography>
            
        </div>
    </DialogTitle>
    <DialogContent className={classes.dialogContent}>    
      <div className={classes.content}>
          <>
           {/* <div className='success'>{isSuccess ?<h4>Image uploaded successfully</h4>:null}</div> */}
        <form>
        <TextField id="outlined-basic" label="Name" variant="outlined" 
        value={name} onChange={(e) =>setName(e.target.value)}/><br/><br/>

        <TextField id="outlined-basic" label="Phone number" variant="outlined" 
        value={phone} onChange={(e) =>setPhone(e.target.value)}

      /><br/><br/>

          <Button type="submit" variant='contained' color='secondary' onClick={handleSubmit}>Submit</Button>

        </form>

          </>      
        <ToastContainer/>

    </div>
    </DialogContent>
    </Dialog>
  )
}

export default PopUp

