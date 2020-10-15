import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Img2 from '../../images/img2.jpeg'
import TextareaAutosize from 'react-autosize-textarea';
const useStyles = makeStyles((theme) =>({
    root: {
        display: 'flex',
        margin: theme.spacing(3),
        height: theme.spacing(6),
        width: theme.spacing(6),
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1)
        },
        inputTweet: {
        width: "100%",
        border: "none",
        background: "none",
        outline: "none",
        height: "100px",
        color: "#fff",
        marginLeft: theme.spacing(1),
        overflow: "hidden",
        marginTop: theme.spacing(1),
        whiteSpace: "no-wrap",
        fontSize: "1.2rem",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        resize: "none"
    },
}))
const TweetForm = () => {
    const classes = useStyles()

    //TextArea Fn to resizing height

    return ( 
        <>
        <Avatar src={Img2} alt="account-profile" className={classes.root}/>
        <TextareaAutosize className={classes.inputTweet} placeholder="¿Qué está pasando?" />
        </>
     );
}
 
export default TweetForm;