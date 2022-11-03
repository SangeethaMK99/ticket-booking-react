import axios from "axios"
import { FETCH_BUS_FAILURE, FETCH_BUS_REQUEST, FETCH_BUS_SUCCESS } from "./searchBusType"


export const fetchBusRequest = () =>{
    return{
        type: FETCH_BUS_REQUEST
    }
}
export const fetchBusSuccess= (booking) =>{
    return{
        type: FETCH_BUS_SUCCESS,
        payload:booking
    }
}
export const fetchBusFailure = (error) =>{
    return{
        type: FETCH_BUS_FAILURE,
        payload:error
    }
}
