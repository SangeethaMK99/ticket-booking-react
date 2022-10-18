import { FETCH_TICKET_FAILURE, FETCH_TICKET_REQUEST, FETCH_TICKET_SUCCESS } from "./ticketType";
const initialState={
    loading:false,
    ticket:[],
    error:''
 }
 
 const ticketReducer = (state= initialState, action) => {  
    switch (action.type) {
        case FETCH_TICKET_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_TICKET_SUCCESS:
            return {
                loading:false,
                ticket:action.payload,
                error:''       
        };
        case FETCH_TICKET_FAILURE:
            return {
                loading:false,
                ticket:[],
                error:action.payload   
        };
        default:
            return state
    }
  };
export default ticketReducer