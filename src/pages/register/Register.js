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
    },
    errorMessage: {
        color: 'red',
        fontWeight: 500,
        lineHeight: 1.225,
        fontSize: '1rem',
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        padding: '4px'
    }
}))


const Register = () => {
    const classes = useStyles()

  
    return ( 
        
        <Formik initialValues={{ name:  "", date: "2020-03-02", email: "", password: "", confirm: ""}}
        validationSchema= {Yup.object({
            name: Yup.string()
            .required('Por favor introduce tu nombre')
            .max(15, 'Tu nombre debe contener 15 caracteres máximo'),
            email: Yup.string()
            .email('Introduce un email válido')
            .required('Completa el campo con tu email'),
            date: Yup.date()
            .required('Introduce tu fecha de nacimiento'),
            password: Yup.string()
            .required('Introduce tu contraseña')
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(15, 'La contraseña debe tener como máximo 15 caracteres'),
            confirm: Yup.string()
            .required('Vuelva a escribir la contraseña')
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log(JSON.stringify( values, null, 2));
                setSubmitting(false);
            }, 1000);
        }}
        >
            {( { isValid, dirty }) =>(

            <div className={classes.registerContainer}>
                    <div className={classes.ImageLeft}>
                        <img src={TweetRegister} alt="twitter-left-img" />
                    </div>
                    <div className={classes.containerForm}>
                    <Form style={{display: "flex", flexDirection: "column"}}>
                        <TwitterIcon style={{height: "50px", width: "50px"}} color="primary"/>
                        <h1 className={classes.twitterh1}>Crea su cuenta de Twitter ahora</h1>
                        <Field as={TextField} type="text" className={classes.InputForm} name="name" label="Nombre" variant="outlined" color="secondary"/>
                        <ErrorMessage name="name" component="small" className={classes.errorMessage} />
                        <Field as={TextField}  type="email"  className={classes.InputForm} name="email" label="Email" variant="outlined" color="secondary"/>
                        <ErrorMessage name="email" component="small" className={classes.errorMessage} />
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

                        <Field as={TextField} type="password" className={classes.InputForm} name="password" label="Contraseña" variant="outlined" color="secondary"/>
                        <ErrorMessage name="name" component="small" className={classes.errorMessage} />
                        <Field as={TextField} type="password" className={classes.InputForm} name="confirm" label="Repite tu contraseña" variant="outlined" color="secondary"/>
                        <ErrorMessage name="confirm" component="small" className={classes.errorMessage} />
                    
                        <SubmitFormButton 
                        disabled={!(isValid && dirty)}
                        >
                            Crea su cuenta ahora!
                        </SubmitFormButton>
                        </Form>
                    </div>
            </div>   
            )}
        
        </Formik>
     );
}
 
export default Register;