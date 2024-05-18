import React, { useEffect } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import AddUser from './components/AddUsers'
import ViewUsers from './components/ViewUsers'
import EditUser from './components/EditUsers'

const App = () => {

  return (
    <div><Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/viewUsers" element={<ViewUsers/>} />
        <Route path="/edit" element={<EditUser  />} />
      </Routes>

    </Router>
    </div>
  )
}

export default App
