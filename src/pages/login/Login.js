import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import { TextField} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import TweetLogin from '../../images/TweetLogin.svg'
import SubmitFormButton from '../register/SubmitFormBtn'
import { useHistory, Link } from 'react-router-dom'
//Firebase
import firebase from '../../firebase'

//Styles
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
        alignItems: "center",
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
    leftImage: {
        maxWidth: "-webkit-fill-available",
        display: "flex",
        width: "500px"
    },
    errorMessage: {
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        color: "red",
        fontWeight: 600,
        lineHeight: 1,
        fontSize: "1rem",
        padding: "4px",
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
    ImageLeft: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    container: {
        display: "contents"
    }
}))


const Login = () => {
    const classes = useStyles()
    const history = useHistory()
    const [ error, setError ] = useState(false)
    const [ isSubmitting, setIsSubmitting] = useState(false)

    async function userLogin(values){
        try {
            const user = await firebase.loginUser(values.email, values.password)
            console.log(user)
            setIsSubmitting(true)
            setError(false)
            setTimeout(() => {
                history.push('/home')  
            }, 3000);
        } catch (error) {
            console.log(error)
            console.error(error.message)
            setIsSubmitting(false)
            setError(error.message)
        }
    }
    //Formik and Yup validation
    return ( 
        <Formik initialValues={{email: "", password: ""}}
        validationSchema = {Yup.object({
            email: Yup.string()
            .email('El email no es válido')
            .required('Por favor introduce tu email'),
            password: Yup.string()
            .required('Por favor introduce tu contraseña')
        })}
        onSubmit={(values, {setSubmitting}) => {
               setSubmitting(true)
               console.log(JSON.stringify( values, null, 2));
               userLogin(values)
               setSubmitting(false);
          
        }}>
        {( {isValid, dirty})=>(
            //HTML
            <div className={classes.registerContainer}>

                <div className={classes.container}>

                    <div className={classes.ImageLeft}>
                        <img src={TweetLogin} alt="twitter-left-img" className={classes.leftImage}/>
                    </div>
                
                
                    <div className={classes.containerForm}>
                        { isSubmitting ? <h1 className={classes.thanksText}>Iniciando sesion...</h1>
                        :
                        <>
                        <Form style={{display: "flex", flexDirection: "column"}}>
                        
                        <TwitterIcon style={{height: "50px", width: "50px"}} color="primary"/>
                        <h1 className={classes.twitterh1}>Ingrese a su cuenta</h1>
                        
                        <Field as={TextField} type="text" className={classes.InputForm} name="email" label="Email" variant="outlined" color="secondary"/>
                        <ErrorMessage name="email" component="small" className={classes.errorMessage}/>
                        
                        <Field as={TextField} type="password" className={classes.InputForm} name="password" label="Contraseña" variant="outlined" color="secondary"/>
                        <ErrorMessage name="password" component="small" className={classes.errorMessage}/>
                        
                        <SubmitFormButton 
                        disabled={!(isValid && dirty)}>
                            Ingrese ahora!
                        </SubmitFormButton>
                        </Form>
                        <div className={classes.comeback}>
                            <Link to="/"><p style={{color: "black"}}>Volver</p></Link>
                        </div>
                       </>
                        }
                        
                        { error && <p className={classes.errorMessage}>{error}</p>}
                    </div>

                </div>
            </div>
            
        )}
        
        </Formik>
     );
}
 
export default Login;