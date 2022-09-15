import { SIGNIN,SIGNOUT } from "./authType";
const initialState = {
  auth: localStorage.getItem('logged_in') ? true : false
};
interface authState{
  auth:boolean
}
interface authAction{
  type:"SIGNIN" | "SIGNOUT"
}
export const authReducer = (state:authState = initialState, action:authAction) => {  
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        auth: true
      };
      case SIGNOUT:
        localStorage.removeItem('logged_in')
      return {
        ...state,
        auth:false
      };
    default:
      return state;
  }
};