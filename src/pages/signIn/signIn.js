import './signIn.css'
import { useState} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn,signOut} from '../../Redux/authentication/authAction';
import axios from 'axios';

     
    const SignIn = (props) => {
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const history=useHistory()
    const handleLogin = (e) => {
        e.preventDefault()
        props.signin()
            axios.post("http://localhost:8000/user/signin",{username:userName,
            password:password
            
        }).then((res)=>
            {
            //  console.log(res.data)   
            localStorage.setItem('logged_in',true)
            localStorage.setItem('token',res.data.token)
             if(res.data.login){
                history.push('/')
             }

        }).catch( err=>{
                console.log(err);
        })  
    }
    return (
        <div className='login'>
            <h1>PLEASE SIGN IN</h1>
        <form>
            <label>
            Username:<br/>
            <input type="text" value={userName}
            onChange={(e) =>setUserName(e.target.value)}
             />
            </label><br/>
            <label>
            password:<br/>
            <input type="text" value={password}
            onChange={(e) =>setPassword(e.target.value)}
            />
            </label><br/><br/>
            <button className='btn' onClick={(e)=>handleLogin(e)}>Sign In</button>
            </form>
        </div>
    );
};
const mapDispatchToProps=(dispatch)=>{
    return{
        signin:()=>{
            dispatch(signIn())
        }
         
    }
}
export default connect(null,mapDispatchToProps)(SignIn)
