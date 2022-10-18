import axios from "axios"
import { FETCH_BOOKING_FAILURE, FETCH_BOOKING_REQUEST, FETCH_BOOKING_SUCCESS } from "./bookingType";


export const fetchBookingRequest = () =>{
    return{
        type: FETCH_BOOKING_REQUEST
    }
}
export const fetchBookingSuccess= (booking) =>{
    return{
        type: FETCH_BOOKING_SUCCESS,
        payload:booking
    }
}
export const fetchBookingFailure = (error) =>{
    return{
        type: FETCH_BOOKING_FAILURE,
        payload:error
    }
}

export const fetchBooking =(name,email,phone,startPoint,stopPoint,busName,busDate,busTime,fare)=>{
    return(dispatch)=>{
        dispatch(fetchBookingRequest)
        axios.post("http://localhost:8000/user/passenger",{name:name,
        email:email,
        phone:phone,
        startPoint:startPoint,
        stopPoint:stopPoint ,
        busName:busName,
        busDate:busDate,
        busTime:busTime,
        fare:fare
        },
        ).then((res)=>
        {
         console.log("passenger id",res.data);
        const booking=res.data
        const bookid=booking.data?.map((ele)=> ele.id)
        console.log(bookid);
        const bookingId=bookid[0]
        localStorage.setItem('bookingId',JSON.stringify(bookingId))
        dispatch(fetchBookingSuccess(booking))
        
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchBookingFailure(errorMsg))

        })
    }
}