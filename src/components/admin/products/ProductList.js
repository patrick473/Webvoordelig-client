import React, { PureComponent } from "react";
import axios from "axios";
import AdminProduct from "./Product";
import * as Materialize from 'materialize-css'

const exampleCard = {
  _id: "5b86e476a8228b3354bac2a4",
  category: "pokemon",
  name: "Granbull",
  set: "Great Encounters",
  quality: "near mint",
  rarity: "uncommon",
  holo: false,
  price: 650,
  collectorNumber: "39/106",
  extra: "",
  picture: "https://www.serebii.net/card/greatencounters/39.jpg",
  amount: 1
};

class ProductList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      currentProducts: [],
      amountofProducts: 0,
      queryAmount: 10,
      queryBegin:1,
      queryEnd:10,
      searchText: ""
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }
  handleQueryChange(event) {
    console.log(event.target.value);
    this.setState({
      queryAmount: parseInt(event.target.value, 10)
    });
  }
  handleSearchChange(event) {
    console.log(event.target.value);
    this.setState({
      searchText: event.target.value
    });
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/products/amount").then(response => {
      this.setState({ amountofProducts: response.data.count });
      console.log(this.state.amountofProducts);
    });
  }
  render() {
    var selects = document.querySelectorAll('select');
    Materialize.FormSelect.init(selects);
    return (
      <div>
        <div className="row">
          <div className="col l4 s4 m4 input-field">
         
            <select
              value={this.state.queryAmount}
              onChange={this.handleQueryChange}
            >
              <option defaultValue value="10">
                10
              </option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label> entries</label>
          </div>
          <div className="col s8 m8 l8 input-field">
            <label>Searchterm </label>
            <input
              type="search"
              value={this.state.searchText}
              onChange={this.handleSearchChange}
            />
          </div>
        </div>

        <div className="row">
        <table className="highlight" >
        <thead>
        <tr>
        <th>name</th>
        <th>category</th>
        <th>price</th>
        <th>amount</th>
        <th></th>
        <th></th></tr>
        </thead>
        <tbody>
        <AdminProduct product={exampleCard} />
        <AdminProduct product={exampleCard} />
        <AdminProduct product={exampleCard} />
        <AdminProduct product={exampleCard} />
        <AdminProduct product={exampleCard} />
        </tbody>
        <tfoot>
        <tr>
        <th>name</th>
        <th>category</th>
        <th>price</th>
        <th>amount</th>
        <th></th>
        <th></th></tr>
        </tfoot>
        </table>
        </div>
        <div className="row">
        <div className="col-lg-2">
        Showing {this.state.queryBegin} to {this.state.queryEnd}
        </div>
        
        <div className="col-lg-2">
        Pagination
        </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
