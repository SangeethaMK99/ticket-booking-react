import axios from "axios"
import { FETCH_TICKET_FAILURE, FETCH_TICKET_REQUEST, FETCH_TICKET_SUCCESS } from "./ticketType"


export const fetchTicketRequest = () =>{
    return{
        type: FETCH_TICKET_REQUEST
    }
}
export const fetchTicketSuccess= (ticket) =>{
    return{
        type: FETCH_TICKET_SUCCESS,
        payload:ticket
    }
}
export const fetchTicketFailure = (error) =>{
    return{
        type: FETCH_TICKET_FAILURE,
        payload:error
    }
}
