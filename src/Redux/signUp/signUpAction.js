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
export const fetchSignup=(userName,email,password)=>{
    return(dispatch)=>{
        dispatch(fetchSignupRequest)
        axios.post("http://localhost:8000/user/signup",{username:userName,
        email:email,
        password:password
    }).then((res)=>
        {
         console.log(res);
         const signup=res.data.data
         console.log("signupdata",signup);

            dispatch(fetchSignupSuccess(signup))
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchSignupFailure(errorMsg))
        })
    }
}