import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductList from './products/ProductList';

class AdminProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
   
  }

 
  render() {
    return (
      <div>
        <br />

        <div className="row">
          <div className="col-lg-2">
           
            <Link to="/admin/products/new" className="btn btn--brand">
              Nieuw Product
            </Link>
          </div>
          
          <div className="col-lg-1" />
          <div className="col-lg-8" />
        </div>
        <ProductList/>
      </div>
    );
  }
}

export default AdminProducts;
