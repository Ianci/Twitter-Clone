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
        width: "1000px"
    },
    mainSection: {
        display: "flex",
        gridColumnStart: 1,
        gridColumnEnd: 2,
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        borderBottom: "1px solid rgba(169, 170, 167, 0.40)",
        borderRight: "1px solid rgba(169, 170, 167, 0.40)",
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
        width: "542px",
    }
}));
const MainPage = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.container}>
            
            <div className={classes.mainSection}>
                <span className={classes.inicio}>Inicio</span>
                <StarBorderIcon style={{color: "rgb(72,209,204)"}}/>
            </div>
            <div className={classes.TweetInput}>
                    <TweetForm />
            </div>
        </div>
        
     );
}
 
export default MainPage;