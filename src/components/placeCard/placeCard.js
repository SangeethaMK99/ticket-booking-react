import "./placeCard.css"
import {Component} from 'react';
import { connect } from "react-redux";
import {cardObj} from "../../Redux/types"
// import axios from "axios";
import { fetchCard } from "../action/action";
import Box from '@material-ui/core/Box';
import { FaBluetooth } from "react-icons/fa";



class Places extends Component{
  // constructor(props:any){
  //   super(props)
  //   this.state={
  //     list:[]
  //   }
  // }

  componentDidMount(){
    this.props.fetchCard()
  }

  render(){
    console.log("inside render");
    console.log("card data",this.props.cardData.data);
    return(
      <div className="travelly">
      <Box sx={{
        height: 400,
        border: '1px solid grey',
        margin:60
      }}>
        <h1>Why Travelly for Booking?</h1>

      <div className="card">
     {this.props.cardData.data && this.props.cardData.data.map((post)=>{
      return(
        <Box  sx={{
          width: 300,
          height: 200,
          border: '1px solid grey',
          margin:60
        }}>

      <div className="row">

      <div>
        <h3>{post.name}</h3>
        <p>{post.description}</p><br/><br/><br/>
      </div>
    </div> 
    </Box> 

     )})}

    </div>  
    </Box>
    </div> 
    )  
  }   
  // componentWillUpdate(){
  //   console.log("will update");
    
  // }
  //  componentDidUpdate(){
  //   console.log("did update");
    
  // }
  //  componentWillUnmount(){
  //   console.log("will unmount");
    
  // }

  }

const mapStateToProps=(state)=>{
  return{
      cardData:state.card.card
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      fetchCard:()=>{
          dispatch(fetchCard())
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Places)


























































































































































































































