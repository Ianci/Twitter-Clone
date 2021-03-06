import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme =>({
    root: {
      display: (props) => props.size === "medium" ? 'block' : 'inline-flex',

      backgroundColor: "rgb(26, 145, 218)",
      background: "rgb(26, 145, 218)",
      borderRadius: 50,

      width: (props) => props.size === "medium" ? '300px' : '20px',

      border: 0,
      color: 'white',

      height: (props) => props.size === "medium"
      ? '45px'
      : '30px',

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


  function MyButton(props){
  const { size , ...other} = props
  const classes = useStyles(props);
  return ( 
            <Button 
            
            variant="contained"
            classes={{
            root: classes.root,
            label: classes.label
            }} 
            {...other} />
  )
}

MyButton.propTypes = {
  size: PropTypes.oneOf(['medium', 'small']).isRequired,
}

export const MediumTweetButton = (props) => {
    return ( 
        <MyButton size="medium"
        {...props}>
         Twittear
        </MyButton>
     );
}

export const SmallTweetButton = (props) => {
  return (
    <MyButton size ="small"
    {...props}>
      Twittear
    </MyButton>
  )
}

