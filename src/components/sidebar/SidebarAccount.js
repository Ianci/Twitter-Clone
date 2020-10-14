import React from 'react';

import Img2 from '../../images/img2.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const SidebarAccount = () => {
    const classes = useStyles()
    return ( 
        <>
        <Avatar src={Img2} alt="account-profile" className={classes.root}/>
        <div className="account-name">
        <p className="p-name">ianci</p>
        <span className="s-account">@ianbrg11</span>
        </div>
        <ExpandMoreIcon style={{color: "white", fontSize: "1rem"}}/>
        </>
     );
}
 
export default SidebarAccount;