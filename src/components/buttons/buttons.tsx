
import "./buttons.css"
interface buttonProps{
    setButtons:any
}
function Buttons(props:buttonProps){

    return(
        <div>
            <div className="btn">
            <button id="btn1" onClick={()=>props.setButtons('form')} >BOOK TICKETS</button>
            <button id="btn2" onClick={()=>props.setButtons('viewTickets')}>VIEW TICKETS</button>
            <button id="btn3" onClick={()=>props.setButtons('services')}>OUR SERVICES</button>
            </div>
        </div>
    )
}
export default Buttons;
