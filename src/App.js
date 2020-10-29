import React, { Suspense } from 'react';
import Home from './pages/home/Home'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Register from './pages/register/Register'
import UserDates from './pages/register/UserDates'
import Login from './pages/login/Login'
import useAuth  from './hooks/useAuth'
import Welcome from './pages/welcome/Welcome'
//Firebase
import firebase, { FirebaseContext } from './firebase'
//ReactFire
import { FirebaseAppProvider, AuthCheck } from 'reactfire';

//Inicializando ReactFire
const reactFireConfig = {
  apiKey: "AIzaSyBC9pM_O1o6tBqU3xHuhhL1nBtUn7NOmOg",
  authDomain: "twitter-clone-2034f.firebaseapp.com",
  databaseURL: "https://twitter-clone-2034f.firebaseio.com",
  projectId: "twitter-clone-2034f",
  storageBucket: "twitter-clone-2034f.appspot.com",
  messagingSenderId: "179566592067",
  appId: "1:179566592067:web:c3b05d33106a0a353754f6"
}

function App() {  
  const user= useAuth()

  console.log(user)

  return (

    <FirebaseContext.Provider value={{ firebase, user}}>
      <FirebaseAppProvider firebaseConfig={reactFireConfig}>
      <div className="app">
        <Router>
          <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/register' component={Register} />
              <Route path='/user-dates' component={UserDates} />

              <Suspense fallback={'Loading user...'}>
              <AuthCheck fallback={<Login />}>
                  <Home />
              </AuthCheck>
              </Suspense>
              <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </div>
      </FirebaseAppProvider>
    </FirebaseContext.Provider>
  );
}

export default App;
