import React,{useState, useEffect} from 'react';
import "./dashboard.css"
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis , Tooltip} from "recharts";
import { FaEdit } from 'react-icons/fa';
import { MdDelete} from 'react-icons/md';
import {Link} from "react-router-dom";

const Dashboarddata = [
  {
    name: 'cow',
    pet: 13,
    price: '$250'
  },
  {
    name: 'cat',
    pet: 15,
    price: '$360'
  },
  {
    name: 'dog',
    pet: 5,
    price: '$210'
  },
    {
      name: 'dog',
      pet: 15,
      price: '$370'

  },];


const Dashboard = () => {
  const [APIdata,setAPIData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/Adoptpet").then((result)=>{
    result.json().then((resp)=>{
    //console.log("result",result)
    setAPIData(resp)
})
})
},[]);

console.log(APIdata);

  const UpdateData = (item) => {
    let {id , nickname, givenname, status, price} = item;
    localStorage.setItem('id', id);
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('givenname', givenname);
    localStorage.setItem('status', status)
    localStorage.setItem('price', price)
} 

  return (
    <>
    
   <div className='rect'>
   <ResponsiveContainer width="100%" aspect={3}> 
     <LineChart data={Dashboarddata}  width={500} height={300} margin={{ top: 5, right: 20, left: -.1, bottom: 20 }}>
     <XAxis dataKey = "name" interval={'preserveStartEnd'} stroke=' #F3A953'/>
     <YAxis stroke=' #F3A953'/>
     <Tooltip contentStyle={{backgroundColor:'rgba(0, 0, 0, 0.103)'}}/>
      <Line type="monotone" dataKey="pet" stroke=' #F3A953' activeDot={{r:8}}/>
     </LineChart>
   </ResponsiveContainer>
   <div className='dash1'>
    <p>publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate Lorem ipsum  </p>
    <h6>TotalPets TotalAdopted </h6> 
    <h1>78 65</h1> 
   </div>
    </div>

    <table className="table table-responsive table-borderless table-hover">
  <thead>
    <tr>
      <th className="th" scope="col">ID</th>
      <th className="th" scope="col">Pet Name</th>
      <th className="th" scope="col">Given Name</th>
      <th className="th" scope="col">Status</th>
      <th className="th" scope="col">Price</th>
      <th className="th" scope="col" colspan="2">Actions</th>
    </tr>
  </thead>
  <tbody>
  {APIdata.map((item,index)=>{
    return(
    <tr >
      <td>{item.id}</td>
      <td>{item.nickname}</td>
      <td>{item.givenname}</td>
      <td>{item.status}</td>
      <td>{item.price}</td>
      <td><button><Link to ="/Updatepet" onClick={()=>UpdateData(item)}><FaEdit/></Link></button></td>
      <td><button > <MdDelete/> </button> </td>
    </tr>
  )})}
  </tbody>
</table>
   
   </>
  );
    }
  

export default Dashboard;