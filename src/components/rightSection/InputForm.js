import React, { useState, useEffect } from 'react';
import {
    makeStyles,
    withStyles,
    ThemeProvider,
    createMuiTheme
  } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import { Timeline } from 'react-twitter-widgets'


const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#35baf6',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        margin: "10px 17px",
        marginTop: "5px"
    },
    containerTimeLine: {
      marginTop: theme.spacing(2)
    }
}));

const StyledInputTwitter = withStyles((theme) => ({
    
    input: {
      borderRadius: "20px",
      position: 'relative',
      backgroundColor: "#243447",
      border: 'none',
      fontSize: 16,
      width: '250px',
      color: "#fff",
      padding: '10px 12px',
      // Use the system font instead of the default Roboto font.
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
      '&.Mui-focused': {
        borderColor: 'green',
      },
      "&::placeholder": {
        color: "#fff"
      }
    },
  }))(InputBase);


const InputSearchTwitter = () => {

  const classes = useStyles()
  const [ change, setChange ] = useState("reactjs")
    
  
  return ( 
    <>
         <ThemeProvider theme={theme}>
        <div className={classes.container}>
        
        <StyledInputTwitter placeholder="Buscar en Twitter" 
         name="input" onChange={e => setChange(e.target.value)}
         id="twitter-input"/>
          <div className={classes.containerTimeLine}>
         <Timeline
          dataSource={{ sourceType: "profile", screenName: `${change}` }}
          options={{ theme: "dark", width: "300", height: "600", margin: "20px" }}
        />
        </div>
        </div>
        </ThemeProvider>
        
        </>
   );
}
 
export default InputSearchTwitter;