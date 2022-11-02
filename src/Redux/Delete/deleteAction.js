import axios from "axios"
import { fetchTicket } from "../tickets/ticketAction";
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
export const fetchCancel =(date,destination,id)=>{
    return(dispatch)=>{
        dispatch(fetchCancelRequest)
        axios.delete('http://localhost:8000/user/cancelticket',{data:{date:date,destination:destination,id: id}}).then(res =>{
            const cancel=res.data
            console.log(cancel); 
            dispatch(fetchTicket())
            
            dispatch(fetchCancelSuccess(cancel))
        }).catch(error =>{
           const errorMsg=error.Message
            dispatch(fetchCancelFailure(errorMsg))   
        })        
    }
  }


