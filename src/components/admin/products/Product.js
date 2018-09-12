import React, { Component } from 'react';


class AdminProduct extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.product);
    }
    
    render() {
        const {name,category,price,amount} = this.props.product;
        return (
            <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{amount}</td>
            <td></td>
            <td></td>
            </tr>
        );
    }
}

export default AdminProduct;
