import React, { useEffect, useContext } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Mainpage from '../../components/main/Mainpage'
import TweetWidgets from '../../components/rightSection/TweetWidgets'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../firebase'

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
    const { user } = useContext(FirebaseContext)
    const history = useHistory()

    console.log(user)

    //Security. Si no hay usuario logueado, push to welcome page
    useEffect(() => {
        if(!user){
            history.push('/')
        }
    }, [])

    return ( 
        <>
        

        <div className={classes.container}>

        <Sidebar />
        <Mainpage />
        <TweetWidgets />

        </div>

        
        </>
     );
}
 
export default Home;