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
function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
        <Route path="/signup" component={SignUp}></Route>
          <Route path="/signin" component={SignIn}></Route>
          {/* <Route path="/home" component={Home}></Route> */}
          <PrivateRoute exact path="/" component={Home}></PrivateRoute> 
           <PrivateRoute path="/about" component={About}></PrivateRoute>
          <PrivateRoute path="/benefits" component={Benefits}></PrivateRoute>
          <PrivateRoute path="/contact" component={Contact}></PrivateRoute>
        </Router>
      </div>
    </Provider>
  );
}
export default App;
