import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>({
    root: {
      backgroundColor: "rgb(26, 145, 218)",
      background: "rgb(26, 145, 218)",
      borderRadius: 50,
      width: "100%",
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 50px',
      '&:hover': {
        backgroundColor: "rgb(26, 145, 218)",
        background: "rgb(26, 145, 218)",
      }
    },
    label: {
      textTransform: 'capitalize',
      fontWeight: "bold",
      fontSize: "15px",
      lineHeight: 1,

    },
  }));

const TweetButton = () => {
    const classes = useStyles();
    return ( 
        <Button 
            variant="contained"
            classes={{
            root: classes.root,
            label: classes.label
        }}>
         Twittear
        </Button>
     );
}
 
export default TweetButton;