import { FETCH_CANCEL_FAILURE, FETCH_CANCEL_REQUEST, FETCH_CANCEL_SUCCESS } from "./deleteType";
const initialState={
    loading:false,
    cancel:[],
    error:''
 }

 const cancelReducer = (state = initialState, action) => {  
    switch (action.type) {
        case FETCH_CANCEL_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_CANCEL_SUCCESS:
            return {
                loading:false,
                cancel:action.payload,
                error:''
        };
        case FETCH_CANCEL_FAILURE:
            return {
                loading:false,
                cancel:[],
                error:action.payload   
        };
        default:
            return state;
    }
  };
export default cancelReducer