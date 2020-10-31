import React, { useEffect,useState,useContext} from 'react';
import { useFirestoreDocData, useFirestore, SuspenseWithPerf } from 'reactfire';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { FirebaseContext } from '../../firebase/index'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
const SidebarAvatar = () => {
    const classes = useStyles()
    const { user } = useContext(FirebaseContext)
    
   
    
    if(!user) return null

    //Function for avatar 
    function ShowAvatar(){
      const response = useFirestore()
      .collection('users')
      .doc(user.uid)
      const avatarUser = useFirestoreDocData(response)
      return <Avatar src={avatarUser.avatar} alt="account-profile" className={classes.root} />
    }
      
    //Function for UserName
    function ShowUserName(){
      const response = useFirestore()
      .collection('users')
      .doc(user.uid)
      const userName = useFirestoreDocData(response)
      return <span className="s-account">{userName.username}</span>
    }
 
    
  
    return ( 
        <>

        <SuspenseWithPerf fallback={<p style={{display: "none"}}>Loading image...</p>}
        traceId={"load-burrito-status"} >
        <ShowAvatar />
        </SuspenseWithPerf>

        <div className="account-name">
            <p className="p-name">{user.displayName}</p>
            <SuspenseWithPerf fallback={<p style={{display: "none"}}>Loading...</p>}>
            <ShowUserName />
            </SuspenseWithPerf>
        </div>
        
        </>
     );
}
 
export default SidebarAvatar;