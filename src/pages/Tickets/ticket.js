// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import moment from "moment";
// import { useLocation } from 'react-router-dom';

// const useStyles = makeStyles({
//   table: {
//     width:700,
//     margin:"auto",
//     marginTop:10,
//     borderSpacing: '0px 4px',

//   },
// });

 
// function Tickets() {
  
//   const classes = useStyles();
//     const location = useLocation()
//   const rowData=location.row?.row
//   console.log("rowwwww",rowData);
  
//   return (
//   <div>
//   <div className="add">
//     <TableContainer >
//       <Table aria-label="simple table" className={classes.table} >
//         <TableBody>
//             <><TableRow>
//               <TableCell component="th" scope="row">
//                 Passenger Name  :
//               </TableCell>
//               <TableCell>{rowData.name}</TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell>Email Address  :</TableCell>
//                 <TableCell>{rowData.email_address}</TableCell>
//               </TableRow>
              
//               <TableRow>
//                 <TableCell>Phone number :</TableCell>
//                 <TableCell>{rowData.phone_no}</TableCell>
//               </TableRow>
//               <TableRow >
//                 <TableCell>Bus Name  :</TableCell>
//                 <TableCell>{rowData.bus_name}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Trip Date  :</TableCell>
//                 <TableCell>{moment(rowData.date).format('YYYY-MM-DD')}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Bus Time  :</TableCell>
//                 <TableCell>{rowData.time}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>PickUp point  :</TableCell>
//                 <TableCell>{rowData.starting_point}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Dropping point  :</TableCell>
//                 <TableCell>{rowData.stop_point}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Fare Amount: </TableCell>
//                 <TableCell>{rowData.bus_fare} /-</TableCell>
//               </TableRow>
//               </> 
//         </TableBody>
//       </Table><br/><br/>
//     </TableContainer>
//     </div>
//     </div>
//   );
// }

// export default Tickets



















import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useLocation } from 'react-router-dom';

const themes = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(","),
  },
});

const useStyles = makeStyles({
    table: {
      width:700,
      margin:"auto",
      marginTop:10,
      marginBottom:30
    }
    
  });
  

export default function Tickets() {
  const classes = useStyles();
  const location = useLocation()
  const rowData=location.row?.row
  console.log("rowwwww",rowData);

  
  return (
    <TableContainer >
      <ThemeProvider theme={themes}>
        <Typography variant="h6">       
      <Table aria-label="simple table"  className={classes.table} >
      <TableBody style={{backgroundColor:'pink', color: 'black',}} >
      
            <><TableRow >
              <TableCell component="th" scope="row">
                Passenger Name  :
              </TableCell>
              <TableCell>{rowData.name}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Email Address  :</TableCell>
                <TableCell>{rowData.email_address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone number :</TableCell>
                <TableCell>{rowData.phone_no}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>Bus Name  :</TableCell>
                <TableCell>{rowData.bus_name}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>Trip Date  :</TableCell>
                <TableCell>{moment(rowData.date).format('YYYY-MM-DD')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bus Time  :</TableCell>
                <TableCell>{moment((rowData.time), ["HH:mm"]).format("hh:mm a")}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>PickUp point  :</TableCell>
                <TableCell>{rowData.starting_point}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dropping point  :</TableCell>
                <TableCell>{rowData.stop_point}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>Fare Amount: </TableCell>
                <TableCell>{rowData.bus_fare} /-</TableCell>
              </TableRow>
              </> 
              
        </TableBody>
      </Table>
      </Typography>
          </ThemeProvider>

    </TableContainer>
  );
}
