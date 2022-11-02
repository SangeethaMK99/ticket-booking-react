import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './benefits.css'
import {useEffect, useState} from 'react'
import{connect} from 'react-redux'
import { fetchBenefits } from "../../Redux/Benefits/benefitsAction";
import { benefitsObj } from "../../Redux/types";
import { Button } from "@material-ui/core";
import PopUp from "../../components/popup/popUp";

function Benefits({benefitsData,fetchBenefits}) {
    useEffect(() =>{
        fetchBenefits()
    },[])
    const[openPopup,setOpenPopup]=useState(false)

    return(
        <div>
            {/* <Header/> */}
            <div className="benefits">
                {benefitsData.map((post)=>{
                    return(    
                        <div>
                            <h3>{post.heading}</h3>
                            <p>{post.description}</p>
                        </div>
                    )}
                )} 
                <Button variant='contained' color='secondary' onClick={()=>setOpenPopup(true)}> Faster Support </Button>
   
            </div>
            <PopUp
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}       
    >
    </PopUp>
            
            {/* <Footer/> */}
        </div>
    );  
}
const mapStateToProps=(state)=>{
    return{
        benefitsData:state.benefits.benefits
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchBenefits:()=>{
            dispatch(fetchBenefits())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Benefits)



































