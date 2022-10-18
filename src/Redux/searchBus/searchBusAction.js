import axios from "axios"
import { FETCH_BUS_FAILURE, FETCH_BUS_REQUEST, FETCH_BUS_SUCCESS } from "./searchBusType"


export const fetchBusRequest = () =>{
    return{
        type: FETCH_BUS_REQUEST
    }
}
const fetchBusSuccess= (booking) =>{
    return{
        type: FETCH_BUS_SUCCESS,
        payload:booking
    }
}
const fetchBusFailure = (error) =>{
    return{
        type: FETCH_BUS_FAILURE,
        payload:error
    }
}
export const fetchBus=(starting_point,destination,formatSearchDate,setShow,setSearchBus)=>{
    return(dispatch)=>{
        dispatch(fetchBusRequest)
        axios.post('http://localhost:8000/user/search',{starting_point:starting_point,destination:destination,date:formatSearchDate})
        .then(response =>{
            const search=response.data
            console.log(search);
            setSearchBus(response.data.data)
            setShow(true)
            dispatch(fetchBusSuccess())
            
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchBusFailure(errorMsg))
        })
    }
}