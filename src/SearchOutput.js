import React from 'react'
import "./SearchOutput.css"



function SearchOutput({videoImage, channelImage, videoTitle, channelName, views }) {
  return (
    <div className='searchOutput'>
      <img src={videoImage} alt="videoimage"/>
      <div className='searchOutput-text'>
        <h5>{videoTitle}</h5>
        <p>{views}</p>
        <div className='output'>
          <img src={channelImage} alt="channelimage"/>
          <p>{channelName}</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default SearchOutput
