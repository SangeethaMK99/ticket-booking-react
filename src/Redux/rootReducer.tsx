import { combineReducers } from "redux";
import { authReducer } from "./authentication/authReducer";
import aboutReducer from './About/aboutReducer'
import benefitsReducer from "./Benefits/benefitsReducer";
import contactReducer from "./Contact/contactReducer";
import headerReducer from "./Header/headerReducer";
import sliderReducer from "./imageSlider/sliderReducer";
import cardReducer from "./placeCard/cardReducer";

const rootReducer= combineReducers({
    about:aboutReducer,
    header:headerReducer,
    benefits:benefitsReducer,
    contact:contactReducer,
    card:cardReducer,
    images:sliderReducer,
    auth:authReducer,
})
export default rootReducer