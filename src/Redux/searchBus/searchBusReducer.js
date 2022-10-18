import { FETCH_BUS_FAILURE, FETCH_BUS_REQUEST, FETCH_BUS_SUCCESS } from "./searchBusType";
const initialState={
    loading:false,
    bus:[],
    error:''
 }
 
 const busReducer = (state= initialState, action) => {  
    switch (action.type) {
        case FETCH_BUS_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_BUS_SUCCESS:
            return {
                loading:false,
                bus:action.payload,
                error:''       
        };
        case FETCH_BUS_FAILURE:
            return {
                loading:false,
                bus:[],
                error:action.payload   
        };
        default:
            return state
    }
  };
export default busReducer