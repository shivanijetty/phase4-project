import React from 'react';

// import { GalleryWidget } from './GalleryWidget'
import UploadWidget from './UploadWidget'




function Profile() {
    
  return(
    <div>
      <h1>Profile Page</h1>
      <UploadWidget/>
      {/* <GalleryWidget/> */}
      <div>
        <button>LOGOUT</button>        
      </div>
    </div>
  )
}
export default Profile