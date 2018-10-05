import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Customer extends Component {
    render() {
        return (
            <div>
            <Link className="btn" href="#" to="/admin">go to admin</Link>
            </div>
        );
    }
}

export default Customer;
