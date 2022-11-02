import axios from "axios"
import { FETCH_HELP_FAILURE, FETCH_HELP_REQUEST, FETCH_HELP_SUCCESS } from "./helpType"


export const fetchHelpRequest = () =>{
    return{
        type: FETCH_HELP_REQUEST
    }
}
export const fetchHelpSuccess= (help) =>{
    return{
        type: FETCH_HELP_SUCCESS,
        payload:help
    }
}
export const fetchHelpFailure = (error) =>{
    return{
        type: FETCH_HELP_FAILURE,
        payload:error
    }
}
export const fetchHelp=(name,phone)=>{
    return(dispatch)=>{
        dispatch(fetchHelpRequest)
        axios.post("http://localhost:8000/user/help",{name:name,
        phone:phone
    }).then((res)=>
        {
         console.log(res);
         const help=res.data.data
         console.log("passengerhelp",help);

            dispatch(fetchHelpSuccess(help))
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchHelpFailure(errorMsg))
        })
    }
}