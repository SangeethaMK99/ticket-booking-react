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
          <PrivateRoute path="/receipt" component={PassengerReceipt}></PrivateRoute>
          <PrivateRoute exact path="/" component={Home}></PrivateRoute> 
          <PrivateRoute path="/about" component={About}></PrivateRoute>
          <PrivateRoute path="/benefits" component={Benefits}></PrivateRoute>
          <PrivateRoute path="/contact" component={Contact}></PrivateRoute>
          <PrivateRoute path="/view" component={ViewTickets}></PrivateRoute>
          <PrivateRoute path="/viewTickets" component={Tickets}></PrivateRoute>
          <Footer/>         
        </Router>
      </div>
    </Provider>
  );
}
export default App;
