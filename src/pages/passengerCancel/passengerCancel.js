
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import { Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TablePagination from '@material-ui/core/TablePagination';
import { fetchCancel, fetchTicket } from '../../components/action/action';


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
    marginTop:50
    
  },
  btn:{
    margin:10,
    fontSize:10
  }
});

function PassengerCancel() {
  useEffect(() => {
    dispatch(fetchTicket());
   
  },[]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const currentDate= new Date()
  const givenDate=new Date(date)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleDelete = (date,destination,id) => {
    if (givenDate>currentDate){

          dispatch(fetchCancel(date,destination,id))      
    }
  }
  
  const id=JSON.parse(localStorage.getItem('bookingId'))


  const classes = useStyles()
  const dispatch=useDispatch()
  const ticketData=useSelector((state=>state.ticket.ticket) )
  console.log("ticketdata",ticketData);
  const date=ticketData.data?.map((ele)=>ele.date)
  console.log("date",date);
  return (
  <div>
    <div className='view'><h2>Cancel your tickets</h2></div>
  <div className='add'>
    <TableContainer >
    <ThemeProvider theme={themes}>
        <Typography variant="h6">       
      <Table aria-label="simple table" className={classes.table} style={{backgroundColor:'pink', color: 'black',}}>
      <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
            <TableCell>date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Cancel Tickets</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {ticketData.data?.
              slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (            
              <TableRow>
                <TableCell>{id}</TableCell>

              <TableCell>{row.name}</TableCell>
              <TableCell>{moment(row.date).format('YYYY-MM-DD')}</TableCell>
              {/* <TableCell>{new Date(row.date).getFullYear()}-{new Date(row.date).getMonth()+1}-{new Date(row.date).getDate()}</TableCell> */}
              <TableCell>{moment((row.time), ["HH:mm"]).format("hh:mm a")}</TableCell>
              {/* <TableCell>{moment(row.time).format("HH:M")}</TableCell> */}
              <TableCell>{row.stop_point}</TableCell>
              <TableCell>
              <Button className={classes.btn} variant='contained' color='secondary' type="submit" style={{textDecoration:"none", color:"black"}} onClick={()=>{handleDelete(row.stop_point,id)}}>Cancel Ticket</Button><br/><br/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Typography>
      </ThemeProvider>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={ticketData.data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>

    </div>
  );
}


export default PassengerCancel







