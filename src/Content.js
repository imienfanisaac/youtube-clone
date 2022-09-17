import React  from 'react';
import './Content.css';
import VideoCard from './VideoCard';
import Banner from './Banner';
import videoData from './data.json';





function Content() {

  return (
    <div className='content'>
      <Banner className='banner'/>
      <div className='videoWrapper'>
          {videoData.map((videocards, key) => {
             return (
                <div key={key}>
                  <VideoCard className="videoCard" 
                    key={key}
                    videoImage={'/videos/' + videocards.videoThumbnail }
                    channelImage={'/channels/' + videocards.channelThumbnail }
                    videoTitle={videocards.videoName}
                    channelName={videocards.channelName} 
                    views={videocards.views}         
                  />
                </div>
              )
          })}
        
      </div>
    </div>
  )
}

export default Content
