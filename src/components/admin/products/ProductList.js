import React, { PureComponent } from 'react';
import axios from 'axios';
class ProductList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          page: 1,
          currentProducts: [],
          amountofProducts: 0

        };
       
      }
    componentDidMount(){
        
        axios.get('http://localhost:5000/api/products/amount')
        .then((response)=>{
           
            this.setState({amountofProducts:response.data.count});
            console.log(this.state.amountofProducts);
        })
    }
    render() {
        return (
            <div>
              g  
            </div>
        );
    }
}


export default ProductList;