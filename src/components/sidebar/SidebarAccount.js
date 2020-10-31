import React, { useState, useContext  } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  SidebarAvatar  from './SidebarAvatar'
import { FirebaseContext } from '../../firebase'
import { useHistory } from 'react-router-dom'
import { useFirestoreDocData, useFirestore, SuspenseWithPerf } from 'reactfire';
const SidebarAccount = () => {
    const { firebase, user } = useContext(FirebaseContext)
    const history = useHistory()
    //Menu state de materialUi
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = () => {
        setAnchorEl(null);
      };

    if(!user) return null;
    //Function para el nombre de la cuenta
    function UserName(){
      const response = useFirestore()
      .collection('users')
      .doc(user.uid)
      const userName = useFirestoreDocData(response)
      return <MenuItem onClick={userLogOut}>Cerrar la sesión de @{userName.username}</MenuItem>
    }

    //Cerrar sesion
    async function userLogOut () {
      await firebase.logOut()
      handleClose()
      history.push("/")
    }

    

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
        <SuspenseWithPerf fallback={<p>Loading...</p>}>
        <UserName />
        </SuspenseWithPerf>
        </Menu>
        </>
     );
}
 
export default SidebarAccount;