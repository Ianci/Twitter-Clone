import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import React from 'react'


const StyledButton = withStyles({
  root: {
    boxShadow: 'none',
    color: '#fff',
    textTransform: 'none',
    fontSize: 16,
    padding: '10px 22px',
    border: '1px solid',
    borderRadius: '20px',
    width: '100%',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));

const WelcomeButton = (props) => {
    const classes = useStyles()
    return (
        <StyledButton 
        className={classes.margin}
        type="button"
        variant={props}
        color={props}
        {...props}>
            {props.children}
        </StyledButton>
    )
}

export default WelcomeButton