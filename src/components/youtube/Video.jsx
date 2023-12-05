import React from 'react'
import '../../styles/youtube/Video.css'
import vi1 from '../../images/videoimg1.webp'


const Video = () => {
  return (
    <div className='video-container'>
       <div className="thumbnail">
            <img src={vi1} alt="" style={{height: "100%", width: "100%"}}/>
       </div>
       <div className="video-info">
            <div className="channel-image">
                
            </div>
            <div className="channel-info">
                <h3 className="video-title">
                Annapoorani - The Goddess Of Food | Official Trailer | Nayanthara, Jai | Nilesh Krishnaa | Thaman S
                </h3>
                <p className='channel-name'>Saregama Tamil</p>
                <p className='view-count'> <span className="views">1.1M</span> <span className="upload-time">13 hours ago</span></p>
            </div>
       </div>
    </div>
  )
}

export default Video
