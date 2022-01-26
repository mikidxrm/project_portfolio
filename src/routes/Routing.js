import React from 'react'
import { HashRouter as Router, Routes,Route, Switch ,Link } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
// import { AuthProvider } from '../components/Auth'
import Home from '../Pages/Home';
import Portfolio from '../Pages/portfolio';
import About from '../Pages/about';
import performmance from '../Pages/performance';







function Routing() {
  return (
   
      <Router>
         
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/About" component={About} />
          <Route exact path="/performmance" component={performmance} />
        </Switch>
       
      </Router>
   
  );
}

export default Routing;
