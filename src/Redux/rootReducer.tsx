import { combineReducers } from "redux";
import { authReducer } from "./authentication/authReducer";
import aboutReducer from './About/aboutReducer'
import benefitsReducer from "./Benefits/benefitsReducer";
import contactReducer from "./Contact/contactReducer";
import headerReducer from "./Header/headerReducer";
import sliderReducer from "./imageSlider/sliderReducer";
import cardReducer from "./placeCard/cardReducer";
import bookingReducer from "./booking/bookingReducer";
import busReducer from "./searchBus/searchBusReducer";
import SignupReducer from "./signUp/signUpReducer";
import ticketReducer from "./tickets/ticketReducer";
import customerHelpReducer from "./customerHelp/helpReducer";
import cancelReducer from "./Delete/deleteReducer";


const rootReducer= combineReducers({
    about:aboutReducer,
    header:headerReducer,
    benefits:benefitsReducer,
    contact:contactReducer,
    card:cardReducer,
    images:sliderReducer,
    auth:authReducer,
    booking:bookingReducer,
    bus:busReducer,
    signup:SignupReducer,
    ticket:ticketReducer,
    cancel:cancelReducer,
    help:customerHelpReducer      

})
export default rootReducer