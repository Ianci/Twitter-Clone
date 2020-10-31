import React, {useState, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useUser } from 'reactfire'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { FirebaseContext } from '../../firebase';

const useStyles = makeStyles((theme) =>({
    tweetAvatar: {
        margin: theme.spacing(2),
        height: theme.spacing(7),
        width: theme.spacing(7),
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
    tweetCard:{
        minWidth: "500px"
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
        fontSize: "1.1rem",
        lineHeight: 1,
        fontWeight: 800,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        paddingRight: theme.spacing(1),
    },
    tweetInfoAccount: {
        color: "grey",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        paddingRight: theme.spacing(1),
        fontSize: "1.1rem"
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
        objectPosition: "bottom",
        objectFit: "cover",
    },
    favCounter: {
        padding: "9px",
        paddingBottom: 0,
        fontSize: "1.4rem",
        display: "inline-flex",
        position: "relative",
        bottom: "4px",
        color: "#fff"
    }

}))

const Tweet = ({tweet}) => {
    const { firebase } = useContext(FirebaseContext)
    const user = useUser()
    const classes = useStyles()
   //State del menu de MaterialUI
   const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

   
      //Mostrar el menu de Eliminar
      function canDelete(){
        if(user.uid === tweet.id){
            return true
        }
      }
      //Funcion para eliminar tweet
      function deleteTweet(){
            let query = firebase.db.collection('tweets').where('tweetContent', '==' ,tweet.tweetContent)
            query.get().then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    doc.ref.delete()
                })
            })
            handleClose()
      }
      
      
    return ( 
        <div className={classes.tweetContainer}>
            <div className={classes.tweetAvatar}>
            <Avatar src={tweet.avatarTweet} alt="account-profile" className={classes.root}/>
            </div>
            <div className={classes.tweetCard}>
                <div className={classes.header}>
                    <div className={classes.tweetInfo}>
                        <span className={classes.tweetInfoName}>{tweet.name}</span> {""}
                        <span className={classes.tweetInfoAccount}>@{tweet.username}</span>
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
                        { canDelete() &&
                            <MenuItem onClick={deleteTweet}>Eliminar <DeleteIcon /></MenuItem>
                        }
                        <MenuItem onClick={handleClose}>Fijar en tu perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Tweet insertado</MenuItem>
                        <MenuItem onClick={handleClose}>Ver actividad del tweet</MenuItem>
                    </Menu>
                    
                    <div className={classes.tweetBody}>
                        <p className={classes.tweetText}>
                        {tweet.tweetContent}
                        </p>
                        {tweet.imageTweet !== "" ? 
                       
                        <img src={tweet.imageTweet} alt="no-alt" className={classes.image_user_Tweet}/>
                        : null
                        }
                        </div>
                    <div className={classes.tweetFooter}>
                        <ChatBubbleOutlineIcon fontSize="small" color="secondary"/>
                        <RepeatIcon fontSize="small" color="secondary"/>
                        
                        <span className={classes.favorites}><FavoriteBorderIcon fontSize="small" color="secondary" /><span className={classes.favCounter}>{tweet.favs}</span></span>
                        <PublishIcon fontSize="small" color="secondary"/>
                    </div>
            </div>
        </div>
     );
}
 
export default Tweet;