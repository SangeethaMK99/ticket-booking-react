import axios from "axios"
import { FETCH_HELP_FAILURE, FETCH_HELP_REQUEST, FETCH_HELP_SUCCESS } from "./helpType"


export const fetchHelpRequest = () =>{
    return{
        type: FETCH_HELP_REQUEST
    }
}
export const fetchHelpSuccess= (help) =>{
    return{
        type: FETCH_HELP_SUCCESS,
        payload:help
    }
}
export const fetchHelpFailure = (error) =>{
    return{
        type: FETCH_HELP_FAILURE,
        payload:error
    }
}
  
  
  
  