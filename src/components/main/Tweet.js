import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Img2 from '../../images/img2.jpeg'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const useStyles = makeStyles((theme) =>({
    tweetAvatar: {
        margin: theme.spacing(2),
        height: theme.spacing(6),
        width: theme.spacing(6),
        marginRight: theme.spacing(1),
        padding: theme.spacing(1),
        },

    tweetContainer: {
        display: "flex",
        maxWidth: "600px",
        wordBreak: "break-word",
        width: "600px",
        borderBottom: "1px solid grey"
    },
    tweetInfo: {
        height: "fit-content",
        display: "flex",
        alignItems: "center",
        paddingTop: theme.spacing(1),
    },
    iconTweet: {
        height: "fit-content",
        display: "flex",
        marginLeft: "auto",
        width: "fit-content",
        
    },
    tweetInfoName: {
        color: "#fff",
        fontSize: "1rem",
        lineHeight: 1,
        fontWeight: 800,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        paddingRight: theme.spacing(1),
    },
    tweetInfoAccount: {
        color: "grey",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        paddingRight: theme.spacing(1)
    },
    tweetText: {
        padding: "0 10px",
        textAlign: "start",
        margin: 0,

    },
    tweetBody: {
        color: "#fff",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        fontSize: "1rem",
    },
    tweetFooter: {
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 10px"
    },
    image_user_Tweet:{
        borderRadius: "40px",
        padding: theme.spacing(2),
        float: "center",
        width: "480px",
        height: "200px",
        objectPosition: "bottom",
        objectFit: "cover",
    }

}))
const Tweet = () => {
    const classes = useStyles()
    //Menu state

    //Menu state
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      
      //


    return ( 
        <div className={classes.tweetContainer}>
            <div className={classes.tweetAvatar}>
                <Avatar src={Img2} alt="account-profile" className={classes.root}/>
            </div>
            <div className={classes.tweetCard}>
                <div className={classes.header}>
                    <div className={classes.tweetInfo}>
                        <span className={classes.tweetInfoName}>Ianci</span> {""}
                        <span className={classes.tweetInfoAccount}>@ianbrg11  ·</span> {""}
                        <span className={classes.tweetInfoAccount}>1min</span>
                        <div className={classes.iconTweet}>
                            <MoreHorizIcon onClick={handleClick} style={{color: "white", margin: "0.5rem"}}/>
                        </div>
                    </div>
                    
                </div>
                    <Menu
                    id="tweet-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Eliminar <DeleteIcon /></MenuItem>
                        <MenuItem onClick={handleClose}>Fijar en tu perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Tweet insertado</MenuItem>
                        <MenuItem onClick={handleClose}>Ver actividad del tweet</MenuItem>
                    </Menu>
                    
                    <div className={classes.tweetBody}>
                        <p className={classes.tweetText}>
                        This is the twitter content. 280 characters allowed This is the twitter content. 
                        280 characters allowed This is the twitter content. 280 characters allowed 
                        This is the twitter content. 280 characters allowed This is the twitter 
                        content. 280 characters allowed This is the twitter.
                        </p>
                        <img src="https://cdna.artstation.com/p/assets/images/images/018/582/132/original/nisha-batham-panda-second.gif?1559906790&dl=1" alt="no-alt" className={classes.image_user_Tweet}/>
                    </div>
                    <div className={classes.tweetFooter}>
                        <ChatBubbleOutlineIcon fontSize="small" color="secondary"/>
                        <RepeatIcon fontSize="small" color="secondary"/>
                        <FavoriteBorderIcon fontSize="small" color="secondary"/>
                        <PublishIcon fontSize="small" color="secondary"/>
                    </div>
            </div>
        </div>
     );
}
 
export default Tweet;