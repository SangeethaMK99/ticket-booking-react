import { FETCH_BENEFITS_REQUEST,FETCH_BENEFITS_SUCCESS,FETCH_BENEFITS_FAILURE } from "./benefitsType"

const initialState={
    loading:false,
    benefits:[],
    error:''
 }
interface benefitState{
    loading:boolean
    benefits:string[]
    error:string
 }
 interface benefitAction{
    type:"FETCH_BENEFITS_REQUEST" |"FETCH_BENEFITS_SUCCESS" |"FETCH_BENEFITS_FAILURE"
    payload:[]
}
 const benefitsReducer = (state:benefitState = initialState, action:benefitAction) => {  
    switch (action.type) {
        case FETCH_BENEFITS_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_BENEFITS_SUCCESS:
            return {
                loading:false,
                benefits:action.payload,
                error:''          
        };
        case FETCH_BENEFITS_FAILURE:
            return {
                loading:false,
                benefits:[],
                error:action.payload  
        };
        default:
            return state;
    }
  };
export default benefitsReducer