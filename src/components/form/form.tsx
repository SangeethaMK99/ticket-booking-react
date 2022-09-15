import { useState } from 'react'
import "./form.css"

function FormSubmit() {
  const[name,setName]=useState("");
  const[from,setFrom]=useState("");
  const[to,setTo]=useState("");
  const[date,setDate]=useState("");
  const handleSubmit=(e:any) => {
    const details={
      name:name,
      from:from,
      to:to,
      date:date
    }
    e.preventDefault();
    localStorage.setItem('details',JSON.stringify(details))
    setName('')
    setFrom('')
    setTo('')
    setDate('')

  }
  return(
    <div className="formSubmit">
      <form onSubmit={handleSubmit}>
        <label>
          Name:<br/>
          <input type="text" value={name}
          onChange={(e) =>setName(e.target.value)}
          />
        </label><br/>
        <label>
          From:<br/>
          <input type="text" value={from}
          onChange={(e) =>setFrom(e.target.value)}
          />
        </label><br/>
        <label>
          To:<br/>
          <input type="text" value={to}
          onChange={(e) =>setTo(e.target.value)}
          />
        </label><br/>
        <label>
          Date:<br/>
          <input type="text" value={date}
          onChange={(e) =>setDate(e.target.value)}
          />
        </label><br/><br/>
        <button className='form-btn' type="submit">submit</button>
        </form><br/>
    </div>    
    );    
}
export default FormSubmit;

