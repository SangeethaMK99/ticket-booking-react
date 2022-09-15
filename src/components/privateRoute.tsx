
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
interface authState{
  auth:boolean
}
const PrivateRoute = ({ auth,component: Component, ...rest }:any) => {
  console.log(auth);
  return (
    <Route {...rest} render={(props) =>
        auth.auth ? 
        <Component {...props} /> 
        : <Redirect to="/signin"/>
      }
    />
  );
};
const mapStateToProps = (state:authState) => {
  return {
    auth:state.auth,
  }
};
export default connect(mapStateToProps)(PrivateRoute);
