import React from 'react';

// import { GalleryWidget } from './GalleryWidget'
import UploadWidget from './UploadWidget'




function Profile() {
    
  return(
    <div className="profile-box">
      <h1 className="gallery-header">Welcome!</h1>
      <UploadWidget/>
      {/* <GalleryWidget/> */}
      <div>
        <button>LOGOUT</button>        
      </div>
    </div>
  )
}
export default Profile