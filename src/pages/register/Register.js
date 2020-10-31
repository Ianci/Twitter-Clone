import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import firebase from '../../firebase'

import { TextField } from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter';
import TweetRegister from '../../images/TweetRegister.svg'
import SubmitFormButton from './SubmitFormBtn'

import { useHistory, Link } from 'react-router-dom'



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
        flexDirection: "column",
        justifyContent: "center"
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
        padding: '4px',
        maxWidth: "fit-content",
        textAlign: "center"
    },
    thanksText: {
        fontWeight: 800,
        lineHeight: 1.3325,
        fontSize: "2.4rem",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        textAlign: 'center',
        padding: "0 100px",
        display: "flex",
       
    },
    container: {
        maxWidth: "1200px"
    }
    
}))


const Register = () => {
    const classes = useStyles()
    const history = useHistory()
    const [ error, setError ] = useState(false)
    const [ errorMsg, setErrorMsg] = useState('')
    

    
        //Register Function
        async function createAccount(values){
            try {
                await firebase.accountRegistration(values.name, values.email, values.password, values.name)
               
                
                setError(false)
                setTimeout(() => {
                    history.push('/user-dates')
                }, 1000);
                
            } catch (error) {
               
                console.error('Se ha producido un error', error.message)
                setError(true)
                
                setErrorMsg(error.message)
            }
            
        }

    return ( 
        
        <Formik initialValues={{ name: "", email: "", password: "", confirm: ""}}
        validationSchema= {Yup.object({
            
            name: Yup.string()
            .required('Por favor introduce tu nombre')
            .max(15, 'Tu nombre debe contener 15 caracteres máximo'),

            email: Yup.string()
            .email('Introduce un email válido')
            .required('Completa el campo con tu email'),
            
            password: Yup.string()
            .required('Introduce tu contraseña')
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(15, 'La contraseña debe tener como máximo 15 caracteres'),

            confirm: Yup.string()
            .required('Vuelva a escribir la contraseña')
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        })}
        onSubmit={(values, {setSubmitting}) => {
                setSubmitting(true)
                console.log(values);
                createAccount(values)
                setSubmitting(false);
        }}
        >
            {( {isValid, dirty}) =>(
            
            <div className={classes.registerContainer}>
                
                    <div className={classes.ImageLeft}>
                        <img src={TweetRegister} alt="twitter-left-img" />
                    </div>
                        <div className={classes.containerForm}>
                        
                    
                            <Form style={{display: "flex", flexDirection: "column"}}>
                                <TwitterIcon style={{height: "50px", width: "50px"}} color="primary"/>
                                <h1 className={classes.twitterh1}>Crea su cuenta de Twitter ahora</h1>
                                
                                <Field as={TextField} type="text" name="name" className={classes.InputForm} label="Tu nombre u apodo" variant="outlined" color="secondary" />
                                <ErrorMessage name="name" component="small" className={classes.errorMessage} />

                                <Field as={TextField}  type="email"  className={classes.InputForm} name="email" label="Email" variant="outlined" color="secondary"/>
                                <ErrorMessage name="email" component="small" className={classes.errorMessage} />
                            

                                <Field as={TextField} type="password" className={classes.InputForm} name="password" label="Contraseña" variant="outlined" color="secondary"/>
                                <ErrorMessage name="password" component="small" className={classes.errorMessage} />

                                <Field as={TextField} type="password" className={classes.InputForm} name="confirm" label="Repite tu contraseña" variant="outlined" color="secondary"/>
                                <ErrorMessage name="confirm" component="small" className={classes.errorMessage} />
                            
                                <SubmitFormButton 
                                type="submit"
                                disabled={!(isValid && dirty)}
                                >
                                    Crea su cuenta ahora!
                                </SubmitFormButton>
                                </Form>
                                <div className={classes.comeback}>
                                    <Link to="/"><p style={{color: "black"}}>Volver</p></Link>
                                </div>
                                
                                { error && <p className={classes.errorMessage}> {errorMsg} </p>}
                            </div>
                        
                    </div> 
            )}
            
        </Formik>
            
     );
}
 
export default Register;

