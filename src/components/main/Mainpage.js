import React from 'react';
import TweetForm from './TweetForm'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "grid",
        gridTemplateColumns: "62% 38%",
        /* justify-content: space-between; */
        maxWidth: "1000px",
        width: "1000px",
        minWidth: "fit-content",
        gridTemplateRows: "30% 30% 40%",
        '&::-webkit-scrollbar': {
            display: "none",
        }
    },
    mainSection: {
        position: "sticky",
        overflowY: "scroll",
        display: "flex",
        gridColumnStart: 1,
        gridColumnEnd: 2,
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        borderBottom: "1px solid rgba(169, 170, 167, 0.40)",
        borderRight: "1px solid rgba(169, 170, 167, 0.40)",
        zIndex: "100",
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
        gridColumnStart: 1,
        gridColumnEnd: 2,
        position: "absolute",
        marginTop: "3.1rem",
        display: "flex",
        width: "620px",
        
    },
    feedSection: {
        gridColumnStart: 1,
        gridColumnEnd: 2,
        display: "flex",
        top: "50%",
        width: "100%",
        borderTop: "8px solid grey",
        borderRight: "1px solid grey",
        flexDirection: "column"
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
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>
                    <h1>Feed here</h1>

            </div>
            
        </div>
        
     );
}
 
export default MainPage;