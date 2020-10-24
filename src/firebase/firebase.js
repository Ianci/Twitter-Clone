import app from 'firebase/app'
import firebaseConfig from './config'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
class Firebase{
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }
    //Registrar usuario
    async accountRegistration(name, email, password){
    const newUser= await this.auth.createUserWithEmailAndPassword(email, password)
    
    return await newUser.user.updateProfile({
        displayName: name,
        
    })
    
   
    }
    //Login
    async loginUser(email, password){
        return await this.auth.signInWithEmailAndPassword(email,password)
    }
    async logOut(){
        return await this.auth.signOut()
    }
    
}

const firebase = new Firebase()
export default firebase