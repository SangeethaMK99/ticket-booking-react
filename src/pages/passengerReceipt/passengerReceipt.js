

import React from 'react'
import { useState,useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import './passengerReceipt.css'
import { Button } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import { useHistory } from 'react-router-dom';

function PassengerReceipt() {
    const history=useHistory()
    const k=JSON.parse(localStorage.getItem('details'))
    const fare=JSON.parse(localStorage.getItem('amount'))
    const [val,setVal]=useState([k])
    const componentRef=useRef()
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
    })

  const handleSubmit=()=>{
    history.push('/')

  }
    return (
<div className='receipt'>       
     <h3>Congratulations! Your booking is confirmed</h3>

    <div  ref={componentRef} >
        {val.map((p)=>(
            <table className='center'> 
                <tr>
                    <th colSpan={2}>Ticket Details</th>
                </tr><br/>
                <tr>
                    <td>Passenger Name:</td>
                    <td>{p.name}</td>
                </tr>
            <tr> 
                    <td>email Address:</td>
                    <td>{p.email}</td>
                </tr>
                <tr> 
                    <td>phone Number:</td>
                    <td>{p.phone}</td>
                </tr>
                <tr> 
                    <td>Bus name:</td>
                    <td>{p.busName}</td>
                </tr><tr> 
                    <td>Trip Date:</td>
                    <td>{p.date}</td>
                </tr>
                <tr> 
                    <td>Bus Time:</td>
                    <td>{p.time}</td>
                </tr>
                <tr> 
                    <td>PickUp Point:</td>
                    <td>{p.startPoint}</td>
                </tr>
                <tr> 
                    <td>Dropping Point:</td>
                    <td>{p.stopPoint}</td>
                </tr>
                <tr> 
                    <td>fare amount:</td>
                    <td>{fare}/-</td>
                </tr>
            </table>
                ))}
        </div><br/>
        <div className='btn'> 
            <Button type="submit" variant='contained' color='primary' onClick={handlePrint} >Print out This<PrintIcon/></Button>
            <Button variant='contained' color='secondary' type="submit"onClick={handleSubmit}>Goto Home page</Button><br/><br/>
            </div>

        </div>

    )
    }
    
export default PassengerReceipt 
 
