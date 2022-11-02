import { FETCH_TICKETCANCEL_FAILURE, FETCH_TICKETCANCEL_REQUEST, FETCH_TICKETCANCEL_SUCCESS } from "./ticketCancelType";
const initialState={
    loading:false,
    ticketCancel:[],
    error:''
 }
 
 const ticketCancelReducer = (state= initialState, action) => {  
    switch (action.type) {
        case FETCH_TICKETCANCEL_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_TICKETCANCEL_SUCCESS:
            return {
                loading:false,
                ticketCancel:action.payload,
                error:''       
        };
        case FETCH_TICKETCANCEL_FAILURE:
            return {
                loading:false,
                ticketCancel:[],
                error:action.payload   
        };
        default:
            return state
    }
  };
export default ticketCancelReducer