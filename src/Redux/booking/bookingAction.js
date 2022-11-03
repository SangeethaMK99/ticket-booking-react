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

