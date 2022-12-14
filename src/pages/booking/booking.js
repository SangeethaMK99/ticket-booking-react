import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import moment from "moment";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import './booking.css'
import PaymentPopUp from '../../components/popup/paymentPopUp/paymentPopUp';
import { fetchBooking } from '../../components/action/action';

const themes = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(","),
    // color:"pink"
  },
});

const useStyles = makeStyles(theme => ({
  passenger:{
    color:"black",
    width:350,
    margin:"auto",
    paddingLeft:150 ,
    paddingRight:150 ,
    paddingTop:40
  },
  btn:{
    marginLeft:90
  }

  
  }))
  


function Booking() {
    const theme = useTheme();
    const classes = useStyles();
    const history=useHistory()
    const location = useLocation()
    const post=location.post?.post
    console.log("post dataaa",post);
    const stopPointData= post.stop_points
    console.log("...........stpsdataaa",stopPointData);
    console.log(typeof(stopPointData));

    // const busData=location.bus?.searchBus
    // console.log(".......................",busData);
    const busDate=location.date?.formatDate
    const busTime=post.time
    console.log(busTime);
    const busName=post.name
    console.log(busName);
    const startPoint=post.starting_point
    console.log(startPoint);
    const fareAmount=post.fare_amount
    console.log("amount",fareAmount);
    console.log(typeof(fareAmount));

    const busFareAmount=JSON.parse(fareAmount)
        console.log(typeof(busFareAmount));
    const stopData=JSON.parse(stopPointData)
    console.log(typeof(stopData));

    const bookingData = useSelector(state => state.booking)
    console.log("booked dataaaaa",bookingData);
    // console.log("busdata",busData);
    // console.log(stopPointData);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[stopPoint,setStopPoint]=useState("");
    const [payment,setPayment]=useState('')
    const[openPopup,setOpenPopup]=useState(false)

    const fare=JSON.parse(localStorage.getItem('amount'))
    const bookingId=bookingData.data?.map((ele)=> ele.id)
    console.log("bookingId",bookingId);
    
    
   console.log(stopPoint);
       const details={
            name:name,
            email:email,
            phone:phone,
            startPoint:startPoint,
            stopPoint:stopPoint,
            busName:busName,
            date:busDate,
            time:busTime,
            fare:fare,
            payment:payment
          }
          console.log(stopPoint);
          localStorage.setItem('details',JSON.stringify(details))
          const dispatch=useDispatch()
          
          const handleClick=(e)=>{
          e.preventDefault();
          
        // setName('')
        // setEmail('')
        // setPhone('') 
        dispatch(fetchBooking(name,email,phone,startPoint,stopPoint,busName,busDate,busTime,fare,payment))
  }
  console.log(payment);

  return (
    <div>
      <Box sx={{ maxWidth:600,marginLeft:350,paddingRight:50 }} className='all'>
        <div className={classes.passenger}>
        <ThemeProvider theme={themes}>
        <Typography variant="h6">       
            <div className='main'>
              <p>Bus Name : {busName}</p>
              <p>Trip Booking Date :{moment(busDate).format('YYYY-MM-DD')}</p>
              <p>Bus Time: {moment((busTime), ["HH:mm"]).format("hh:mm a")}</p>
              <p>Trip starting point:{startPoint}</p>
          </div><br/>
        <Box component="form" sx={{
  '& > :not(style)': { m: 1, width: '28ch' },
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic" label=" Passenger Name" variant="outlined"  value={name}
            onChange={(e) =>setName(e.target.value)}/><br/><br/>
<TextField id="outlined-basic" label="email" variant="outlined" value={email}
             onChange={(e) =>setEmail(e.target.value)} /><br/><br/>
<TextField label="phone number" variant="outlined" value={phone}
             onChange={(e) =>setPhone(e.target.value)} /><br/><br/>

           <FormControl>
        <InputLabel>stop point</InputLabel>
        <Select
          value={stopPoint} onChange={(e) =>setStopPoint(e.target.value)}
        >
          {stopData && stopData.map((ele) => (
          <MenuItem value={ele}>{ele}</MenuItem>
        ))}
        </Select><br/>
        </FormControl>
        </Box> 
  {

    (function(){
        const stop= stopData.indexOf(stopPoint)
  for(let i=0; i<=busFareAmount.length-1; i++){
    if (i==stop){
      const amount=busFareAmount[i]
      localStorage.setItem('amount',JSON.stringify(amount))
      console.log(amount);
      return( 
        <div>
          <p style={{fontSize:'16px'}}>
            Bus Fare Amount:{busFareAmount[i]}
        </p>
        </div>
      )
  }
  }
  })()
}
<FormControl style={{width:340}}>
        <InputLabel>choose payment method</InputLabel>

<Select
          value={payment} onChange={(e) =>setPayment(e.target.value)}
        >
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="credit card" onClick={()=>setOpenPopup(true)}>Credit card</MenuItem>
          <MenuItem value="debit card" onClick={()=>setOpenPopup(true)}>debit card</MenuItem>

        </Select>        
        </FormControl><br/><br/>

          <Button className={classes.btn} variant='contained' color='primary' type="submit"onClick={handleClick}><Link  to="/receipt" style={{textDecoration:"none", color:"black"}}>submit</Link></Button><br/><br/>
          
         </Typography>
          </ThemeProvider>

          </div>
          </Box><br/>
          <PaymentPopUp 
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}       
          
          >
        
    </PaymentPopUp>
           
    </div>
  )
}

export default Booking














































































































































































// import { Button } from '@material-ui/core';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import { fetchBooking } from '../../Redux/booking/bookingAction';
// import Box from '@material-ui/core/Box';
// import moment from "moment";
// import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import { Typography } from "@material-ui/core";
// import './booking.css'
// import PaymentPopUp from '../../components/popup/paymentPopUp/paymentPopUp';

// const themes = createTheme({
//   typography: {
//     fontFamily: [
//       'Chilanka',
//       'cursive',
//     ].join(","),
//     // color:"pink"
//   },
// });

// const useStyles = makeStyles(theme => ({
//   passenger:{
//     color:"white",
//     // backgroundColor:"pink",
//     width:300,
//     margin:"auto",
//     paddingLeft:150 ,
//     paddingRight:150 ,
//   },
//   btn:{
//     marginLeft:90
//   }

  
//   }))
  


// function Booking() {
//   const theme = useTheme();
//   const classes = useStyles();
//   const history=useHistory()
//     const location = useLocation()
//     const post=location.post?.post
//     console.log("post dataaa",post);
//     const stopPointData= location.state?.stopData
//     const busData=location.bus?.searchBus
//     const busDate=location.date?.formatDate
//     const busTime=busData && busData.map((ele)=> ele.time)
//     console.log(busTime);
//     const busName=busData && busData.map((item)=> item.name)
//     console.log(busName);
//     const startPoint=busData && busData.map((item)=> item.starting_point)
//     console.log(startPoint);
//     const fareAmount=busData && busData.map((item)=> item.fare_amount)
//     console.log("amount",fareAmount);
//     const busFare=fareAmount?.fareAmount[0]
//     console.log(busFare);
//     console.log(typeof(busFare));

//     const busFareAmount=JSON.parse(busFare)
//     console.log(busFareAmount);
//     const stops=stopPointData[0]
//     console.log(stops);
//     console.log(typeof(stops));
//     const stopData=JSON.parse(stops)
//     console.log(stopData);
//     const bookingData = useSelector(state => state.booking)
//     console.log("booked dataaaaa",bookingData);

//     console.log("busdata",busData);
//     console.log(stopPointData);
//     const[name,setName]=useState("");
//     const[email,setEmail]=useState("");
//     const[phone,setPhone]=useState("");
//     const[stopPoint,setStopPoint]=useState("");
//     const [payment,setPayment]=useState('')
//     const[openPopup,setOpenPopup]=useState(false)

//     const fare=JSON.parse(localStorage.getItem('amount'))
//     const bookingId=bookingData.data?.map((ele)=> ele.id)
//     console.log("bookingId",bookingId);
    
    
//    console.log(stopPoint);
//        const details={
//             name:name,
//             email:email,
//             phone:phone,
//             startPoint:startPoint,
//             stopPoint:stopPoint,
//             busName:busName,
//             date:busDate,
//             time:busTime,
//             fare:fare,
//             payment:payment
//           }
//           console.log(stopPoint);
//           localStorage.setItem('details',JSON.stringify(details))
//           const dispatch=useDispatch()
          
//           const handleClick=(e)=>{
//           e.preventDefault();
          
//         // setName('')
//         // setEmail('')
//         // setPhone('') 
//         dispatch(fetchBooking(name,email,phone,startPoint,stopPoint,busName,busDate,busTime,fare,payment))
//   }
//   console.log(payment);

//   return (
//     <div>
//       <Box sx={{ maxWidth:600,bgcolor: 'text.secondary',marginLeft:380 }}>
//         <div className={classes.passenger}>
//         <ThemeProvider theme={themes}>
//         <Typography variant="h6">       
//             <div>
//               <h3>Bus Name : {busName}</h3>
//               <p>Trip Booking Date :{busDate}</p>
//               <p>Bus Time: {moment((busTime), ["HH:mm"]).format("hh:mm a")}</p>
//               <p>Trip starting point:{startPoint}</p>
//             </div>
//         <Box component="form" sx={{
//   '& > :not(style)': { m: 1, width: '20ch' },
// }}
// noValidate
// autoComplete="off"
// >
// <TextField id="outlined-basic" label=" Passenger Name" variant="outlined"  value={name}
//             onChange={(e) =>setName(e.target.value)}/><br/><br/>
// <TextField id="outlined-basic" label="email" variant="outlined" value={email}
//              onChange={(e) =>setEmail(e.target.value)} /><br/><br/>
// <TextField label="phone number" variant="outlined" value={phone}
//              onChange={(e) =>setPhone(e.target.value)} /><br/><br/>

//            <FormControl>
//         <InputLabel>stop point</InputLabel>
//         <Select
//           value={stopPoint} onChange={(e) =>setStopPoint(e.target.value)}
//         >
//           {stopData && stopData.map((ele) => (
//           <MenuItem value={ele}>{ele}</MenuItem>
//         ))}
//         </Select><br/>
//         </FormControl>

//         </Box> 
//   {

//     (function(){
//         const stop= stopData.indexOf(stopPoint)
//   for(let i=0; i<=busFareAmount.length-1; i++){
//     if (i==stop){
//       const amount=busFareAmount[i]
//       localStorage.setItem('amount',JSON.stringify(amount))
//       console.log(amount);
//       return( 
//         <div>
//           <p>
//             Bus Fare Amount:{busFareAmount[i]}
//         </p>
//         </div>
//       )
//   }
//   }
//   })()
// }
// <FormControl style={{width:250}}>
//         <InputLabel>choose payment method</InputLabel>

// <Select
//           value={payment} onChange={(e) =>setPayment(e.target.value)}
//         >
//           <MenuItem value="cash">Cash</MenuItem>
//           <MenuItem value="credit card" onClick={()=>setOpenPopup(true)}>Credit card</MenuItem>
//           <MenuItem value="debit card" onClick={()=>setOpenPopup(true)}>debit card</MenuItem>

//         </Select>        
//         </FormControl><br/><br/>
// {

// }

// {/*             
//             <label> 
//            stop point:<br/>
                       
//       <select value={stopPoint}
//           onChange={(e) =>setStopPoint(e.target.value)}>
//         {stopData && stopData.map((ele) => (
//           <option>{ele}</option>
//         ))}
//       </select>
//            </label><br/> */}

//           <Button className={classes.btn} variant='contained' color='primary' type="submit"onClick={handleClick}><Link  to="/receipt" style={{textDecoration:"none", color:"black"}}>submit</Link></Button><br/><br/>
          
//          </Typography>
//           </ThemeProvider>

//           </div>
//           </Box><br/>
//           <PaymentPopUp 
//                   openPopup={openPopup}
//                   setOpenPopup={setOpenPopup}       
          
//           >
        
//     </PaymentPopUp>
           
//     </div>
//   )
// }

// export default Booking












// import { Button } from '@material-ui/core';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import { fetchBooking } from '../../Redux/booking/bookingAction';
// import Box from '@material-ui/core/Box';
// import moment from "moment";
// import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import { Typography } from "@material-ui/core";
// import './booking.css'

// const themes = createTheme({
//   typography: {
//     fontFamily: [
//       'Chilanka',
//       'cursive',
//     ].join(","),
//     // color:"pink"
//   },
// });

// const useStyles = makeStyles(theme => ({
//   passenger:{
//     color:"white",
//     // backgroundColor:"pink",
//     width:300,
//     margin:"auto",
//     paddingLeft:150 ,
//     paddingRight:150 ,
//   },
//   btn:{
//     marginLeft:90
//   }

  
//   }))
  


// function Booking() {
//   const theme = useTheme();
//   const classes = useStyles();
//   const history=useHistory()
//     const location = useLocation()
//     const stopPointData= location.state?.stopData
//     const busData=location.bus?.searchBus
//     const busDate=location.date?.formatDate
//     const busTime=busData && busData.map((ele)=> ele.time)
//     console.log(busTime);
//     const busName=busData && busData.map((item)=> item.name)
//     console.log(busName);
//     const startPoint=busData && busData.map((item)=> item.starting_point)
//     console.log(startPoint);
//     const fareAmount=busData && busData.map((item)=> item.fare_amount)
//     console.log("amount",fareAmount);
//     const busFare=fareAmount[0]
//     console.log("fare[0]",busFare);
//     console.log(typeof(busFare));

//     const busFareAmount=JSON.parse(busFare)
//     console.log("fare.................",busFareAmount);
//     const stops=stopPointData[0]
//     console.log("stopssssss",stops);
//     console.log(typeof(stops));
//     const stopData=JSON.parse(stops)
//     console.log(stopData);
//     const bookingData = useSelector(state => state.booking)
//     console.log("booked dataaaaa",bookingData);

//     console.log("busdata",busData);
//     console.log(stopPointData);
//     const[name,setName]=useState("");
//     const[email,setEmail]=useState("");
//     const[phone,setPhone]=useState("");
//     const[stopPoint,setStopPoint]=useState("");
//     // const[Fare,setFare]=useState("");
//     const fare=JSON.parse(localStorage.getItem('amount'))
//     const bookingId=bookingData.data?.map((ele)=> ele.id)
//     console.log("bookingId",bookingId);
    
    
//     // const[startPoint,setStartPoint]=useState("");
//    console.log(stopPoint);
//        const details={
//             name:name,
//             email:email,
//             phone:phone,
//             startPoint:startPoint,
//             stopPoint:stopPoint,
//             busName:busName,
//             date:busDate,
//             time:busTime,
//             fare:fare,
//           }
//           console.log(stopPoint);
//           localStorage.setItem('details',JSON.stringify(details))
//           const dispatch=useDispatch()
          
//           const handleClick=(e)=>{
//           e.preventDefault();
          
//         // setName('')
//         // setEmail('')
//         // setPhone('') 
//         dispatch(fetchBooking(name,email,phone,startPoint,stopPoint,busName,busDate,busTime,fare))
//   }
//   return (
//     <div>
//       <Box sx={{ maxWidth:600,bgcolor: 'text.secondary',marginLeft:380 }}>
//       {/* <div className="passenger"> */}
      
//        {/* <h3>ADD YOUR DETAILS</h3></div> */}
//         <div className={classes.passenger}>
//         <ThemeProvider theme={themes}>
//         <Typography variant="h6">       
//             <div>
//               <h3>Bus Name : {busName}</h3>
//               <p>Trip Booking Date :{busDate}</p>
//               <p>Bus Time: {moment((busTime), ["HH:mm"]).format("hh:mm a")}</p>
//               <p>Trip starting point:{startPoint}</p>
//             </div>
//         {/* <form > */}
//         <Box component="form" sx={{
//   '& > :not(style)': { m: 1, width: '20ch' },
// }}
// noValidate
// autoComplete="off"
// >
// <TextField id="outlined-basic" label=" Passenger Name" variant="outlined"  value={name}
//             onChange={(e) =>setName(e.target.value)}/><br/><br/>
// <TextField id="outlined-basic" label="email" variant="outlined" value={email}
//              onChange={(e) =>setEmail(e.target.value)} /><br/><br/>
// <TextField label="phone number" variant="outlined" value={phone}
//              onChange={(e) =>setPhone(e.target.value)} /><br/><br/>
//            <FormControl>
//         <InputLabel>stop point</InputLabel>
//         <Select
//           value={stopPoint} onChange={(e) =>setStopPoint(e.target.value)}
//         >
//           {stopData && stopData.map((ele) => (
//           <MenuItem value={ele}>{ele}</MenuItem>
//         ))}
//         </Select><br/>
//         </FormControl>

//         </Box> 
//   {

//     (function(){
//         const stop= stopData.indexOf(stopPoint)
//   for(let i=0; i<=busFareAmount.length-1; i++){
//     if (i==stop){
//       const amount=busFareAmount[i]
//       localStorage.setItem('amount',JSON.stringify(amount))
//       console.log(amount);
//       return( 
//         <div>
//           <p>
//             Bus Fare Amount:{busFareAmount[i]}
//         </p>
//         </div>
//       )
//   }
//   }
//   })()
// }


// {/*             
//             <label> 
//            stop point:<br/>
                       
//       <select value={stopPoint}
//           onChange={(e) =>setStopPoint(e.target.value)}>
//         {stopData && stopData.map((ele) => (
//           <option>{ele}</option>
//         ))}
//       </select>
//            </label><br/> */}

//           <Button className={classes.btn} variant='contained' color='primary' type="submit"onClick={handleClick}><Link  to="/receipt" style={{textDecoration:"none", color:"black"}}>submit</Link></Button><br/><br/>
          
//          </Typography>
//           </ThemeProvider>

//           </div>
//           </Box><br/>
//     </div>
//   )
// }

// export default Booking



