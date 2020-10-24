import React, {Component} from 'react';
import {Link, useHistory} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PageNotFound from "./pageNotFound";


const Navigation = () => {
  let history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">

      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
              aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          {/*<Link className="nav-link" to='/'>Home</Link>*/}
          {/*<Link className="nav-link" to='/about'>About</Link>*/}
          <a className="nav-link"  onClick={()=>history.push('/')}>Home</a>
          <a className="nav-link"  onClick={()=>history.push('/about')}>About</a>

          <Link className="nav-link"  onClick={()=>history.push('/')}>Home Link</Link>
          <Link className="nav-link"  onClick={()=>history.push('/about')}>About Link</Link>
          <a className="nav-link" href='/about'>href-About</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
