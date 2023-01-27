import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

function Login() {
  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })


  useEffect(() => {
    let request = async () => {
      let req = await fetch(`http://localhost:3000/users`)
      let res = await req.json()
      setUsers(res)
    }
    request()
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    users.some(user => {
      if (user.email === formData.email && user.password === formData.password) {
        setCurrentUser(user)
        console.log("welcome back!")
        navigate('/profile')
      } else {
        console.log('user not found', currentUser)
      }
    })
      ;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  return(
      <div className="">
        <div onSubmit={(e) => { handleSubmit(e) }}>
              <h2 className="">ENTER YOUR GALLERY</h2><br />
              <h2 className="">LOG IN</h2><br />
              <form>
                  <input className="" type="email" value={formData.email} name='email' onChange={e => handleChange(e)} placeholder="EMAIL" /><br />
                  <input className="" type="password" value={formData.password} name='password' onChange={e => handleChange(e)} placeholder="PASSWORD" /><br />
                  <div className="">
                      <input className="" type="submit" />                      
                  </div>
              </form>
        </div>
      </div>
    )
}
export default Login