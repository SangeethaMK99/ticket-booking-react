import axios from "axios"
import { fetchTicket } from "../../components/action/action";
// import { fetchTicket } from "../tickets/ticketAction";
import { FETCH_CANCEL_FAILURE, FETCH_CANCEL_REQUEST, FETCH_CANCEL_SUCCESS } from "./deleteType";


export const fetchCancelRequest = () =>{
    return{
        type: FETCH_CANCEL_REQUEST
    }
}
export const fetchCancelSuccess= (cancel) =>{
    return{
        type: FETCH_CANCEL_SUCCESS,
        payload:cancel
    }
}
export const fetchCancelFailure = (error) =>{
    return{
        type: FETCH_CANCEL_FAILURE,
        payload:error
    }
}
