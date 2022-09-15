import './viewTickets.css'
import { useState } from "react";

function ViewTickets() {
  const k=JSON.parse((localStorage.getItem('details')) || '{}')
  const [val,setVal]=useState([k])
    return(
      <div className="view">
        {val.map((p) => (
          <div>
            <div>Name:{p.name}</div>
            <div>Leaving from:{p.from}</div>
            <div>Going to:{p.to}</div>
            <div>Date:{p.date}</div>
          </div>
        ))}
      </div>
    );   
}
export default ViewTickets;

