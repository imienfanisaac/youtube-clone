import React from 'react'
import './VideoCard.css'


function VideoCard({videoImage, channelImage, videoTitle, channelName, views }) {
    return (
    <div className='videoCard'>
        <img src={videoImage} alt="videoimage" />
        <div className='videoCard-details'>
            <img src={channelImage} alt="channelimage"/>
            <div className='videoCard-text'>
                <h5>{videoTitle}</h5>
                <p>{channelName}</p>
                <p>{views}</p>
            </div>
        </div>
        
    </div>
    ); 
}

export default VideoCard
