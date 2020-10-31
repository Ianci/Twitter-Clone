import React, {useContext, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import TextareaAutosize from 'react-autosize-textarea';
import { ButtonBase } from '@material-ui/core';
import { TweetIcons } from './TweetIcons';
import { useFirestoreDocData, useFirestore, SuspenseWithPerf, useUser } from 'reactfire';
import { SmallTweetButton } from '../sidebar/ButtonSideBar';
import { Formik, Form, ErrorMessage, Field} from 'formik';
import { FirebaseContext } from '../../firebase';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import FileUploader from 'react-firebase-file-uploader'

const useStyles = makeStyles((theme) =>({
    root: {
        
        margin: theme.spacing(2),
        height: theme.spacing(6),
        width: theme.spacing(6),
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1)
        },
    inputTweet: {
        flex: 0.6,
        border: "none",
        background: "none",
        outline: "none",
        height: "55px",
        color: "#fff",
        marginLeft: theme.spacing(1),
        overflowX: "hidden",
        overflowY: "hidden",
        marginTop: theme.spacing(1),
        whiteSpace: "no-wrap",
        fontSize: "1.2rem",
        width: "500px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        resize: "none",
        '&::-webkit-scrollbar': {
            display: "none",
        }
    },
    sendTweet: {
        float: "right"
    },
    avatarTweet: {
        height: "fit-content"
    },
    errorMsg: {
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
        color: "red",
        fontWeight: 600,
        lineHeight: 1,
        fontSize: "1rem",
        padding: "4px"
    },
    fileUploader: {
        margin: theme.spacing(1)
    }

}))
const TweetForm = () => {
    const classes = useStyles()
    const { user, firebase } = useContext(FirebaseContext) 
    const history = useHistory()
    const [ userInformation, setUserInformation ] = useState([])
   const  [ tweetInformation, setTweetInformation] = useState([])
   
   //FileUploader states
   const [ imageName, setImageName] = useState('')
   const [ progress, setProgress ] = useState(0)
   const [ isUploading, setIsUploading ] =useState(false)
   const [ imageUrl, setImageUrl ] = useState('')

   //ReactFire User
   const reactFireUser = useUser()

  
    //Acá se va a guardar en el state la información del usuario, y luego la vamos a usar para
    //rellenar los datos del tweet y lo vamos a almacenar en la BD de Firebase
    let avatarTweet;
    let username;
    let name;

    if(userInformation.length !== 0){
        userInformation.map((data)=>{
            username = data.username
            name = data.name
            avatarTweet = data.avatar
            
        })
        
    }

    //Nos traemos tanto los datos del user como sus tweets
    useEffect(() => {
        const getUserInfo = () =>{
            if(!user) return null;
            if(user){
                firebase.db.collection('users').where('id', '==', user.uid)
                .onSnapshot(getInfo)
                firebase.db.collection('tweets').where('id', '==', user.uid)
                .onSnapshot(getUserTweets)
            }
            
        }
        getUserInfo()
    }, [])

    //Callback function de firebase y guardamos la respuesta en setUserInformation
    function getInfo(snapshot){
        const info = snapshot.docs.map(docc => {
            return {
                id: docc.id,
                ...docc.data()
            }
        });
        setUserInformation(info)
    }
    //Callback function para guardar los tweets en el usuario correspondiente y guardamos la respuesta en setTweetInformation
    function getUserTweets(snapshot){
        const information = snapshot.docs.map(doc =>{
            return {
                ...doc.data()
            }
        }) 
        setTweetInformation(information)
    }
    

    //Funcion para crear tweets
    async function createTweet(values){
        if(!user){
            history.push('/')
        }
        if(userInformation !== undefined){
            
            const tweet = {
                avatarTweet: avatarTweet,
                id: user.uid,
                name: name ,
                username: username,
                favs: 0,
                tweetContent: values.inputTweet,
                date: Date.now(),
                imageTweet: imageUrl
        }
        firebase.db.collection('tweets').add(tweet)
        }
    }

    //Function for avatar 
    function ShowAvatar(){
        
            const response = useFirestore()
            .collection('users')
            .doc(user.uid)
            const avatarUser = useFirestoreDocData(response)
            return <Avatar src={avatarUser.avatar} alt="account-profile" className={classes.root} />
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
        .ref("tweets")
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
        <Formik initialValues={{inputTweet: ""}}
        validationSchema={Yup.object({
            inputTweet: Yup.string()
            .min(1)
            .max(280, '280 caracteres máximos permitidos')
        })}
        
        onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true)

                console.log(values)
                createTweet(values)
               
                resetForm()
                
                setSubmitting(false)
            
        }}>
            {( {isValid, dirty })=> (
            <>
            
            <div className={classes.avatarTweet}>
            <SuspenseWithPerf fallback={<p style={{display: "none"}}>Loading image...</p>}
            traceId={"load-burrito-status"} >
            <ShowAvatar />
            </SuspenseWithPerf>
            </div>
            <Form>
            <div className={classes.tweetBody}>
                <div className={classes.tweetTextArea}>
                    <Field as={TextareaAutosize} name="inputTweet" maxRows={4} className={classes.inputTweet} placeholder="¿Qué está pasando?" />
                    
                </div>
                <div className={classes.iconsContainer} >
                    
                    {TweetIcons.map((icons, index)=>{
                        return(
                            <ButtonBase 
                            key={index}
                            centerRipple>
                                <span>{icons.icon}</span>
                            </ButtonBase>
                        )
                    })}

                
                <div className={classes.sendTweet} >
                    <SmallTweetButton disabled={!(isValid & dirty)}
                    type="submit"/>
                </div>
                <ErrorMessage name="inputTweet" component="h3" className={classes.errorMsg} />
                </div>

            </div>
            <FileUploader
                            accept="image/*"
                            randomizeFilename
                            storageRef={firebase.storage.ref("tweets")}
                            onUploadStart={handleUploadStart}
                            onUploadError={handleUploadError}
                            onUploadSuccess={handleUploadSuccess}
                            onProgress={handleProgress}
                            className={classes.fileUploader}
                         
                            />
            </Form>
            </>
            )}
        
        
        </Formik>
        
     );
}
 
export default TweetForm;