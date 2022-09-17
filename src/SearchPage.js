import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@mui/icons-material/Tune';
import SearchOutput from './SearchOutput';
import videoData from './data.json';


const SearchPage=(name)=> {
  console.log(name)

  return (
    <div className='searchPage'>
      <div className='searchPage-icon'>
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>
      <div>
      {videoData.map((videocards, key) => {
        if (name ===videocards.videoName) {
          return (
            <div key={key}>
              <SearchOutput className="videoCard" 
                key={key}
                videoImage={'/videos/' + videocards.videoThumbnail }
                channelImage={'/channels/' + videocards.channelThumbnail }
                videoTitle={videocards.videoName}
                channelName={videocards.channelName} 
                views={videocards.views}         
              />
            </div>
          )
        }
             
      })}
      </div>
    </div>
  )
}

export default SearchPage;
