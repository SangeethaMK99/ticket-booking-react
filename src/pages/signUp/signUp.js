import './signUp.css'
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchSignup } from '../../Redux/signUp/signUpAction';
import 'react-toastify/dist/ReactToastify.css';
import {  toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { fetchSignup } from '../../components/action/action';


const SignUp = (props) => {

    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const dispatch=useDispatch()
    const signup = useSelector(state => state.signup.signup)
    const signupData=signup?.map((ele)=>ele.email)
    console.log("signupdataaaa",signupData);
    const signupEmail=signupData[0]
    console.log("signupemaildata",signupEmail);
    console.log("emailfrontend",email);

    const reg =(e) => {
        e.preventDefault()
        if(signupEmail==email){
            toast.error("email address already registered !",{position: toast.POSITION.TOP_RIGHT,autoClose: 2000,})
          }
          
        dispatch(fetchSignup(userName,email,password))
    }   
    return (
        <div>
        <div className='signup'>
            <h1>PLEASE SIGN UP</h1>
        <form >
            <label>
            username:<br/>
            <input type="text" value={userName}
            onChange={(e) => setUserName(e.target.value)}
             />
            </label><br/>
            <label>
            email:<br/>
            <input type="text" value={email}
            onChange={(e) =>setEmail(e.target.value)}
            />
            </label><br/>
            <label>
            password:<br/>
            <input type="text" value={password}
            onChange={(e) =>setPassword(e.target.value)}
            />
            </label><br/><br/>
            <button className='btn' onClick={(e)=>reg(e)}>Sign Up</button>
            </form>

        </div>
        <ToastContainer/>
        </div>
    );
}
export default SignUp
