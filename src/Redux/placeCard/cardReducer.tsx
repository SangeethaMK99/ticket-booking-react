import { SIGNOUT } from "../authentication/authType";
import { FETCH_CARD_FAILURE, FETCH_CARD_REQUEST, FETCH_CARD_SUCCESS } from "./cardType";

const initialState={
    loading:false,
    card:[],
    error:''
 }
interface cardState{
    loading:boolean
    card:string[] | any
    error:string
 }
interface cardAction{
    type:"FETCH_CARD_REQUEST" |"FETCH_CARD_SUCCESS" |"FETCH_CARD_FAILURE" | "SIGNOUT"
    payload:[]
}
 const cardReducer = (state:cardState = initialState, action:cardAction) => {  
    switch (action.type) {
        case FETCH_CARD_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_CARD_SUCCESS:
            return {
                loading:false,
                card:action.payload,
                error:''          
        };
        case FETCH_CARD_FAILURE:
            return {
                loading:false,
                card:[],
                error:action.payload    
        };
        case SIGNOUT:
            return{
                card:[]   
            }   
        default:
            return state;
    }
  };
  
export default cardReducer



