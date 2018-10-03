import React, { Component } from 'react';
import {Link} from "react-router-dom";
class AdminProducts extends Component {
    render() {
        return (
            <div>
             <Link to="/admin/products" className="btn btn--brand">Ga terug</Link>
            </div>
        );
    }
}

export default AdminProducts;
