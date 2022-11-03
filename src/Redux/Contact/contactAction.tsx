import axios from "axios"
import { FETCH_CONTACT_FAILURE, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS } from "./contactType";

interface contact{
    type:string
}

 export const fetchContactRequest = () =>{
    return{
        type: FETCH_CONTACT_REQUEST
    }
}
export const fetchContactSuccess= (contact:contact) =>{
    return{
        type: FETCH_CONTACT_SUCCESS,
        payload:contact
    }
}
export const fetchContactFailure = (error:contact) =>{
    return{
        type: FETCH_CONTACT_FAILURE,
        payload:error
    }
}
export const fetchContact =()=>{
    return(dispatch:any)=>{
        dispatch(fetchContactRequest)
        axios.get('http://localhost:3800/contact')
        .then(response =>{
            const contact=response.data
            dispatch(fetchContactSuccess(contact))
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchContactFailure(errorMsg))
        })
    }
  }
  