import React, { Component } from "react";
import { Link } from "react-router-dom";

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
class AdminProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchAmount: 10,
      page: 1
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
      console.log(event.target.value);
    this.setState({
      searchAmount: parseInt(event.target.value)
    });
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
          <div className="col-lg-1">
            <label>Amount:</label>
            <select value={this.state.searchAmount} onChange={this.handleSearchChange}>
              <option defaultValue value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-8" />
        </div>
      </div>
    );
  }
}

export default AdminProducts;
