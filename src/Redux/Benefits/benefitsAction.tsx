import axios from "axios"
import { FETCH_BENEFITS_REQUEST,FETCH_BENEFITS_SUCCESS,FETCH_BENEFITS_FAILURE } from "./benefitsType"
interface benefits{
    type:string
}

 export const fetchBenefitsRequest = () =>{
    return{
        type: FETCH_BENEFITS_REQUEST
    }
}
const fetchBenefitsSuccess= (benefits:benefits) =>{
    return{
        type: FETCH_BENEFITS_SUCCESS,
        payload:benefits
    }
}
const fetchBenefitsFailure = (error:benefits) =>{
    return{
        type: FETCH_BENEFITS_FAILURE,
        payload:error
    }
}

export const fetchBenefits =()=>{
    return(dispatch:any)=>{
        dispatch(fetchBenefitsRequest)
        axios.get('http://localhost:3800/help')
        .then(response =>{
            const benefits=response.data
            dispatch(fetchBenefitsSuccess(benefits))
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchBenefitsFailure(errorMsg))
        })
    }
}