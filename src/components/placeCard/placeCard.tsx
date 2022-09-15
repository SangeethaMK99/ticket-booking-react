import "./placeCard.css"
import {Component} from 'react';
import { connect } from "react-redux";
import {cardObj} from "../../Redux/types"
// import axios from "axios";
import { fetchCard } from "../action/action";



interface cardProps{
  cardData:cardObj[] | any
  fetchCard:() => void
}
interface places{
  list:[]
}

class Places extends Component<cardProps,places>{
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
      <div className="card">
     {this.props.cardData.data && this.props.cardData.data.map((post:any)=>{
      return(
      <div className="row">
      <div>
        <h3>{post.name}</h3>
        <p>{post.description}</p><br/><br/><br/>
      </div> 
    </div> 
     )})}
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

const mapStateToProps=(state:any)=>{
  return{
      cardData:state.card.card
  }
}
const mapDispatchToProps=(dispatch:any)=>{
  return{
      fetchCard:()=>{
          dispatch(fetchCard())
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Places)


























































































































































































































