import { FETCH_SIGNUP_FAILURE, FETCH_SIGNUP_REQUEST, FETCH_SIGNUP_SUCCESS } from "./signUpType";
const initialState={
    loading:false,
    signup:[],
    error:''
 }
 
 const SignupReducer = (state= initialState, action) => {  
    switch (action.type) {
        case FETCH_SIGNUP_REQUEST:
            return {
                ...state,
                loading:true
        };
        case FETCH_SIGNUP_SUCCESS:
            return {
                loading:false,
                signup:action.payload,
                error:''       
        };
        case FETCH_SIGNUP_FAILURE:
            return {
                loading:false,
                signup:[],
                error:action.payload   
        };
        default:
            return state;
    }
  };
export default SignupReducer