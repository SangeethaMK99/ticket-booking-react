import { FETCH_BENEFITS_FAILURE } from "../Benefits/benefitsType";
import { FETCH_BOOKING_FAILURE, FETCH_BOOKING_REQUEST, FETCH_BOOKING_SUCCESS } from "./bookingType";
const initialState={
    loading:false,
    booking:[],
    error:''
}
 const bookingReducer = (state = initialState, action) => {  
    switch (action.type) {
        case FETCH_BOOKING_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_BOOKING_SUCCESS:
            return {
                loading:false,
                booking:action.payload,
                error:''       
        };
        case FETCH_BOOKING_FAILURE:
            return {
                loading:false,
                booking:[],
                error:action.payload   
        };
        default:
            return state;
    }
  };
export default bookingReducer