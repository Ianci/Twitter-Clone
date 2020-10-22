import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Img2 from '../../images/img2.jpeg'
import TextareaAutosize from 'react-autosize-textarea';
import { ButtonBase } from '@material-ui/core';
import { TweetIcons } from './TweetIcons'
import { SmallTweetButton } from '../sidebar/ButtonSideBar'
import { Formik, Form, ErrorMessage, Field} from 'formik'
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


    //TextArea Fn to resizing height

    return ( 
        <Formik initialValues={{inputTweet: ""}}
        validationSchema={Yup.object({
            inputTweet: Yup.string()
            .min(1)
            .max(280, '280 caracteres máximos permitidos')
        })}
        
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {

                console.log(JSON.stringify( values, null, 2));
 
                setSubmitting(false);
            }, 400);
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