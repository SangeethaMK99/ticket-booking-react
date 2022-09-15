import { FETCH_ABOUT_FAILURE, FETCH_ABOUT_REQUEST, FETCH_ABOUT_SUCCESS } from "./aboutType";

const initialState={
    loading:false,
    about:[],
    error:''
 }
interface aboutState{
    loading:boolean
    about:string[]
    error:string
 }
interface aboutAction{
    type:"FETCH_ABOUT_REQUEST" |"FETCH_ABOUT_SUCCESS" |"FETCH_ABOUT_FAILURE"
    payload:[]
}
    const aboutReducer=(state:aboutState = initialState, action:aboutAction) =>{
    switch (action.type) {
        case FETCH_ABOUT_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_ABOUT_SUCCESS:
            return {
                loading:false,
                about:action.payload,
                error:'' 
                  
        };
        case FETCH_ABOUT_FAILURE:
            return {
                loading:false,
                about:[],
                error:action.payload  
        };
        default:
            return state;
    }
  };
export default aboutReducer