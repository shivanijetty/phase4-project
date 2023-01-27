import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from './Login'
import Profile from './Profile'

import GalleryWidget from './GalleryWidget'
// import User from './User'

function App() {
  
  return (
    <div className="App">     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />              
      </Routes>
    </div>
  )
}

export default App
