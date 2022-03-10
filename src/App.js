import React from 'react';
import './App.css';
import Navbar from "./navigation bar/Navbar";
import Dashboard from './dashboard/Dashboard';
import Adoptpet from './adopt pet/Adoptpet';
import Updatepet from './update pet/Updatepet';
import Addimage from "./add pet image/Addimage";
import Updateimage from "./update image/Updateimage";
import {Routes,Route} from "react-router-dom";
import Godashboard from "./gotodashboard/Godashboard";


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path ="/*" element = {<Dashboard/>}/>
    <Route path ="/Adoptpet" element = {<Adoptpet/>}/>
    <Route path ="/Updatepet" element = {<Updatepet/>}/>
    <Route path ="/Addimage" element = {<Addimage/>}/>
    <Route path ="/Updateimage" element = {<Updateimage/>}/>
    <Route path ="/Godashboard" element = {<Godashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
