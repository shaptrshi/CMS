import React, { useState } from 'react'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import './editUsers.css'

const EditUser = () => {
    const location=useLocation()
    const navigate = useNavigate()
    const [userDetails,setUserDetails]=useState(location.state)
const handleSubmit=()=>{
    axios('http://localhost:3000/api/update',{
        method:'POST',
        data:userDetails
    }).then(response=>{
        alert("Changes saved")
        navigate('/ViewUsers')
    })

}

  return (
    <div>

    <NavBar/>
    <h1>Edit Users</h1>
    <div>
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
        <div className="input-group">
        <input type='date' placeholder="Enter DOB"  value={userDetails.dob} onChange={(e)=>{setUserDetails(
            {...userDetails,dob:e.target.value}
        )}}/>
        </div>
        <button className="button" onClick={handleSubmit}>Finish Edit</button>
    </div>
    </div>
    <br/>
    <Footer/>
    </div>
  )
}

export default EditUser
