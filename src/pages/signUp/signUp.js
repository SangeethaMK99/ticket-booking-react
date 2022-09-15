import './signUp.css'
import { useState} from 'react';
import axios from 'axios';


const SignUp = (props) => {

    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");


    const reg =(e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/user/signup",{username:userName,
        email:email,
        password:password
    }).then((res)=>
        {
         console.log(res);   
    }).catch( err=>{
        console.log(err);
})
}   
    return (
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
    );
}
export default SignUp
