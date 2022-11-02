import "./App.css";
import Home from "./pages/homePage/home";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import Contact from "./pages/contactPage/contact";
import About from "./pages/aboutPage/about";
import Benefits from "./pages/BenefitsPage/benefits";
import SignUp from "./pages/signUp/signUp";
import SignIn from "./pages/signIn/signIn";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Booking from "./pages/booking/booking";
import PassengerReceipt from "./pages/passengerReceipt/passengerReceipt";
import Tickets from "./pages/Tickets/ticket";
import ViewTickets from "./pages/viewTickets/viewTickets";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Cancel from "./pages/cancellation/cancel";
import PassengerCancel from "./pages/passengerCancel/passengerCancel";
import Services from "./components/services/services";

// import SearchBus from "./pages/searchBus/searchBus";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
        <Header/>

        <Route path="/signup" component={SignUp}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <PrivateRoute path="/booking" component={Booking}></PrivateRoute>
          {/* <PrivateRoute path="/payment" component={PaymentMethod}></PrivateRoute> */}
          <PrivateRoute path="/receipt" component={PassengerReceipt}></PrivateRoute>
          <PrivateRoute exact path="/" component={Home}></PrivateRoute> 
          <PrivateRoute path="/about" component={About}></PrivateRoute>
          <PrivateRoute path="/help" component={Benefits}></PrivateRoute>
          <PrivateRoute path="/contact" component={Contact}></PrivateRoute>
          <PrivateRoute path="/view" component={ViewTickets}></PrivateRoute>
          <PrivateRoute path="/viewTickets" component={Tickets}></PrivateRoute>
          <PrivateRoute path="/cancel" component={Cancel}></PrivateRoute>
          <PrivateRoute path="/services" component={Services}></PrivateRoute>
          <PrivateRoute path="/passengerCancel" component={PassengerCancel}></PrivateRoute>
          <Footer/>         
        </Router>
      </div>
    </Provider>
  );
}
export default App;
