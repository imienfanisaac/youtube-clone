import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './Header.css';
import videoData from './data.json';
import {Link} from "react-router-dom";
import SearchPage from './SearchPage';

function Header() {
    const [searchInput, setsearchInput] = useState('');
    

  return (
    <div className='header'>
        <div className='header-left'>
            <MenuIcon />
            <Link to="/" className='iconLink'>
                <div className='icon-name'>
                    <img className='header-logo' src='https://cdn-icons-png.flaticon.com/512/226/226236.png'alt='icon'/>
                    <h1>WeTube</h1> 
                </div>
            </Link>
        </div>
        <div className='header-center'>
            <div>
                <input onChange={e =>setsearchInput(e.target.value)}value={searchInput} className='searchInput'placeholder='Search...' />  
                {videoData.filter((videocards) => {
                    if (searchInput === "") {
                        return ""
                    }
                    if (searchInput.length <= 2) {
                        return ""
                    }
                    if (videocards.videoName.toLowerCase().includes(searchInput.toLowerCase())) {
                        return videocards.videoName
                    }
                }).map((videocards, key)=> {
                    return<Link onClick={() => SearchPage(videocards.videoName)} value={videocards.videoName}to={`/search/${searchInput}`}>{videocards.videoName}</Link>
                })}   
                <Link to={`/search/${searchInput}`} >

                    <SearchOutlinedIcon className='searchMenu'/>
                </Link>
            </div>
            
            <KeyboardVoiceOutlinedIcon  className='voiceIcon'/>
        </div>
        <div className='header-right'>
            <VideoCallOutlinedIcon />
            <NotificationsNoneOutlinedIcon />
            <AccountCircleOutlinedIcon />
        </div>


    </div>
    
  );
}

export default Header
