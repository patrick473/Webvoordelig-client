import React, { Component } from 'react';
import Customer from "./Customer";
import Admin from "./Admin";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
      
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
