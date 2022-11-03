import axios from "axios"
import { FETCH_SIGNUP_FAILURE, FETCH_SIGNUP_REQUEST, FETCH_SIGNUP_SUCCESS } from "./signUpType"


export const fetchSignupRequest = () =>{
    return{
        type: FETCH_SIGNUP_REQUEST
    }
}
export const fetchSignupSuccess= (signup) =>{
    return{
        type: FETCH_SIGNUP_SUCCESS,
        payload:signup
    }
}
export const fetchSignupFailure = (error) =>{
    return{
        type: FETCH_SIGNUP_FAILURE,
        payload:error
    }
}
