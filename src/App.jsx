import { useState, useEffect } from 'react'
import './App.css'
import Login from './Login'
import Profile from './Profile'
import UploadWidget from './UploadWidget'
// import User from './User'

function App() {
  
  return (
    <div className="App">
      <Profile />
      <UploadWidget/>
      <Login />      
    </div>
  )
}

export default App
