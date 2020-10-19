import React, { useState, useEffect } from 'react';
import {
    makeStyles,
    withStyles,
    ThemeProvider,
    createMuiTheme
  } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import { Timeline } from 'react-twitter-widgets'
import { whoToFollow } from './WhoToFollow'
import Avatar from '@material-ui/core/Avatar' 
import Button from '@material-ui/core/Button'

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
    },
    whoToFollow: {
      border: "1px solid rgba(221,221,221,0.1)",
      borderRadius: "10px",
      display: "flex",
      fleDirection: "column",
      marginTop: theme.spacing(1)
    },
    whoToFollowText: {
      borderBottom: "1px solid grey",
      marginBottom: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      color: "#fff",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
      fontSize: '1.2rem',
      fontWeight: 800,
      lineHeight: 1.3125
    },
    avatarSize: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    whoToFollowAccounts: {
      width: '-webkit-fill-available'
    },
    whoToFollowContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(221,221,221,0.1)',
      padding: theme.spacing(2)
    },
    whoToFollowAccount: {
      textAlign: "center",
      color: "#fff",
      display: "inline",
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(1),
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
      fontWeight: 'bold',
      lineHeight: 1.3125
    },
    account: {
      fontWeight: '100',
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",
      color: 'grey'

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
 
  const handleChange = e => {
    if(e.target.value === ''){
      setChange("reactjs")
    }
  }

  useEffect(() => {
    
  }, [change])

  
   
  return ( 
    <>
        
         <ThemeProvider theme={theme}>
        <div className={classes.container}>
        
        <StyledInputTwitter placeholder="Buscar en Twitter" 
         name="input" 
         onChange={e => setChange(e.target.value)}
         onBlur={handleChange}
         id="twitter-input"/>

          <div className={classes.containerTimeLine}>
            <Timeline
            dataSource={{ sourceType: "profile", screenName: `${change}` }}
            options={{ theme: "dark", width: "320", height: "600", margin: "20px" }}
            />
          </div>

          <div className={classes.whoToFollow}>
           
            <div className={classes.whoToFollowAccounts}>
            <p className={classes.whoToFollowText}>A quién seguir</p>
              {whoToFollow.map((account, index) => {
                return(
                  <div className={classes.whoToFollowContainer}>
                  <Avatar src={account.profilePic} alt="account-profile" className={classes.avatarSize}/>
                  
                  <div className={classes.whoToFollowAccount}>
                  <span>{account.name}</span>
                  <br/>
                  <span className={classes.account}>{account.account}</span>
                  </div>
                  <Button variant="outlined" color="primary" href={account.href} target="_blank">
                    Seguir
                  </Button>
                  </div>
                )
                })}
            </div>
          </div>
        </div>
        </ThemeProvider>
        
        </>
   );
}
 
export default InputSearchTwitter;