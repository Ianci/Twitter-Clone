import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import { TextField} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import TweetLogin from '../../images/TweetLogin.svg'
import SubmitFormButton from '../register/SubmitFormBtn'
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
    leftImage: {
        maxWidth: "-webkit-fill-available"
    },
    errorMessage: {
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        color: "red",
        fontWeight: 600,
        lineHeight: 1,
        fontSize: "1rem",
        padding: "4px"

    }
}))


const Login = () => {
    const classes = useStyles()
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
           setTimeout(() => {

               console.log(JSON.stringify( values, null, 2));

               setSubmitting(false);
           }, 500);
        }}>
        {( {isValid, dirty})=>(
            //HTML
            <div className={classes.registerContainer}>
                
                <div className={classes.ImageLeft}>
                    <img src={TweetLogin} alt="twitter-left-img" className={classes.leftImage}/>
                </div>
                
                
                <div className={classes.containerForm}>
                    <Form style={{display: "flex", flexDirection: "column"}}>
                    
                    <TwitterIcon style={{height: "50px", width: "50px"}} color="primary"/>
                    <h1 className={classes.twitterh1}>Ingrese a su cuenta</h1>
                    
                    <Field as={TextField} className={classes.InputForm} name="email" label="Email" variant="outlined" color="secondary"/>
                    <ErrorMessage name="email" component="small" className={classes.errorMessage}/>
                    
                    <Field as={TextField}  className={classes.InputForm} name="password" label="Contraseña" variant="outlined" color="secondary"/>
                    <ErrorMessage name="password" component="small" className={classes.errorMessage}/>
                    
                    <SubmitFormButton 
                    disabled={!(isValid && dirty)}>
                        Ingrese ahora!
                    </SubmitFormButton>
                    </Form>
                </div>
            </div>
            
        )}
        
        </Formik>
     );
}
 
export default Login;