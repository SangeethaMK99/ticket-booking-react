import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import "./buttons.css"
interface buttonProps{
    setButtons:any
}
function Buttons(props:buttonProps){

    return(
        <div>
            <div className="btn">
            <Button id="btn1" variant='contained' color='secondary' onClick={()=>props.setButtons('form')} >BOOK TICKETS</Button>
            {/* <Button id="btn2" variant='contained' color='secondary'  onClick={()=>props.setButtons('viewTickets')}>VIEW TICKETS</Button> */}
            <Button id="btn2" variant='contained' color='secondary' ><Link to="/view" style={{textDecoration:"none", color:"white"}}>VIEW TICKETS</Link></Button>
            <Button id="btn3" variant='contained' color='secondary'><Link to="/services" style={{textDecoration:"none", color:"white"}}>Services</Link></Button>
            </div>
            
        </div>
    )
}
export default Buttons;
