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
            {/* <Header/> */}
            <div className="about">
                {aboutData.map((post:any)=>{
                    return( 
                        <div>
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



































