import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useEffect} from "react";
import { connect } from "react-redux";
import './contact.css'
import { fetchContact } from "../../Redux/Contact/contactAction";
import { contactObj } from "../../Redux/types";
interface contactProps{
    contactData:contactObj[]
    fetchContact:()=>void
}
    function Contact({contactData,fetchContact}:contactProps) {
    useEffect(() => {
        fetchContact()
    },[])
    return(
        <div>
            {/* <Header/> */}
            <div className="contact">
                {contactData.map((post:any)=>{
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
const mapStateToProps=(state:any)=>{
    return{
        contactData:state.contact.contact
    }
}
const mapDispatchToProps=(dispatch:any)=>{
    return{
        fetchContact:()=>{
            dispatch(fetchContact())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact)
























