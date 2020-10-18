import React from 'react';
import {
    fade,
    withStyles,
    ThemeProvider,
    createMuiTheme
  } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';

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

const StyledInputTwitter = withStyles((theme) => ({
    
    input: {
      borderRadius: "20px",
      position: 'relative',
      backgroundColor: "#243447",
      border: 'none',
      fontSize: 16,
      width: 'auto',
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
    },
  }))(InputBase);


export const InputSearchTwitter = () => {
    return (
        <>
        <ThemeProvider theme={theme}>
        <StyledInputTwitter placeholder="Buscar en Twitter" id="twitter-input" />
        </ThemeProvider>
        <p>Hola</p>
        </>
    )
}