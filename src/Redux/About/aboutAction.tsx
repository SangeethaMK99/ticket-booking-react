import axios from "axios"
import { FETCH_ABOUT_REQUEST,FETCH_ABOUT_SUCCESS,FETCH_ABOUT_FAILURE } from "./aboutType"
interface about{
    type:string
}

 export const fetchAboutRequest = () =>{
    return{
        type: FETCH_ABOUT_REQUEST
    }
}
const fetchAboutSuccess= (about:about) =>{
    return{
        type: FETCH_ABOUT_SUCCESS,
        payload:about
    }
}
const fetchAboutFailure = (error:about) =>{
    return{
        type: FETCH_ABOUT_FAILURE,
        payload:error
    }
}
export const fetchAbout =()=>{
    return(dispatch:any)=>{
        dispatch(fetchAboutRequest)
        axios.get('http://localhost:3800/about')
        .then(response =>{
            const about=response.data
            dispatch(fetchAboutSuccess(about))
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchAboutFailure(errorMsg))


        })
    }
}