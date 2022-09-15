// import axios from "axios"
import { FETCH_CARD_REQUEST,FETCH_CARD_SUCCESS,FETCH_CARD_FAILURE } from "./cardType"

interface cards{
    type:string
}
export const fetchCardRequest = () =>{
    return{
        type: FETCH_CARD_REQUEST
    }
}
export const fetchCardSuccess= (card:cards) =>{
    return{
        type: FETCH_CARD_SUCCESS,
        payload:card
    }
}
export const fetchCardFailure = (error:cards) =>{
    return{
        type: FETCH_CARD_FAILURE,
        payload:error
    }
}





// export const fetchCard =()=>{
//     return(dispatch:any)=>{
//         dispatch(fetchCardRequest)
//         axios.get('http://localhost:3800/cards')
//         .then(response =>{
//             const card=response.data
//             dispatch(fetchCardSuccess(card))
//         })
//         .catch(error =>{
//             const errorMsg=error.Message
//             dispatch(fetchCardFailure(errorMsg))


//         })
//     }
// }