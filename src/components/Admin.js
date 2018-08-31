import React, { Component } from "react";
import AdminHeader from "./includes/AdminHeader";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";

import AdminHome from './admin/AdminHome';
class Admin extends Component {
  render() {
    return (
      <div>
        <AdminHeader />

      
          <div className="sidebar">
            <Link to="/admin" className="sidebar__item">Home</Link>
            <a href="#" className="sidebar__item">Producten Beheren</a>
            <a href="#" className="sidebar__item">Categoriëen beheren</a>
            <a href="#" className="sidebar__item">Verkoop</a>
            <a href="#" className="sidebar__item">Statistieken</a>
            
      
        </div>
        <div className="section__content">
          
            <Router>
              <Switch>
                <Route path="/admin" component={AdminHome} />
              </Switch>
            </Router>
            </div>
      </div>
    );
  }
}

export default Admin;
