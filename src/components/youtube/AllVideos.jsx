import React from 'react'
import Video from './Video'

function AllVideos() {

    const allVideoStyle = {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "10px"
    }


  return (
    <div style={allVideoStyle}>
        <Video />
        <Video />
        <Video />
     
       
    </div>
  )
}

export default AllVideos
