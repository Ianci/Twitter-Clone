import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  SidebarAvatar  from './SidebarAvatar'
import { Box } from '@material-ui/core'


const SidebarAccount = () => {
    
    //Menu state
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return ( 
        <>
        <div onClick={handleClick} style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "5px", width: "100%"}}>
        <SidebarAvatar />
        </div> 
        <ExpandMoreIcon style={{color: "white", fontSize: "1rem"}}/>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >

        <MenuItem onClick={handleClose}>
            <SidebarAvatar />
        </MenuItem>
        <MenuItem onClick={handleClose}>Agregar una cuenta existente</MenuItem>
        <MenuItem onClick={handleClose}>Cerrar la sesión de @ianbrg11</MenuItem>
        </Menu>
        </>
     );
}
 
export default SidebarAccount;