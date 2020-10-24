import React from 'react';
import './styles/LUX.css';
import './styles/app.css';
import {BrowserRouter, Link, Route, Switch, useHistory} from "react-router-dom";
import Navigation from "./components/Navigation";
import PageNotFound from "./components/pageNotFound";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import PropPage from "./components/PropPage";

function App() {
  let history = useHistory()
  // onClick={()=>history.push('/')}
  return (
    <BrowserRouter className="App">
      <Navigation/>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/users/:username' component={User}/>
          <Route path='/propPage' component={() => (<PropPage text='Random text from App'/>)}/>
          <Route path='/about' component={About}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
