import React from 'react'
import {InputSearchTwitter} from './InputForm'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column"
    }
}));
const TweetWindgets = () => {
    const classes = useStyles()
    return ( 
        <>
        <div className={classes.container}>
            <InputSearchTwitter />
            <p>hola</p>
        </div>
        
        </>
     );
}
 
export default TweetWindgets;