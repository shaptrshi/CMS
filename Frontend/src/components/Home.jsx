import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import Footer from './Footer'
import './home.css'
import home from './photo/Home.png'

const Home = () => {
  const [totalUsers, setTotalUsers] = useState(0)
  useEffect(() => {
    axios.get('http://localhost:3000/api/read')
      .then(response => setTotalUsers(response.data.length))
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
        <NavBar />
        <div className='image-container'>
        <img src={home} alt='home' className='home' />
        </div>
        <div className='totaluser'>
          Total Users: {totalUsers}
        </div>

        <Footer/>
    </div>
  )
}

export default Home
