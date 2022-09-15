
import { FETCH_HEADER_FAILURE, FETCH_HEADER_REQUEST, FETCH_HEADER_SUCCESS } from "./headerType";

const initialState={
    loading:false,
    header:[],
    error:''
}
 interface headerState{
    loading:boolean
    header:string[]
    error:string
}
 interface headerAction{
    type:"FETCH_HEADER_REQUEST" |"FETCH_HEADER_SUCCESS" |"FETCH_HEADER_FAILURE"
    payload:[]
}
 const headerReducer = (state :headerState= initialState, action:headerAction) => {  
    switch (action.type) {
        case FETCH_HEADER_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_HEADER_SUCCESS:
            return {
                loading:false,
                header:action.payload,
                error:''              
        };
        case FETCH_HEADER_FAILURE:
            return {
                loading:false,
                header:[],
                error:action.payload    
        };
        default:
            return state;
    }
};
export default headerReducer