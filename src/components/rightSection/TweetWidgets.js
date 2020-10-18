import React from 'react'
import {InputSearchTwitter} from './InputForm'
import { makeStyles } from '@material-ui/core/styles';
import TweetWidget from './TweetWidget'

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(2)
    }
}));
const TweetWindgets = () => {
    const classes = useStyles()
    


    return ( 
        <>
        <div className={classes.container}>
            <InputSearchTwitter />
            <TweetWidget />
        </div>
        
        </>
     );
}
 
export default TweetWindgets;