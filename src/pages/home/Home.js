import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Mainpage from '../../components/main/Mainpage'
import TweetWidgets from '../../components/rightSection/TweetWidgets'
import { theme } from '../../components/MaterialUiTheme/MenuOverride'
import { ThemeProvider} from '@material-ui/core';
  
const Home = () => {
    return ( 
        <>
        <ThemeProvider theme={theme}>
        <Sidebar />
        <Mainpage />
        <TweetWidgets />
        </ThemeProvider>
        </>
     );
}
 
export default Home;