import { FETCH_CONTACT_FAILURE, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS } from "./contactType";

const initialState={
    loading:false,
    contact:[],
    error:''
 }
interface contactState{
    loading:boolean
    contact:string[]
    error:string
 }
interface contactAction{
    type:"FETCH_CONTACT_REQUEST" |"FETCH_CONTACT_SUCCESS" |"FETCH_CONTACT_FAILURE"
    payload:[]
}
 const contactReducer = (state:contactState = initialState, action:contactAction) => {  
    switch (action.type) {
        case FETCH_CONTACT_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_CONTACT_SUCCESS:
            return {
                loading:false,
                contact:action.payload,
                error:''          
        };
        case FETCH_CONTACT_FAILURE:
            return {
                loading:false,
                contact:[],
                error:action.payload   
        };
        default:
            return state;
    }
  };
export default contactReducer