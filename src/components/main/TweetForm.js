import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Img2 from '../../images/img2.jpeg'
import TextareaAutosize from 'react-autosize-textarea';
import { ButtonBase } from '@material-ui/core';
import { TweetIcons } from './TweetIcons'
import { SmallTweetButton } from '../sidebar/ButtonSideBar'


const useStyles = makeStyles((theme) =>({
    root: {
        
        margin: theme.spacing(2),
        height: theme.spacing(6),
        width: theme.spacing(6),
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1)
        },
    inputTweet: {
        flex: 0.6,
        border: "none",
        background: "none",
        outline: "none",
        height: "55px",
        color: "#fff",
        marginLeft: theme.spacing(1),
        overflowX: "hidden",
        overflowY: "hidden",
        marginTop: theme.spacing(1),
        whiteSpace: "no-wrap",
        fontSize: "1.2rem",
        width: "500px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        resize: "none",
        '&::-webkit-scrollbar': {
            display: "none",
        }
    },
    sendTweet: {
        float: "right"
    },
    avatarTweet: {
        height: "fit-content"
    }
}))
const TweetForm = () => {
    const classes = useStyles()

    function clicked (){
        console.log('The button work')
    }
    //TextArea Fn to resizing height

    return ( 
        <>
        <div className={classes.avatarTweet}>
            <Avatar src={Img2} alt="account-profile" className={classes.root}/>
        </div>
        <div className={classes.tweetBody}>

            <div className={classes.tweetTextArea}>
                <TextareaAutosize maxRows={4}  className={classes.inputTweet} placeholder="¿Qué está pasando?" />
            </div>
            <div className={classes.iconsContainer} >
                {TweetIcons.map((icons, index)=>{
                    return(
                        <ButtonBase centerRipple>
                            <span>{icons.icon}</span>
                        </ButtonBase>
                    )
                })}
                <div className={classes.sendTweet} >
                 <SmallTweetButton onClick={clicked}
                 type="submit"/>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default TweetForm;