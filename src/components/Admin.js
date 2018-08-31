import React, { Component } from "react";
import AdminHeader from "./includes/AdminHeader";
import {Route,Link} from "react-router-dom";

import AdminHome from './admin/AdminHome';
import AdminProducts from './admin/AdminProducts';
import AdminProductsNew from './admin/AdminProductsNew';
import AdminCategories from './admin/AdminCategories';
import AdminSales from './admin/AdminSales';
import AdminStatistics from './admin/AdminStatistics';

class Admin extends Component {
  render() {
    return (
      <div>
        <AdminHeader />

      
          <div className="sidebar">
            <Link to="/admin" className="sidebar__item">Home</Link>
            <Link to="/admin/products" className="sidebar__item">Producten Beheren</Link>
            <Link to="/admin/categories" className="sidebar__item">Categoriëen beheren</Link>
            <Link to="/admin/sales" className="sidebar__item">Verkoop</Link>
            <Link to="/admin/statistics" className="sidebar__item">Statistieken</Link>
            
      
        </div>
        <div className="section__content">
          
            
                <Route exact  path="/admin" component={AdminHome} />
                <Route exact path="/admin/products" component={AdminProducts} />
                <Route path="/admin/products/new" component={AdminProductsNew} />
                <Route path="/admin/categories" component={AdminCategories} />
                <Route path="/admin/sales" component={AdminSales} />
                <Route path="/admin/statistics" component={AdminStatistics} />
             
            </div>
      </div>
    );
  }
}

export default Admin;
