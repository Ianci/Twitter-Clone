import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import WelcomeButton from './WelcomeButtons'
import TwitterIcon from '@material-ui/icons/Twitter';
import TweetLogin from '../../images/TweetLogin.svg'
const useStyles = makeStyles((theme)=>({
    welcomeContainer: {
        background: "#fff",
        minHeight: "100vh",
        minWidth: "-webkit-fill-available"
    },
    container: {
        display: "grid",
        gridTemplateColumns: "50% 50%",
        padding: "200px 200px"
    },
    left: {
        padding: "20px 20px",
        
    },
    presentation: {
        fontWeight: 800,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        fontSize: "1.5rem",
        lineHeight: 1.3125,
        zIndex: 2
    },
    welcomeh1: {
        fontWeight: 800,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        fontSize: "2rem",
        lineHeight: 1.3125
    },
    imgContainer:{
        display: "flex"
    },
    welcomeImg: {

    }
}))

const WelcomePage = () => {

    const classes = useStyles()
    return ( 
        <div className={classes.welcomeContainer}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.imgContainer}>
                        <img src={TweetLogin} alt="imagen-welcome" className={classes.welcomeImg}/>
                       
                    </div>
                    <div className={classes.textWelcome}>
                        <p className={classes.presentation}>Sigue lo que te interesa</p>
                        <p className={classes.presentation}>Entérate de que está hablando la gente</p>
                        <p className={classes.presentation}>Únete a la conversación</p>
                    </div>
                      
                </div>
                <div className={classes.right}>
                    <TwitterIcon style={{color: "blue"}}/>
                    <h1 className={classes.welcomeh1}>Mirá lo que está pasando en el mundo en este momento</h1>
                    <span>Únete a twitter hoy mismo</span>
                    <div className={classes.buttons}>
                        <WelcomeButton
                        variant="contained"
                        color="primary"
                        >Regístrate</WelcomeButton>
                        <WelcomeButton
                        variant="outlined"
                        color="secondary"
                        >Inicia sesión</WelcomeButton>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default WelcomePage;