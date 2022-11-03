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
export const fetchSliderSuccess= (slider:slider) =>{
    return{
        type: FETCH_SLIDER_SUCCESS,
        payload:slider
    }
}

export const fetchSliderFailure = (error:slider) =>{
    return{
        type: FETCH_SLIDER_FAILURE,
        payload:error
    }
}

