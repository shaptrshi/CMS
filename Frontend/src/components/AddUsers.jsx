import React, { useState } from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import NavBar from './NavBar'
import Footer from './Footer'
import './addUsers.css'

const AddUser = () => {
    const [userDetails,setUserDetails]=useState({
        id:uuid(),
        name:'',
        email:'',
        phone:'',
        dob:''
    
    })
const handleSubmit=()=>{
    axios('http://localhost:3000/api/create',{
        method:'POST',
        data:userDetails
    }).then(response=>console.log(response.data))
    setUserDetails({
        id:uuid(),
        name:'',
        email:'',
        phone:'',
        dob:''
    })

}
  return (
    <div>
      <NavBar/>
      <h1>Add Users</h1>
      <div className="container">
      <div className="input-group">
      <input  type="text" placeholder="Enter Name" value={userDetails.name} onChange={(e)=>{setUserDetails(
        {...userDetails,name:e.target.value}
      )}}/>
      </div>
      <div className="input-group">
        <input type="email" placeholder="Enter Email" value={userDetails.email} onChange={(e)=>{setUserDetails(
        {...userDetails,email:e.target.value}
      )}}/>
      </div>
      <div className="input-group">
        <input type="number" placeholder="Enter Phone number" value={userDetails.phone} onChange={(e)=>{setUserDetails(
        {...userDetails,phone:e.target.value}
      )}}/>
      </div>
      <h6>Date Of Birth :</h6>
      <div className="input-group">
        <input type='date' placeholder="Enter DOB" value={userDetails.dob} onChange={(e)=>{setUserDetails(
        {...userDetails,dob:e.target.value}
      )}}/>
      </div>
        <button className="button" onClick={handleSubmit}>Submit</button>
      </div> 
      <br/>
      <Footer/> 
    </div>
  )
}

export default AddUser
