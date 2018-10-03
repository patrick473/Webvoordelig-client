import React, { Component } from 'react';
import ReactBody from 'react-body';
import * as Materialize from 'materialize-css'

import Customer from "./Customer";
import Admin from "./Admin";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


class App extends Component {
  render() {
    document.addEventListener('DOMContentLoaded', function() {
      var sidenavs = document.querySelectorAll('.sidenav');
       Materialize.Sidenav.init(sidenavs);
       var selects = document.querySelectorAll('select');
     Materialize.FormSelect.init(selects);
    });

    return (
      <div>
      <ReactBody className="nopadding"/>
      <Router>
     
    
      <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Customer}/>
      
      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
