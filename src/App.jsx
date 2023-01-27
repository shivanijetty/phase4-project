import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from './Login'
import Profile from './Profile'
import UploadWidget from './UploadWidget'
import GalleryWidget from './GalleryWidget'
// import User from './User'

function App() {
  
  return (
    <div className="App">
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
