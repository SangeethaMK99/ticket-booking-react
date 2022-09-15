import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './benefits.css'
import {useEffect} from 'react'
import{connect} from 'react-redux'
import { fetchBenefits } from "../../Redux/Benefits/benefitsAction";
import { benefitsObj } from "../../Redux/types";
interface benefitsProps{
    benefitsData:benefitsObj[]
    fetchBenefits:() =>void
}
function Benefits({benefitsData,fetchBenefits}:benefitsProps) {
    useEffect(() =>{
        fetchBenefits()
    },[])
    return(
        <div>
            <Header/>
            <div className="benefits">
                {benefitsData.map((post:any)=>{
                    return(    
                        <div>
                            <h3>{post.heading}</h3>
                            <ul>
                                <li>{post.list}</li>
                            </ul>
                        </div>
                    )}
                )}    
            </div>
            <Footer/>
        </div>
    );  
}
const mapStateToProps=(state:any)=>{
    return{
        benefitsData:state.benefits.benefits
    }
}
const mapDispatchToProps=(dispatch:any)=>{
    return{
        fetchBenefits:()=>{
            dispatch(fetchBenefits())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Benefits)



































