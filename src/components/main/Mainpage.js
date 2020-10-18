import React from 'react';
import TweetForm from './TweetForm'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import Tweet from './Tweet'

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flex: 0.6,
        /* justify-content: space-between; */
        maxWidth: "600px",
        borderRight: "1px solid rgba(169, 170, 167, 0.40)",
        minWidth: "fit-content",
        borderBottom: "1px solid grey",
        flexDirection: "column",
        '&::-webkit-scrollbar': {
            display: "none",
        }
    },
    mainSection: {
        position: "sticky",
        overflowY: "scroll",
        display: "flex",
        padding: "10px 12px",
        top: "0%",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        borderBottom: "1px solid rgba(169, 170, 167, 0.40)",
        zIndex: "999",
        '&::-webkit-scrollbar': {
            display: "none",
        }
    },
    inicio: {
        paddingLeft: theme.spacing(1),
        fontWeight: "bold",
        color: "rgb(255, 255, 255)",
        fontSize: "1.2rem",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif"
    },
    TweetInput: {
        position: "relative",
        display: "flex",
        flex: 0.3,
        
    },
    feedSection: {
        display: "block",
        width: "100%",
        borderTop: "8px solid grey",
        borderRight: "1px solid grey",
        
    }
}));
const MainPage = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.container}>
            
            <div className={classes.mainSection}>
                <span className={classes.inicio}>Inicio</span>
                <StarBorderIcon style={{color: "#4682B4"}}/>
            </div>
            <div className={classes.TweetInput}>
                    <TweetForm />
            </div>
            <div className={classes.feedSection}>
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            </div>
            
        </div>
        
     );
}
 
export default MainPage;