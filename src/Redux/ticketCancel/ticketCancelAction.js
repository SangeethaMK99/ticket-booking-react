import axios from "axios"
import { FETCH_TICKETCANCEL_FAILURE, FETCH_TICKETCANCEL_REQUEST, FETCH_TICKETCANCEL_SUCCESS } from "./ticketCancelType"


export const fetchTicketCancelRequest = () =>{
    return{
        type: FETCH_TICKETCANCEL_REQUEST
    }
}
const fetchTicketCancelSuccess= (ticketCancel) =>{
    return{
        type: FETCH_TICKETCANCEL_SUCCESS,
        payload:ticketCancel
    }
}
const fetchTicketCancelFailure = (error) =>{
    return{
        type: FETCH_TICKETCANCEL_FAILURE,
        payload:error
    }
}
export const fetchTicketCancel=()=>{
    return(dispatch)=>{
        dispatch(fetchTicketCancelRequest)
        const bookPassengerId=JSON.parse(localStorage.getItem('bookingId'))

        axios.get('http://localhost:8000/user/ticketcancelview',{params:{ bookPassengerId: bookPassengerId}})
        .then(response =>{ 
            const ticketCancel=response.data
            console.log("tickettsss",ticketCancel);
            console.log("ticket details",response.data);
            dispatch(fetchTicketCancelSuccess(ticketCancel))
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchTicketCancelFailure(errorMsg))
        })
    }
}