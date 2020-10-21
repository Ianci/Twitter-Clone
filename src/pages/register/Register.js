import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import firebase from '../../firebase'
import  TimePicker  from './TimePicker'
import { TextField, Fab, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import TwitterIcon from '@material-ui/icons/Twitter';
import TweetRegister from '../../images/TweetRegister.svg'
import SubmitFormButton from './SubmitFormBtn'
const useStyles = makeStyles((theme)=>({
    registerContainer: {
        backgroundColor: 'white',
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50% 50%",
      
        [theme.breakpoints.down('lg')]: {

            padding: "50px 50px",
          },
        [theme.breakpoints.up('xl')]: {
            alignItems: "center",
            minWidth: '1200px',
            padding: '150px 150px'
          },
    },
    containerForm: {
        margin: "0 auto",
        display: "flex",
        flexDirection: "column"
    },
    InputForm: {
        marginBottom: theme.spacing(2)
    },
    twitterh1: {
        color: "black",
        fontWeight: 800,
        lineHeight: 1.3125,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif"
    }
}))


const Register = () => {
    const classes = useStyles()

    function test(){
        console.log('it works')
    }
    return ( 
        <>
        <div className={classes.registerContainer}>
            <div className={classes.ImageLeft}>
                <img src={TweetRegister} alt="twitter-left-img" />
            </div>
            <div className={classes.containerForm}>
                <TwitterIcon style={{height: "50px", width: "50px"}} color="primary"/>
                <h1 className={classes.twitterh1}>Crea su cuenta de Twitter ahora</h1>
                <TextField  className={classes.InputForm} label="Nombre" variant="outlined" color="secondary"/>
                <TextField  className={classes.InputForm} label="Email" variant="outlined" color="secondary"/>
                <TimePicker />

                <label htmlFor="upload-photo">
                <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                />

                <Fab
                    color="secondary"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                    style={{margin: '12px'}}
                >
                    <AddIcon /> Añada su foto de perfil
                </Fab>
                </label>

                <TextField  className={classes.InputForm} label="Contraseña" variant="outlined" color="secondary"/>
                <TextField  className={classes.InputForm} label="Repite tu contraseña" variant="outlined" color="secondary"/>
                
               
                <SubmitFormButton 
                onClick={test}>
                    Crea su cuenta ahora!
                </SubmitFormButton>
                
            </div>
        </div>
        </>
     );
}
 
export default Register;