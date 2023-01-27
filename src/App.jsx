import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from './Login'

import GalleryWidget from './GalleryWidget'
// import User from './User'

function App() {
  
  return (
    <div className="App">
      <h3>Log in to your portfolio below:</h3>
      <Login />      
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
      <UploadWidget/>
      {/* <GalleryWidget/> */}
        <Route path="/gallery" element={<Profile />} />              
      </Routes>
    </div>
  )
}

export default App
