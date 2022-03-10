import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"


const navbar = () => {
  return (
      <>
  <div className="sidebar">
  <Link className='active' to="/Dashboard">company logo</Link>
  <Link className='a' style={{backgroundColor:"#f3a8537e"}} to="/Dashboard">Dashboard</Link>
  <Link  className='a' to="/Adoptpet">Adoptpet</Link>
   </div>
  <div className="content">
  <h4 className='h4'>Adopt a Pet</h4>
 <Link to="/Adoptpet"> <button className="button">Add pet</button></Link>
  </div>
</>

  )
}

export default navbar