import { FETCH_HELP_FAILURE, FETCH_HELP_REQUEST, FETCH_HELP_SUCCESS } from "./helpType";
const initialState={
    loading:false,
    help:[],
    error:''
 }
 
 const customerHelpReducer = (state= initialState, action) => {  
    switch (action.type) {
        case FETCH_HELP_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_HELP_SUCCESS:
            return {
                loading:false,
                help:action.payload,
                error:''       
        };
        case FETCH_HELP_FAILURE:
            return {
                loading:false,
                help:[],
                error:action.payload   
        };
        default:
            return state;
    }
  };
export default customerHelpReducer