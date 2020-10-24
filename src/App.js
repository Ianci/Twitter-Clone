import React from 'react';
import Home from './pages/home/Home'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/register/Register'
import UserDates from './pages/register/UserDates'
import Login from './pages/login/Login'
import useAuth  from './hooks/useAuth'
import Welcome from './pages/welcome/Welcome'
//Firebase
import firebase, { FirebaseContext } from './firebase'


function App() {
  const user = useAuth()
  
  return (

    <FirebaseContext.Provider 
    value={{
          firebase,
          user
          }}
    >

    <div className="app">
      
      <Router>
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/register' component={Register} />
            <Route path='/user-dates' component={UserDates} />
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            {["/home", "/explorer", "/notifications", "/messages", "/bookmark", 
          "/lists", "/profile", "/options"].map(path =>(
            <Route key={path}
            path={path} 
            component={Home} />
            
          ))}
        </Switch>
      </Router>
      </div>
   
    </FirebaseContext.Provider>
  );
}

export default App;
