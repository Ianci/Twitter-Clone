import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import WelcomeButton from './WelcomeButtons'
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme)=>{})
const WelcomePage = () => {

    const classes = useStyles()
    return ( 
        <div className={classes.welcomeContainer}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <p>Sigue lo que te interesa</p>
                    <p>Entérate de que está hablando la gente</p>
                    <p>Únete a la conversación</p>
                </div>
                <div className={classes.right}>
                    <TwitterIcon />
                    <h1>Mirá lo que está pasando en el mundo en este momento</h1>
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