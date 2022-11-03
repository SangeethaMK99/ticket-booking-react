import axios from "axios"
import { signOut } from "../../Redux/authentication/authAction"
import { fetchBookingFailure, fetchBookingRequest, fetchBookingSuccess } from "../../Redux/booking/bookingAction"
import { fetchHelpFailure, fetchHelpRequest, fetchHelpSuccess } from "../../Redux/customerHelp/helpAction"
import { fetchCancelFailure, fetchCancelRequest, fetchCancelSuccess } from "../../Redux/Delete/deleteAction"
import { fetchSliderFailure, fetchSliderRequest, fetchSliderSuccess } from "../../Redux/imageSlider/sliderAction"
import { fetchCardFailure, fetchCardRequest, fetchCardSuccess } from "../../Redux/placeCard/cardAction"
import { fetchBusFailure, fetchBusRequest, fetchBusSuccess } from "../../Redux/searchBus/searchBusAction"
import { fetchSignupFailure, fetchSignupRequest, fetchSignupSuccess } from "../../Redux/signUp/signUpAction"
import { fetchTicketFailure, fetchTicketRequest, fetchTicketSuccess } from "../../Redux/tickets/ticketAction"


axios.interceptors.request.use(
    (req)=>{
      const tokenData=localStorage.getItem("token")
      if(tokenData){
      req.headers['authorization']=tokenData
      }
      return req
    },
    (err)=>{
       return Promise.reject(err)
    }
  )
  export const fetchCard =()=>{
    return(dispatch)=>{
        dispatch(fetchCardRequest)
        // axios.get('http://localhost:8000/user/places')
        axios.get(`${process.env.REACT_APP_LOCAL_URL}places`)
        .then(response =>{
            const card=response.data
            dispatch(fetchCardSuccess(card))
            console.log(response);  
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchCardFailure(errorMsg))
            console.log("error",error);
            if(error.response.data.authentication==false){
              console.log("authentication",error.response.data.authentication);
              dispatch(signOut())
            }
        })
    }
  }
  export const fetchTicket=()=>{
    return(dispatch)=>{
        dispatch(fetchTicketRequest)
        const bookPassengerId=JSON.parse(localStorage.getItem('bookingId'))
        axios.get(`${process.env.REACT_APP_LOCAL_URL}viewTickets`,{params:{ bookPassengerId: bookPassengerId}})
        .then(response =>{ 
            const ticket=response.data
            console.log("tickettsss",ticket);
            console.log("ticket details",response.data);
            dispatch(fetchTicketSuccess(ticket))
        })
        .catch(error =>{
            const errorMsg=error.Message
            dispatch(fetchTicketFailure(errorMsg))
        })
    }
}
export const fetchSignup=(userName,email,password)=>{
  return(dispatch)=>{
      dispatch(fetchSignupRequest)
      axios.post(`${process.env.REACT_APP_LOCAL_URL}signup`,{username:userName,
      email:email,
      password:password
  }).then((res)=>
      {
       console.log(res);
       const signup=res.data.data
       console.log("signupdata",signup);

          dispatch(fetchSignupSuccess(signup))
      })
      .catch(error =>{
          const errorMsg=error.Message
          dispatch(fetchSignupFailure(errorMsg))
      })
  }
}
export const fetchBus=(starting_point,destination,formatSearchDate,setShow,setSearchBus)=>{
  return(dispatch)=>{
      dispatch(fetchBusRequest)
      axios.post(`${process.env.REACT_APP_LOCAL_URL}search`,{starting_point:starting_point,destination:destination,date:formatSearchDate})
      .then(response =>{
          const search=response.data
          console.log(search);
          setSearchBus(response.data.data)
          setShow(true)
          dispatch(fetchBusSuccess())    
      })
      .catch(error =>{
          const errorMsg=error.Message
          dispatch(fetchBusFailure(errorMsg))
      })
  }
}
export const fetchSlider =()=>{
  return(dispatch)=>{
      dispatch(fetchSliderRequest)
      axios.get(`${process.env.REACT_APP_LOCAL_URL}imgs`)
      .then(response =>{
          const images=response.data
          console.log(images);
          
          dispatch(fetchSliderSuccess(images))
      })
      .catch(error =>{
          const errorMsg=error.Message
          dispatch(fetchSliderFailure(errorMsg))

      })
  }
}

export const fetchCancel =(date,destination,id)=>{
  return(dispatch)=>{
      dispatch(fetchCancelRequest)
      axios.delete(`${process.env.REACT_APP_LOCAL_URL}cancelticket`,{data:{date:date,destination:destination,id: id}}).then(res =>{
          const cancel=res.data
          console.log(cancel); 
          dispatch(fetchTicket())
          
          dispatch(fetchCancelSuccess(cancel))
      }).catch(error =>{
         const errorMsg=error.Message
          dispatch(fetchCancelFailure(errorMsg))   
      })        
  }
}
export const fetchHelp=(name,phone)=>{
  return(dispatch)=>{
      dispatch(fetchHelpRequest)
      axios.post(`${process.env.REACT_APP_LOCAL_URL}help`,{name:name,
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
export const fetchBooking =(name,email,phone,startPoint,stopPoint,busName,busDate,busTime,fare,payment)=>{
  return(dispatch)=>{
      dispatch(fetchBookingRequest)
      axios.post(`${process.env.REACT_APP_LOCAL_URL}passenger`,{name:name,
      email:email,
      phone:phone,
      startPoint:startPoint,
      stopPoint:stopPoint ,
      busName:busName,
      busDate:busDate,
      busTime:busTime,
      fare:fare,
      payment:payment
      },
      ).then((res)=>
      {
       console.log("passenger id",res.data);
      const booking=res.data
      console.log("booking details.....",booking);
      const bookid=booking.data?.map((ele)=> ele.id)
      console.log(bookid);
      const bookingId=bookid[0]
      localStorage.setItem('bookingId',JSON.stringify(bookingId))
      dispatch(fetchBookingSuccess(booking))

      
      })
      .catch(error =>{
          const errorMsg=error.Message
          dispatch(fetchBookingFailure(errorMsg))

      })
  }
}




































































































































































































































































































































