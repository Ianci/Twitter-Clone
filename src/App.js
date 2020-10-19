import React from 'react';
import Home from './pages/home/Home'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
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
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
