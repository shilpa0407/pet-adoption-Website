import React,{useState} from 'react'
import "./Adoptpet.css"
import {Link} from "react-router-dom"



const Adoptpet = () => {
  const [nickname, setNickname] = useState("");
  const [givenname, setGivenname] = useState("");
  const [status, setStatus] = useState(" ");
  const [price, setPrice] = useState(" ");

  const postData = (e) => {
    e.preventDefault();
    console.log({nickname, givenname,status,price})

    let data={nickname, givenname,status,price}
    fetch("http://localhost:5000/Adoptpet",{
      method:"POST",
      headers:{
        'Accept':'application/json',
        'content-type':'application/json'
      },
      body:JSON.stringify(data)

    }).then((result)=>{
      //console.log("result", result);
      result.json().then((resp)=>{
        console.log("resp", resp)

      })
    }) 
  }

  return (
    <>
    <div className='heading'>
    <h4>Add pet to the inventory</h4>
    <p style={{fontSize:'small'}}>some random text some text</p>
    </div>

   <form className='addpet'  onSubmit={postData} >
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
  <Link to = "/Addimage"><button type="submit" className ="save">Save</button></Link><br></br>
  <Link to ="/Dashboard"> <button type="submit" className ="cancel">Cancel</button></Link>
  </div>
  
</form>

   </>
  )
}

export default Adoptpet;