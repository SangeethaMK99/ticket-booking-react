import axios from "axios"
import { FETCH_HEADER_REQUEST,FETCH_HEADER_SUCCESS,FETCH_HEADER_FAILURE } from "./headerType"
 
interface header{
    type:string
}
export const fetchHeaderRequest = () =>{
    return{
        type: FETCH_HEADER_REQUEST
    }
}
export const fetchHeaderSuccess=(header:header)=>{
    return{
        type: FETCH_HEADER_SUCCESS,
        payload:header
    }
}

export const fetchHeaderFailure = (error:header)=>{
    return{
        type: FETCH_HEADER_FAILURE,
        payload:error
    }
}

export const fetchHeader =()=>{
    return(dispatch:any)=>{
        dispatch(fetchHeaderRequest)
        axios.get('http://localhost:3800/headers')
        .then(response =>{
            const header=response.data
            dispatch(fetchHeaderSuccess(header))
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchHeaderFailure(errorMsg))
  
  
        })
    }
  }