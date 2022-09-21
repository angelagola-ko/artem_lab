import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exac path='/register' compent={Register}/>
    </Router>
  );
}

export default App;
