import React, { useState } from 'react';
import { selectUser, userSlice } from './features/userSlice';
import './App.css';
import Header from './Header';
import {
 BrowserRouter as Router, 
Switch, 
Route, 
Redirect, 
} from 'react-router-dom';
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import { useSelector } from 'react-redux';
function App() {
  const user = useSelector(selectUser)
  const  [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
    <div className="app">
      <Switch> 
      <Route exact path="/">
       <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
       {isMenuOpen && <Menu />}
       <HeaderBlock />
       </Route>
       <Route exact path="/login">
         <Login />
         {user ? <Redirect to='/teslaaccount'/> : <Login />}
       </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
