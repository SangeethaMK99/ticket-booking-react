import axios from "axios"
import { FETCH_SLIDER_FAILURE, FETCH_SLIDER_REQUEST, FETCH_SLIDER_SUCCESS } from "./sliderType";

interface slider{
    type:string
}
export const fetchSliderRequest = () =>{
    return{
        type: FETCH_SLIDER_REQUEST
    }
}
const fetchSliderSuccess= (slider:slider) =>{
    return{
        type: FETCH_SLIDER_SUCCESS,
        payload:slider
    }
}

const fetchSliderFailure = (error:slider) =>{
    return{
        type: FETCH_SLIDER_FAILURE,
        payload:error
    }
}

export const fetchSlider =()=>{
    return(dispatch:any)=>{
        dispatch(fetchSliderRequest)
        axios.get('http://localhost:8000/user/imgs')
        .then(response =>{
            const images=response.data
            console.log(images);
            
            dispatch(fetchSliderSuccess(images))
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchSliderFailure(errorMsg))

        })
    }
}