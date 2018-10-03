import React, { Component } from "react";
import {Route} from "react-router-dom";

import AdminHeader from "./includes/AdminHeader";
import AdminSidenav from './includes/AdminSidenav';
import AdminHome from './admin/AdminHome';
import AdminProducts from './admin/AdminProducts';
import AdminProductsNew from './admin/products/ProductsNew';
import AdminProductsEdit from './admin/products/EditProduct';
import AdminCategories from './admin/AdminCategories';
import AdminSales from './admin/AdminSales';
import AdminStatistics from './admin/AdminStatistics';

class Admin extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <AdminSidenav/>
      
       
        <div className="container">
          
            
                <Route exact  path="/admin" component={AdminHome} />
                <Route exact path="/admin/products" component={AdminProducts} />
                <Route path="/admin/products/new" component={AdminProductsNew} />
                <Route path="/admin/products/edit" component={AdminProductsEdit} />
                <Route path="/admin/categories" component={AdminCategories} />
                <Route path="/admin/sales" component={AdminSales} />
                <Route path="/admin/statistics" component={AdminStatistics} />
             
            </div>
      </div>
    );
  }
}

export default Admin;
