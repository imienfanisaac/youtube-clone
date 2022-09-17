import React from 'react';
import './VideoPlayer'
import ReactPlayer from "react-player";

function VideoPlayer({videoId}) {
  return (
    <div>
        <ReactPlayer url={videoId} width="100%" height="100%" controls={true} />  
    </div>
  )
}

export default VideoPlayer;
