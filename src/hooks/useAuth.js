import React, { useEffect, useState } from 'react';
import firebase from '../firebase'

//Este hook se va a ocupar de revisar en todo momento si existe un usuario logued (auth)
// onAuthState es un método de Firebase
//Si hay un usuario el hook guarda al usuario y si no hay no guarda nada
function useAuth (){
    const [ authUser, setAuthUser ] = useState(null)
    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged( user => {
            if( user) {
                setAuthUser(user)
            } else {
                setAuthUser(null) 
            }
        });
        return () => unsuscribe();
    }, [])
    return authUser
}
export default useAuth