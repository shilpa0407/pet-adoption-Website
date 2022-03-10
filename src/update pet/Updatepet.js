import React,{useState, useEffect} from 'react'
import "./Updatepet.css";
import {Link} from "react-router-dom";


const Updatepet = () => {
   const [nickname, setNickname] = useState("");
  const [givenname, setGivenname] = useState("");
  const [status, setStatus] = useState(" ");
  const [price, setPrice] = useState(" ");

  const [id, setID] = useState(null);

useEffect(() => {
        setID(localStorage.getItem('id'))
        setNickname(localStorage.getItem('nickname'));
        setGivenname(localStorage.getItem('givenname'));
        setStatus(localStorage.getItem('status'));
        setPrice(localStorage.getItem('price'))
}, []);



const UpdateAPIData = () =>{
 let data = {nickname, givenname,status,price}
 console.log("data", data)
  fetch(`http://localhost:5000/Adoptpet/${id}`, {
    method: 'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }).then((result) => {
    result.json().then((resp) => {
      console.warn(resp)
    })
  })
}

  return (
    <>
    <div className='heading'>
    <h4>Update pet in inventory</h4>
    <p style={{fontSize:'small'}}>some random text some text</p>
    </div>

   <form className='addpet'>
  <select className="form-select form-select-sm"
   aria-label="form-select-sm example"    name="status" value={status} 
   onChange={(e)=>setStatus(e.target.value)}>
  <option selected>select status</option>
  <option value="own for a life">own for a life </option>
  <option value="adopt for 1 year">adopt for 1 year</option>
  </select>
  
  <div className ="mb">
    <label for="petname"  className ="form-label" >Pet Name</label>
    <input  name ="petname" value={nickname} 
     onChange={(e)=>setNickname(e.target.value)}
      className ="form-control"  />
  </div>
  <div className ="mb-1">
    <label for="given name" className ="form-label">Given Name</label>
    <input  name="givenname" 
    value={givenname} onChange={(e)=>setGivenname(e.target.value)} 
    className ="form-control"  />
  </div>
  <div className ="mb-2">
    <label for="price" className ="form-label">$Price</label>
    <input  name="price"
    value={price} onChange={(e)=>setPrice(e.target.value)}
     className ="form-control"/>
</div>
<div className='formbtn'>
  <button type="submit" onClick={UpdateAPIData} className ="save">Save</button><br></br>
  <Link to ="/Dashboard"> <button type="submit" className ="cancel">Cancel</button></Link>
  </div>
  
</form>

   </>
  )
}

export default Updatepet;