import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
         background: "yellow"
        }
    },
});

