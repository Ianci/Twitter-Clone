import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Mainpage from '../../components/main/Mainpage'
import { theme } from '../../components/MaterialUiTheme/MenuOverride'
import { ThemeProvider} from '@material-ui/core';
  
const Home = () => {
    return ( 
        <>
        <ThemeProvider theme={theme}>
        <Sidebar />
        <Mainpage />
        </ThemeProvider>
        </>
     );
}
 
export default Home;