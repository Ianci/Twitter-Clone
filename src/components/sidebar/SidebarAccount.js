import React, { useState, useContext  } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  SidebarAvatar  from './SidebarAvatar'
import { FirebaseContext } from '../../firebase'
import { useHistory } from 'react-router-dom'

const SidebarAccount = () => {
    const { firebase, user } = useContext(FirebaseContext)
    
    const history = useHistory()

    async function userLogOut () {
      await firebase.logOut()
      handleClose()
      history.push("/")
    }

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
        id="sidebar-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >

        <MenuItem onClick={handleClose}>
            <SidebarAvatar />
        </MenuItem>
        <MenuItem onClick={handleClose}>Agregar una cuenta existente</MenuItem>
        <MenuItem onClick={userLogOut}>Cerrar la sesión de @ianbrg11</MenuItem>
        </Menu>
        </>
     );
}
 
export default SidebarAccount;