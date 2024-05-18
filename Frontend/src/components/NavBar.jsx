import React from 'react'
import {useNavigate} from 'react-router-dom'
import './navbar.css'
import logo from './photo/logo.png';

const NavBar = () => {
    const navigate=useNavigate()
  return (
        <div className='navbar'>
            <div className='logo-container'>
                <img src={logo} alt='Logo' className='logo' />
            </div>
            <div className='nav-items-container'>
            <div className='nav-item' onClick={()=>{navigate('/')}}>
                Home
            </div>
            <div className='nav-item' onClick={()=>{navigate('/addUser')}}>
                Add User
            </div>
            <div className='nav-item' onClick={()=>{navigate('/viewUsers')}}>
                View User
            </div>
            </div>
        </div>
   
  )
}

export default NavBar
