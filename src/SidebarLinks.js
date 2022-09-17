import React from 'react';
import './SidebarLinks.css';

function SidebarLinks({Icon, title}) {
  return (
    <div className='sidebarLinks'>
      <Icon className='sidebarLinks-icon'/>
      <h5 className='sidebarLinks-title'>{title}</h5>

    </div>
  )
}

export default SidebarLinks
