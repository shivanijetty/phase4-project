import React from 'react';
import { useDispatch } from 'react-redux'
import { login, logout } from './features/User'

function Login() {
  const dispatch = useDispatch()
  return(
      <div>
        <button
          onClick={() => {
            dispatch(login({ name: "shivani", age: 30, email: "shivani@gmail.com" }))
          }}
        >
          LOGIN
        </button>

        <button
          onClick={() => {
            dispatch(logout())
          }}
        >
          LOGOUT
        </button>
          
      </div>
    )
}
export default Login