import React, { useContext} from 'react';
import Img2 from '../../images/img2.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { FirebaseContext } from '../../firebase/index'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
const SidebarAvatar = () => {
    const classes = useStyles()
    
    const { user } = useContext(FirebaseContext)

    //Evitar que throwee error al cargar por primera vez. User arranca null
    
    if (!user) return null
    return ( 
        <>
        <Avatar src={user.photoURL} alt="account-profile" className={classes.root}/>
        <div className="account-name">
            <p className="p-name">{user.displayName}</p>
            <span className="s-account">@ianbrg11</span>
        </div>
        </>
     );
}
 
export default SidebarAvatar;