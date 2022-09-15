import { FETCH_SLIDER_REQUEST,FETCH_SLIDER_SUCCESS,FETCH_SLIDER_FAILURE } from "./sliderType";
const initialState={
    loading:false,
    slider:[],
    error:''
 }
 interface sliderState{
    loading:boolean
    slider:string[]
    error:string
 }
 interface sliderAction{
    type:"FETCH_SLIDER_REQUEST" |"FETCH_SLIDER_SUCCESS" |"FETCH_SLIDER_FAILURE"
    payload:[] 
}
 const sliderReducer = (state:sliderState = initialState, action:sliderAction) => {  
    switch (action.type) {
        case FETCH_SLIDER_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_SLIDER_SUCCESS:
            return {
                loading:false,
                slider:action.payload,
                error:''       
        };
        case FETCH_SLIDER_FAILURE:
            return {
                loading:false,
                slider:[],
                error:action.payload   
        };
        default:
            return state;
    }
  };
export default sliderReducer