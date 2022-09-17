import React from 'react';
import './Sidebar.css';
import SidebarLinks from './SidebarLinks';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LocalPlayOutlinedIcon from '@mui/icons-material/LocalPlayOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AlbumRoundedIcon from '@mui/icons-material/AlbumRounded';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarLinks Icon={HomeOutlinedIcon} title="Home"/>
      <SidebarLinks Icon={ExploreOutlinedIcon} title="Explore"/>
      <SidebarLinks Icon={LocalPlayOutlinedIcon} title="Shorts"/>
      <SidebarLinks Icon={SubscriptionsOutlinedIcon} title="Subscriptions"/>
      <hr/>
      <SidebarLinks Icon={VideoLibraryOutlinedIcon} title="Library"/>
      <SidebarLinks Icon={RestoreOutlinedIcon} title="History"/>
      <SidebarLinks Icon={SlideshowOutlinedIcon} title="Your videos"/>
      <SidebarLinks Icon={WatchLaterOutlinedIcon} title="Watch later"/>
      <SidebarLinks Icon={ThumbUpAltOutlinedIcon} title="Liked"/>
      <hr/>
      <SidebarLinks Icon={AlbumRoundedIcon} title="Music"/>    
      <SidebarLinks Icon={EmojiEventsIcon} title="Sport"/>
      <SidebarLinks Icon={SportsEsportsIcon} title="Gaming"/>
      <SidebarLinks Icon={MovieIcon} title="Movies"/>

    </div>
  )
}

export default Sidebar
