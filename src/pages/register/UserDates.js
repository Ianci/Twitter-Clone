import React, { useState, useContext  } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import { FirebaseContext } from '../../firebase'
import { useUser } from 'reactfire'
import { TextField, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import TwitterIcon from '@material-ui/icons/Twitter';
import TweetBox from '../../images/TweetBox.svg'
import SubmitFormButton from './SubmitFormBtn'
import FileUploader from 'react-firebase-file-uploader'
import { useHistory } from 'react-router-dom'
//TimePicker
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'


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
    addProfilePicture: {
        fontSize: "1.2rem",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        fontWeight: 800,
        lineHeight: 1.3325,
    }
    
}))


const Register = () => {
    const classes = useStyles()
    const history = useHistory()
    const [ error, setError ] = useState(false)
    const [ errorMsg, setErrorMsg] = useState('')
    const [ isSubmitting, setIsSubmitting] = useState(false)
   
    //TimePicker State
    const [selectedDate, setSelectedDate] = useState(new Date ('1-1-2000'))

    //Context
    const { user, firebase } = useContext(FirebaseContext)
    
    //FileUploader states
    const [ imageName, setImageName] = useState('')
    const [ progress, setProgress ] = useState(0)
    const [ isUploading, setIsUploading ] =useState(false)
    const [ imageUrl, setImageUrl ] = useState('')
    
    //TimePicker HandleChange 
    const handleDateChange = date => {
        setSelectedDate(date)
    }

    //User information:
    async function userInformation (values){
        if(!user){
            history.push('/')
        }
        const userInfo = {
            name: user.displayName,
            username: values.username,
            id: user.uid,
            date: selectedDate,
            avatar: imageUrl,
            tweets: [],
            
        }
            if(user !== undefined){
                firebase.db.collection('users').doc(user.uid).set(userInfo)
                setTimeout(() => {
                history.push('/home')
                }, 3000);
            }
           
        
      
    }
    
   
   //FileUploader Functions
   const handleUploadStart = () => {
    setIsUploading(true)
    setProgress(0)
}
const handleProgress = progress => {
    setProgress({ progress })
}

const handleUploadSuccess = filename => {
    setImageName(filename)
    setProgress(100)
    setIsUploading(false)
    firebase
    .storage
    .ref("users")
    .child(filename)
    .getDownloadURL()
    .then(url => {
        setImageUrl(url)
        console.log(url)
    });
    
    }
    const handleUploadError = error => {
        setIsUploading(false)
        
    }

    return ( 
        
        <Formik initialValues={{ username: "", date: "01-01-2000"}}
        validationSchema= {Yup.object({
            
            username: Yup.string()
            .required('Por favor introduce tu nombre')
            .max(15, 'Tu nombre debe contener 15 caracteres máximo'),
            
            
            
        })}
        onSubmit={(values, {setSubmitting}) => {
                setIsSubmitting(true)
                setSubmitting(true)
                
                console.log(values);
                
                userInformation(values);
                setSubmitting(false);
        }}
        >
            {( {isValid, dirty}) =>(
            
            <div className={classes.registerContainer}>
                    <div className={classes.ImageLeft}>
                        <img src={TweetBox} alt="twitter-left-img" />
                    </div>
                    <div className={classes.containerForm}>
                    
                    {isSubmitting ? 
                    <h1 className={classes.thanksText}>Gracias por registrarse, lo estamos redirigiendo a la pantalla de inicio</h1>
                    :
                    <Form style={{display: "flex", flexDirection: "column"}}>
                        <TwitterIcon style={{height: "50px", width: "50px"}} color="primary"/>
                        <h1 className={classes.twitterh1}>Completa los datos de tu cuenta</h1>
                        
    
                
                        <Field as={TextField} style={{marginLeft: "1rem"}} type="text" className={classes.InputForm} name="username" label="Nombre de tu cuenta" variant="outlined" color="secondary"/>
                        <ErrorMessage name="username" style={{display: "flex"}} component="small" className={classes.errorMessage} />
                        
                        
                        
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            margin="normal"
                            id="date-picker"
                            label="Selecciona tu fecha de nacimiento"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            name="date"        
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                        </MuiPickersUtilsProvider>

                         <ErrorMessage name="date" style={{display: "flex"}} component="small" className={classes.errorMessage} />

                      
                        

                       
                            <p className={classes.addProfilePicture}> Añada su foto de perfil</p>
                            <FileUploader
                            accept="image/*"
                            randomizeFilename
                            storageRef={firebase.storage.ref("users")}
                            onUploadStart={handleUploadStart}
                            onUploadError={handleUploadError}
                            onUploadSuccess={handleUploadSuccess}
                            onProgress={handleProgress}
                            className={classes.fileUploader}
                         
                            />
                        
                        

                       
                        <SubmitFormButton 
                        type="submit"
                        disabled={!(isValid && dirty)}
                        >
                           Aceptar y finalizar
                        </SubmitFormButton>
                        </Form>
                        
                        }
                        { error && <p className={classes.errorMessage}> {errorMsg} </p>}
                        </div>
                    </div> 
            )}
            
        </Formik>
            
     );
}
 
export default Register;