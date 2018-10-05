import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {

    return (

      <nav>
        <div className="nav-wrapper teal lighten-1">
          <a  data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <div className="brand-logo right">Webvoordelig Admin Panel</div>
          <ul  className="left hide-on-med-and-down">
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
        
        </div>
      </nav>


    );
  }
}

export default Header;
