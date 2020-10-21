import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Mainpage from '../../components/main/Mainpage'
import TweetWidgets from '../../components/rightSection/TweetWidgets'
import { theme } from '../../components/MaterialUiTheme/MenuOverride'
import { ThemeProvider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    container: {
     maxWidth: "1200px",
     width: "100%",
     display: "flex",
     margin: "0 auto",
     padding: "0 12px"
    }
}))
const Home = () => {
    const classes = useStyles()
    return ( 
        <>
        <ThemeProvider theme={theme}>
        <div className={classes.container}>
        <Sidebar />
        <Mainpage />
        <TweetWidgets />
        </div>
        </ThemeProvider>
        </>
     );
}
 
export default Home;