import React from 'react';
import { sidebarOptions } from './SidebarOptions'
import  SidebarAccount  from './SidebarAccount'
import './Sidebar.css'

import { Link } from 'react-router-dom'
import  { MediumTweetButton }  from './ButtonSideBar'


const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <ul className="sidebar-list">
            {sidebarOptions.map((option, index)=>{
                return (
                    <Link to={option.path}>
                    <li key={index} className="sidebar-list-item">
                        <span className="sidebar-icon">{option.icon} <p className="sidebar-title">{option.title}</p></span>
                    </li>
                    </Link>
                )
            })}
            </ul>
            <div className="tweet-button">
            <MediumTweetButton />
            </div>
            <div className="sidebar-account">
                <SidebarAccount />
            </div>
        </div>
     );
}
 
export default Sidebar;