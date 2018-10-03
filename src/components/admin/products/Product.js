import React, { Component } from 'react';
import brush24 from '../../../assets/brush24.svg';
import delete24 from '../../../assets/delete24.svg';
import {Link} from "react-router-dom";
class AdminProduct extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.product);
    }
    
    render() {
        const {name,category,price,amount,_id} = this.props.product;
        return (
            <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{amount}</td>
            <td><Link className="btn-flat" href="#" to={'/admin/products/edit?product='+_id}> <i className="material-icons right">edit</i></Link><Link to={'/admin/products/edit/'+_id} className="btn-flat"><i className="material-icons right">delete</i></Link></td>
            <td></td>
            </tr>
        );
    }
}

export default AdminProduct;
