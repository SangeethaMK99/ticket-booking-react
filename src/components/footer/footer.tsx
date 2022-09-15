import {FaInstagram} from "react-icons/fa";
import "./footer.css"

function Footer(){
    return(
        <div className="footer">
            <div className="footer-icon">
                <ul>
                    <li><FaInstagram/></li>
                </ul>
            </div>
            <p>TRAVELLY_001</p>
        </div>
    );  
}
export default Footer;