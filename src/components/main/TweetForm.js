import React, {useContext, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Img2 from '../../images/img2.jpeg'
import TextareaAutosize from 'react-autosize-textarea';
import { ButtonBase } from '@material-ui/core';
import { TweetIcons } from './TweetIcons';
import { formatDistance } from 'date-fns'
import { SmallTweetButton } from '../sidebar/ButtonSideBar';
import { Formik, Form, ErrorMessage, Field} from 'formik';
import { FirebaseContext } from '../../firebase';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

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

    }
}))
const TweetForm = () => {
    const classes = useStyles()
    const { user, firebase } = useContext(FirebaseContext) 
    const history = useHistory()
    const [ userInformation, setUserInformation ] = useState([])
   
    let username;
    let name;
    if(userInformation.length !== 0){
        userInformation.map((data)=>{
            username = data.username
            name = data.name
        })
        console.log(username)
    }
    

    useEffect(() => {
        const getUserInfo = () =>{
            if(user){
                firebase.db.collection('users').where('id', '==', user.uid)
                .onSnapshot(getInfo)
            }
            
        }
        getUserInfo()
    }, [])
    
    function getInfo(snapshot){
        const info = snapshot.docs.map(docc => {
            return {
                id: docc.id,
                ...docc.data()
            }
        });
        setUserInformation(info)
    }
    
    async function createTweet(values){
        if(!user){
            history.push('/')
        }
        if(userInformation !== undefined){
            
            const tweet = {
                id: user.uid,
                name: name ,
                username: username,
                favs: 0,
                tweetContent: values.inputTweet,
                date: Date.now()
        }
        firebase.db.collection('tweets').doc(user.uid).set(tweet)
    }

        
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
                setSubmitting(false);
            
        }}>
            {( {isValid, dirty })=> (
            <>
            
            <div className={classes.avatarTweet}>
                <Avatar src={Img2} alt="account-profile" className={classes.root}/>
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
            </Form>
            </>
            )}
        
        
        </Formik>
        
     );
}
 
export default TweetForm;