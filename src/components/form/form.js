import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { fetchBus } from '../../Redux/searchBus/searchBusAction';
import "./form.css"
import DatePicker from "react-datepicker";
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'react-toastify/dist/ReactToastify.css';
import {  toast, ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const themes = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(",")
  }
});


const useStyles = makeStyles(theme => ({
btn:{
marginTop:20,
marginBottom:20
},
search:{
backgroundColor:'pink',
width:400,
margin: 'auto',
paddingLeft:200

},
busData:{
color:'white'

}
}))

function FormSubmit() {
  const[date,setDate]=useState("");
  const classes = useStyles();
  const theme = useTheme();
const history=useHistory()
  const[starting_point,setStartingPoint]=useState("");
  const[destination,setDestination]=useState("");
  const[searchBus,setSearchBus]=useState("")
  const[show,setShow]=useState(false);
  const dispatch=useDispatch()
  const available=searchBus && searchBus.map((ele)=> ele.available_seats)
console.log(available);
const availableSeat=available[0]

  const handleSubmit=(e) => {
    e.preventDefault();
    if(starting_point===destination){
      toast.error("Please select correct starting point or destination !", {position: toast.POSITION.TOP_RIGHT,autoClose: 2000,})
    }
      dispatch(fetchBus(starting_point,destination,formatSearchDate,setShow,setSearchBus))
  }
  const handleClick=() => {
    if(availableSeat == 0){
      toast.error("Booking closed!", {position: toast.POSITION.TOP_RIGHT,autoClose: 2000,})
      history.push('/')
    }

  }
console.log(searchBus);
// console.log("destination"+destination);
console.log("startingpoint"+starting_point);
console.log("date"+date);
const dateData=searchBus && searchBus.map((ele)=> ele.date)
console.log(dateData[0]);


const newdata=new Date(dateData[0])
const formatDate = moment(newdata).format('YYYY-MM-DD')

// console.log(newdata);

const stopData=searchBus && searchBus.map((ele)=> ele.stop_points)
console.log(stopData);
console.log(date);
const searchDate=new Date(date)
const formatSearchDate= moment(searchDate).format('YYYY-MM-DD')
console.log(formatSearchDate);
console.log("starttt",starting_point);

  return(
    <div className="form" style={{textAlign:"center"}}>
      <div className={classes.search}>
      <Box sx={{ maxWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel>starting_point</InputLabel>
        <Select
          value={starting_point} onChange={(e) =>setStartingPoint(e.target.value)}
        >
          <MenuItem value="calicut">calicut</MenuItem>
          <MenuItem value="kasargod">kasargod</MenuItem>
          <MenuItem value="wayanad">wayanad</MenuItem>
          <MenuItem value="kochi">kochi</MenuItem>
          <MenuItem value="kannur">kannur</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth>

        <InputLabel>Destination</InputLabel>

        <Select value={destination} onChange={(e) =>setDestination(e.target.value)}        >
          <MenuItem value="calicut" >calicut</MenuItem>
          <MenuItem value="kasargod">kasargod</MenuItem>
          <MenuItem value="wayanad">wayanad</MenuItem>
          <MenuItem value="kochi">kochi</MenuItem>
          <MenuItem value="kannur" >kannur</MenuItem>
        </Select>
        </FormControl><br/>

        <label>
          Date: <DatePicker dateFormat="yyyy-MM-dd" minDate={new Date()}
         selected={date} onChange={(date) => setDate(date)} />
          
        </label>
        <Button  className={classes.btn} type="submit" variant='contained' color='secondary' style={{marginLeft:'30'}} onClick={(e)=>handleSubmit(e)}>search Buses</Button><br/>
        </Box>
        </div><br/><br/>
        <div className={classes.busData}>       
           {show && searchBus.map((post)=>{
                    return( 
                          <div className='busData'>
                            <Box sx={{ bgcolor: 'text.secondary', color: 'background.paper', p: 2 }}>
                              <ThemeProvider theme={themes}>
                              <Typography variant="h6">
                              <h2><DirectionsBusIcon/> Bus Name : {post.name}</h2>
                              <p>Bus category : {post.category}</p>
                              <p>Starting Point : {post.starting_point}</p>
                              <p>Destination : {post.destination}</p>
                              <p>Dropping points : {post.stop_points}</p>
                              <p>Total Bus seats : {post.total_seats}</p>
                              <p>Available Bus seats : {post.available_seats}</p>
                              <p>Bus Scheduled Date :{formatDate}</p>
                              <Button className='btn' variant='contained' color='white' onClick={handleClick}><Link  to={{pathname:"/booking", state:{stopData:stopData},bus:{searchBus:searchBus},date:{formatDate:formatDate},post:{post:post}}} style={{textDecoration:"none", color:"black"}}>Book</Link></Button><br/><br/>
                              {/* <Button className='btn' variant='contained' color='white' onClick={handleClick}><Link  to={{pathname:"/booking", post:{post:post}}} style={{textDecoration:"none", color:"black"}}>Book</Link></Button><br/><br/> */}
                              </Typography>
                              </ThemeProvider>
                            </Box>
                        </div>
                    )}
                )}
                <ToastContainer/>
       </div>

    </div>    
    );    
}
export default FormSubmit;







// <LocalizationProvider dateAdapter={AdapterDayjs}>
// <Stack spacing={3}>
//   <DesktopDatePicker
//     label="Date desktop"
//     inputFormat="MM/DD/YYYY"
//     value={value}
//     onChange={handleChange}
//     renderInput={(params) => <TextField {...params} />}
//   />













    // <Box sx={{ maxWidth: 100 }}>
    //   <FormControl fullWidth>
    //     <InputLabel>Age</InputLabel>
    //     <Select
    //       value={starting_point} onChange={(e) =>setStartingPoint(e.target.value)}
    //     >
    //       <MenuItem >calicut</MenuItem>
    //       <MenuItem >kasargod</MenuItem>
    //       <MenuItem >wayanad</MenuItem>
    //       <MenuItem >kochi</MenuItem>
    //       <MenuItem >kannur</MenuItem>
    //     </Select>
    //   </FormControl>
    // </Box>
  

























// import { Button } from '@material-ui/core';
// import axios from 'axios';
// import { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchBus } from '../../Redux/searchBus/searchBusAction';
// import "./form.css"
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";





// function FormSubmit() {
//   const[date,setDate]=useState("");
//   const[starting_point,setStartingPoint]=useState("");
//   const[destination,setDestination]=useState("");
//   const[searchBus,setSearchBus]=useState("")
//   const[show,setShow]=useState(false);
//   const dispatch=useDispatch()
//   const handleSubmit=(e) => {
//     e.preventDefault();
//       dispatch(fetchBus(starting_point,destination,formatSearchDate,setShow,setSearchBus))
//   }


// console.log(searchBus);
// // console.log("destination"+destination);
// console.log("startingpoint"+starting_point);
// console.log("date"+date);
// const dateData=searchBus && searchBus.map((ele)=> ele.date)
// console.log(dateData[0]);

// const newdata=new Date(dateData[0])
// const formatDate = moment(newdata).format('YYYY-MM-DD')

// // console.log(newdata);

// const stopData=searchBus && searchBus.map((ele)=> ele.stop_points)
// console.log(stopData);
// console.log(date);
// const searchDate=new Date(date)
// const formatSearchDate= moment(searchDate).format('YYYY-MM-DD')
// console.log(formatSearchDate);


//   return(
//     <div className="form">
//       <form >
//         <label>
//           starting_point:
//           <select value={starting_point} onChange={(e) =>setStartingPoint(e.target.value)}>
//             <option value="calicut">calicut</option>
//             <option value="kasargod">kasargod</option>
//             <option value="kochi">kochi</option>
//             <option value="wayanad">wayanad</option>
//             <option value="malappuram">malappuram</option>
//             <option value="kannur">kannur</option>
//           </select>
//         </label><br/>
//         <label>
//           destination:
//           <select value={destination} onChange={(e) =>setDestination(e.target.value)}>
//             <option value="calicut">calicut</option>
//             <option value="kasargod">kasargod</option>
//             <option value="kochi">kochi</option>
//             <option value="wayanad">wayanad</option>
//             <option value="malappuram">malappuram</option>
//             <option value="kannur">kannur</option>
//           </select>
//           </label><br/>
//         <label>
//           Date: <DatePicker dateFormat="yyyy-MM-dd" selected={date} onChange={(date) => setDate(date)} />
          
//         </label>
//         <Button  className='form-btn' type="submit" variant='contained' color='secondary' style={{marginLeft:'30'}} onClick={(e)=>handleSubmit(e)}>search Buses</Button>
//         </form><br/>
//         {show &&  searchBus.map((post)=>{
//                     return( 
//                           <div className='busData'>
//                             <h2>{post.name}</h2>
//                             <p>Starting Point : {post.starting_point}</p>
//                             <p>Destination : {post.destination}</p>
//                             <p>Stop points : {post.stop_points}</p>
//                             <p>Total seats : {post.total_seats}</p>
//                             <p>Available seats : {post.available_seats}</p>
//                             <p>Date :{formatDate}</p>
//                             <Button className='btn' variant='contained' color='secondary'><Link  to={{pathname:"/booking", state:{stopData:stopData},bus:{searchBus:searchBus},date:{formatDate:formatDate}}} style={{textDecoration:"none", color:"black"}}>Book</Link></Button><br/><br/>
//                         </div>
//                     )}
//                 )}
//     </div>    
//     );    
// }
// export default FormSubmit;

































