import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import firebase from '../../firebase'
import  TimePicker  from './TimePicker'
import { TextField, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme)=>({
    registerContainer: {
        backgroundColor: 'white',
        minWidth: '1200px',
        width: "100%",
        display: "flex"
    },
    containerForm: {
        margin: "0 auto",
        display: "flex",
        flexDirection: "column"
    },
    InputForm: {
        marginBottom: theme.spacing(2)
    }
}))

const Register = () => {
    const classes = useStyles()
    return ( 
        <>
        <div className={classes.registerContainer}>
            <div className={classes.containerForm}>
                <h1>From register</h1>
                <TextField  className={classes.InputForm} label="Nombre" variant="outlined" />
                <TextField  className={classes.InputForm} label="Email" variant="outlined" />
                <TimePicker />
                <TextField  className={classes.InputForm} label="Contraseña" variant="outlined" />
                <TextField  className={classes.InputForm} label="Repite tu contraseña" variant="outlined" />
                
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
                >
                    <AddIcon /> Upload your profile pic
                </Fab>
                </label>
            </div>
        </div>
        </>
     );
}
 
export default Register;