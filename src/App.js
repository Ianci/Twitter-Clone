import React from 'react';
import Home from './pages/home/Home'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/register/Register'
import Login from './pages/login/Login'

//Firebase
import firebase, { FirebaseContext } from './firebase'

function App() {
  return (

    <FirebaseContext.Provider 
    value={{firebase}}
    >

    <div className="app">
      <div className="container">
      <Router>
        <Switch>
          {["/", "/home", "/explorer", "/notifications", "/messages", "/bookmark", 
          "/lists", "/profile", "/options"].map(path =>(
            <Route key={path}
            path={path} 
            component={Home} />
            
          ))}
            <Route path='/register' component={Register} />

            <Route path='/Login' component={Login} />
        </Switch>
      </Router>
      </div>
    </div>
    </FirebaseContext.Provider>
  );
}

export default App;
