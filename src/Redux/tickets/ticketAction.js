import axios from "axios"
import { FETCH_TICKET_FAILURE, FETCH_TICKET_REQUEST, FETCH_TICKET_SUCCESS } from "./ticketType"


export const fetchTicketRequest = () =>{
    return{
        type: FETCH_TICKET_REQUEST
    }
}
const fetchTicketSuccess= (ticket) =>{
    return{
        type: FETCH_TICKET_SUCCESS,
        payload:ticket
    }
}
const fetchTicketFailure = (error) =>{
    return{
        type: FETCH_TICKET_FAILURE,
        payload:error
    }
}
export const fetchTicket=()=>{
    return(dispatch)=>{
        dispatch(fetchTicketRequest)
        const bookPassengerId=JSON.parse(localStorage.getItem('bookingId'))

        axios.get('http://localhost:8000/user/viewTickets',{params:{ bookPassengerId: bookPassengerId}})
        .then(response =>{ 
            const ticket=response.data
            console.log("tickettsss",ticket);
            console.log("ticket details",response.data);
            dispatch(fetchTicketSuccess(ticket))
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchTicketFailure(errorMsg))
        })
    }
}