import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import WelcomeButton from './WelcomeButtons'
import TwitterIcon from '@material-ui/icons/Twitter';
import TweetLogin from '../../images/TweetLogin.svg'
import SearchIcon from '@material-ui/icons/Search';
import GroupIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';

const useStyles = makeStyles((theme)=>({
    welcomeContainer: {
        
        minHeight: "100vh",
        minWidth: "-webkit-fill-available",
        background: "#3384B0",
        background: "linear-gradient(to bottom right, #3384B0, #67529D)"
    },
    container: {
        display: "grid",
        gridTemplateColumns: "50% 50%",
        padding: "200px 200px"
    },
    left: {
        padding: "20px 20px",
        position: "relative"
    },
    presentation: {
        fontWeight: 800,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        fontSize: "1.5rem",
        lineHeight: 1.3125,
        color: "#fff",
        textShadow: "4px 2px 2px rgba(0, 0, 0, 0.69)"
    },
    welcomeh1: {
        fontWeight: 800,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        fontSize: "2rem",
        lineHeight: 1.3125,
        position: "relative",
        color: "#fff"
      
    },
    imgContainer:{
        display: "flex",
        position: "absolute"
    },
    welcomeImg: {
        maxWidth: "555px",
        position: "relative"
    },
    textWelcome: {
        position: "relative",
        top: "40%"
    },
    right: {
        padding: "50px"
    },
    spanWelcome: {
        color: "#fff",
        fontSize: "1rem",
        fontWeight: "bold",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
    },
    buttons: {
        padding: "55px"
    }
}))

const WelcomePage = () => {
    const history = useHistory()
    const classes = useStyles()
    return ( 
        <div className={classes.welcomeContainer}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.imgContainer}>
                        <img src={TweetLogin} alt="imagen-welcome" className={classes.welcomeImg}/>
                       
                    </div>
                    <div className={classes.textWelcome}>
                        <p className={classes.presentation}><SearchIcon/> Sigue lo que te interesa</p>
                        <p className={classes.presentation}><GroupIcon /> Entérate de que está hablando la gente</p>
                        <p className={classes.presentation}><ForumIcon /> Únete a la conversación</p>
                    </div>
                      
                </div>
                <div className={classes.right}>
                    <TwitterIcon style={{color: "blue"}}/>
                    <h1 className={classes.welcomeh1}>Mirá lo que está pasando en el mundo en este momento</h1>
                    <span style={{position: "relative"}} className={classes.spanWelcome}>Únete a twitter hoy mismo</span>
                    <div className={classes.buttons}>
                        <WelcomeButton
                        variant="contained"
                        color="primary"
                        onClick={() => history.push('/register')}
                        >Regístrate</WelcomeButton>
                        
                        <WelcomeButton
                        variant="outlined"
                        color="secondary"
                        onClick={() => history.push('/login')}
                        >Inicia sesión</WelcomeButton>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default WelcomePage;