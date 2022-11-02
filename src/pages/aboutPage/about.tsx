import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { connect } from "react-redux";
import './about.css'
import {useEffect} from 'react'
import { aboutObj } from "../../Redux/types";
import { fetchAbout } from "../../Redux/About/aboutAction";
interface aboutProps{
    aboutData:aboutObj[]
    fetchAbout:()=>void
}
interface aboutState{
    about:any
}
function About({aboutData,fetchAbout}:aboutProps) {

    useEffect(() => {
        fetchAbout()
      },[])
    return(
        <div>
            <div className="about">
                <div className="img">
                <img src="https://st.depositphotos.com/1038076/4870/i/450/depositphotos_48701865-stock-photo-about-us.jpg" alt="err" width="600" height="500"></img>
                </div>
                {aboutData.map((post:any)=>{
                    return( 
                        <div className="aboutData">
                            <h2>{post.heading}</h2>
                            <p>{post.paragraph}</p>
                        </div>
                    )}
                )}   
            </div>
            {/* <Footer/> */}
        </div>
    );   
}
const mapStateToProps=(state:aboutState)=>{
    return{
        aboutData:state.about.about
    }
}
const mapDispatchToProps=(dispatch:any)=>{
    return{
        fetchAbout:()=>{
            dispatch(fetchAbout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About)































