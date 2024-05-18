import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import './viewUsers.css'

const ViewUsers = () => {
  const navigate=useNavigate()
  const [users,setUsers]=useState([])

  function handleEdit(user){
    navigate('/edit',{state:user})
  }

  function handleDelete(id){
    axios.get('http://localhost:3000/api/delete',{
      method:'get',
      params:{id:id}
    }).then(response=>console.log(response.data))
  }
  useEffect(()=>{
    axios.get('http://localhost:3000/api/read').then(response=>{
      setUsers((prev)=>{
        return [...response.data]
      })
    })
  },[users])
  return (
    <div>
      <NavBar/>
      <h1>View Users</h1>
      <div className="container">
      {
        users.map(user=>{
          return(
            <div className="user-card" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.dob}</p>
              <button className="button" onClick={()=>{handleDelete(user.id)}}>Delete</button>
              <button className="button edit" onClick={()=>{handleEdit(user)}}>Edit</button>
            </div>
          )
        }
        )
      }
      </div>
      <br/>
      <Footer/>
    </div>
  )
}

export default ViewUsers
