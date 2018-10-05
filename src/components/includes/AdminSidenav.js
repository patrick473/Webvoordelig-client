import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Sidenav extends Component {
  render() {
   

  
    return (

          <ul  id="mobile-nav" className="sidenav">
            <li>
              <Link to="/admin" className="sidebar__item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admin/products" className="sidebar__item">
                Producten 
              </Link>
            </li>
            <li>
              <Link to="/admin/categories" className="sidebar__item">
                Categoriëen 
              </Link>
            </li>
            <li>
              <Link to="/admin/sales" className="sidebar__item">
                Verkoop
              </Link>
            </li>
            <li>
              <Link to="/admin/statistics" className="sidebar__item">
                Statistieken
              </Link>
            </li>
          </ul>
       
    );
  }
}

export default Sidenav;
