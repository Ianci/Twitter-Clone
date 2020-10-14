import React from 'react';
import { sidebarOptions } from './SidebarOptions'
import './Sidebar.css'
import { Link } from 'react-router-dom'
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
        </div>
     );
}
 
export default Sidebar;