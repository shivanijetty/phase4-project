import React from 'react';
import { useSelector } from 'react-redux'
// import { GalleryWidget } from './GalleryWidget'
import UploadWidget from './UploadWidget'




function Profile() {
    const user = useSelector((state) => state.user.value)
  return(
    <div>
      <h1>Profile Page</h1>
      <UploadWidget/>
      {/* <GalleryWidget/> */}
      <p>Name: {user.name} </p>
      <p>Age: {user.age} </p>
      <p>Email: {user.email} </p>
    </div>
  )
}
export default Profile