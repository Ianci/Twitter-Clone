import React from 'react'
import InputSearchTwitter from './InputForm'
import { makeStyles } from '@material-ui/core/styles';
import {TweetWidget} from './InputForm'

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
            
        </div>
        
        </>
     );
}
 
export default TweetWindgets;